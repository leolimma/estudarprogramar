<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

$requestMethod = $_SERVER['REQUEST_METHOD'] ?? 'GET';

if ($requestMethod === 'OPTIONS') {
    exit(0);
}

/**
 * Obtém a conexão PDO com o SQLite.
 * Se o diretório atual for somente leitura (como no ambiente Serverless da Vercel),
 * o banco é copiado e aberto em /tmp/database.sqlite.
 */
function getDatabaseConnection() {
    $dbDir = __DIR__;
    $dbPath = $dbDir . '/database.sqlite';
    $tmpDbPath = sys_get_temp_dir() . '/database.sqlite';

    $isVercel = isset($_SERVER['VERCEL']) || isset($_ENV['VERCEL']);
    $useTmp = $isVercel || !is_writable($dbDir) || (file_exists($dbPath) && !is_writable($dbPath));

    if ($useTmp) {
        if (!file_exists($tmpDbPath) && file_exists($dbPath)) {
            @copy($dbPath, $tmpDbPath);
        }
        $dbPath = $tmpDbPath;
    }

    try {
        $db = new PDO('sqlite:' . $dbPath);
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        // Garante tabelas existentes
        createTablesIfNotExists($db);

        return [$db, $dbPath, $useTmp];
    } catch (Throwable $e) {
        // Se ainda não estava usando /tmp e deu erro de permissão/abertura, tenta /tmp
        if ($dbPath !== $tmpDbPath) {
            if (!file_exists($tmpDbPath) && file_exists($dbPath)) {
                @copy($dbPath, $tmpDbPath);
            }
            $dbPath = $tmpDbPath;
            $db = new PDO('sqlite:' . $dbPath);
            $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            createTablesIfNotExists($db);
            return [$db, $dbPath, true];
        }
        throw $e;
    }
}

function createTablesIfNotExists($db) {
    $db->exec("CREATE TABLE IF NOT EXISTS student_attempts (
        id TEXT PRIMARY KEY,
        student_name TEXT,
        student_class TEXT,
        student_login TEXT,
        character_name TEXT,
        character_avatar TEXT,
        score INTEGER,
        progress_percentage INTEGER,
        stages_completed INTEGER,
        correct_answers INTEGER,
        wrong_attempts INTEGER,
        lives_remaining INTEGER,
        status TEXT,
        timestamp TEXT,
        stage_results TEXT,
        raw_json TEXT
    )");

    $db->exec("CREATE TABLE IF NOT EXISTS student_users (
        id TEXT PRIMARY KEY,
        login TEXT UNIQUE,
        password_hash TEXT,
        first_name TEXT,
        student_class TEXT,
        avatar TEXT,
        created_at TEXT
    )");
}

try {
    list($db, $dbPath, $isTmp) = getDatabaseConnection();

    $action = $_GET['action'] ?? '';
    
    // Leitura do corpo JSON para requisições POST / DELETE
    $inputJSON = file_get_contents('php://input');
    $input = json_decode($inputJSON, true) ?? [];
    if (!$action && isset($input['action'])) {
        $action = $input['action'];
    }

    // Healthcheck / Status
    if ($action === 'status') {
        echo json_encode([
            'success' => true,
            'storage' => 'SQLite (' . ($isTmp ? 'Vercel /tmp' : 'Servidor Local') . ')',
            'database' => basename($dbPath),
            'path' => $dbPath,
            'is_tmp' => $isTmp,
            'timestamp' => date('c')
        ]);
        exit;
    }

    // Salvar ou atualizar tentativa do aluno
    if ($action === 'save_attempt' || ($requestMethod === 'POST' && (isset($input['id']) || isset($input['record'])) && !isset($input['login']))) {
        $record = isset($input['record']) ? $input['record'] : $input;
        if (!isset($record['id'])) {
            echo json_encode(['success' => false, 'error' => 'ID ausente no registro']);
            exit;
        }

        $stmt = $db->prepare("INSERT OR REPLACE INTO student_attempts 
            (id, student_name, student_class, student_login, character_name, character_avatar, score, progress_percentage, stages_completed, correct_answers, wrong_attempts, lives_remaining, status, timestamp, stage_results, raw_json) 
            VALUES (:id, :student_name, :student_class, :student_login, :character_name, :character_avatar, :score, :progress_percentage, :stages_completed, :correct_answers, :wrong_attempts, :lives_remaining, :status, :timestamp, :stage_results, :raw_json)");

        $stmt->execute([
            ':id' => (string)$record['id'],
            ':student_name' => $record['studentName'] ?? ($record['student_name'] ?? ''),
            ':student_class' => $record['studentClass'] ?? ($record['student_class'] ?? ''),
            ':student_login' => $record['studentLogin'] ?? ($record['student_login'] ?? ''),
            ':character_name' => $record['characterName'] ?? ($record['character_name'] ?? ''),
            ':character_avatar' => $record['characterAvatar'] ?? ($record['character_avatar'] ?? ''),
            ':score' => (int)($record['score'] ?? 0),
            ':progress_percentage' => (int)($record['progressPercentage'] ?? ($record['progress_percentage'] ?? 0)),
            ':stages_completed' => (int)($record['stagesCompleted'] ?? ($record['stages_completed'] ?? 0)),
            ':correct_answers' => (int)($record['correctAnswers'] ?? ($record['correct_answers'] ?? 0)),
            ':wrong_attempts' => (int)($record['wrongAttempts'] ?? ($record['wrong_attempts'] ?? 0)),
            ':lives_remaining' => (int)($record['livesRemaining'] ?? ($record['lives_remaining'] ?? 0)),
            ':status' => $record['status'] ?? '',
            ':timestamp' => $record['timestamp'] ?? date('d/m/Y H:i:s'),
            ':stage_results' => json_encode($record['stageResults'] ?? ($record['stage_results'] ?? [])),
            ':raw_json' => json_encode($record, JSON_UNESCAPED_UNICODE)
        ]);

        echo json_encode(['success' => true, 'id' => $record['id']]);
        exit;
    }

    // Listar todas as tentativas (para o Painel do Professor)
    if ($action === 'get_attempts' || ($requestMethod === 'GET' && empty($action))) {
        $stmt = $db->query("SELECT raw_json FROM student_attempts ORDER BY rowid DESC");
        $rows = $stmt->fetchAll(PDO::FETCH_COLUMN);
        $attempts = [];
        foreach ($rows as $row) {
            $item = json_decode($row, true);
            if ($item) {
                $attempts[] = $item;
            }
        }
        echo json_encode(['success' => true, 'attempts' => $attempts]);
        exit;
    }

    // Apagar uma tentativa específica
    if ($action === 'delete_attempt' || $requestMethod === 'DELETE') {
        $id = $_GET['id'] ?? ($input['id'] ?? null);
        if ($id) {
            $stmt = $db->prepare("DELETE FROM student_attempts WHERE id = :id");
            $stmt->execute([':id' => (string)$id]);
            echo json_encode(['success' => true, 'deleted_id' => $id]);
        } else {
            echo json_encode(['success' => false, 'error' => 'ID ausente para exclusão']);
        }
        exit;
    }

    // Apagar todos os registros (Reset do Professor)
    if ($action === 'clear_all') {
        $db->exec("DELETE FROM student_attempts");
        echo json_encode(['success' => true, 'cleared' => true]);
        exit;
    }

    // Salvar Usuário (Cadastro de Aluno)
    if ($action === 'save_user') {
        $user = $input['user'] ?? $input;
        if (!isset($user['id']) || !isset($user['login'])) {
            echo json_encode(['success' => false, 'error' => 'Dados de usuário incompletos']);
            exit;
        }
        $stmt = $db->prepare("INSERT OR REPLACE INTO student_users 
            (id, login, password_hash, first_name, student_class, avatar, created_at)
            VALUES (:id, :login, :password_hash, :first_name, :student_class, :avatar, :created_at)");
        $stmt->execute([
            ':id' => (string)$user['id'],
            ':login' => strtolower(trim($user['login'])),
            ':password_hash' => $user['password'] ?? ($user['password_hash'] ?? ''),
            ':first_name' => $user['firstName'] ?? ($user['first_name'] ?? ''),
            ':student_class' => $user['studentClass'] ?? ($user['student_class'] ?? ''),
            ':avatar' => $user['avatar'] ?? '',
            ':created_at' => date('c')
        ]);
        echo json_encode(['success' => true]);
        exit;
    }

    // Listar Usuários cadastrados
    if ($action === 'get_users') {
        $stmt = $db->query("SELECT id, login, password_hash as password, first_name as firstName, student_class as studentClass, avatar FROM student_users");
        $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode(['success' => true, 'users' => $users]);
        exit;
    }

    echo json_encode(['success' => true, 'msg' => 'API SQLite do Cyber Runner operacional']);

} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
