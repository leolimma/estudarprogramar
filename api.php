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
 * Carrega variáveis de ambiente do arquivo .env (se existir)
 */
function loadEnv($path = __DIR__ . '/.env') {
    if (!file_exists($path)) {
        $parentPath = dirname(__DIR__) . '/.env';
        if (file_exists($parentPath)) {
            $path = $parentPath;
        } else {
            return;
        }
    }

    $lines = @file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    if ($lines === false) return;

    foreach ($lines as $line) {
        $line = trim($line);
        if ($line === '' || strpos($line, '#') === 0) {
            continue;
        }

        $parts = explode('=', $line, 2);
        if (count($parts) === 2) {
            $key = trim($parts[0]);
            $val = trim($parts[1]);

            // Remove aspas simples ou duplas envolventes
            $len = strlen($val);
            if ($len >= 2) {
                $first = $val[0];
                $last = $val[$len - 1];
                if (($first === '"' && $last === '"') || ($first === "'" && $last === "'")) {
                    $val = substr($val, 1, -1);
                }
            }

            if (!empty($key)) {
                $_ENV[$key] = $val;
                $_SERVER[$key] = $val;
                putenv("$key=$val");
            }
        }
    }
}

// Inicializa variáveis do .env
loadEnv();

/**
 * Obtém valor de variável de ambiente com fallback
 */
function getEnvVar($key, $default = '') {
    $val = $_ENV[$key] ?? $_SERVER[$key] ?? getenv($key);
    return ($val !== false && $val !== null && $val !== '') ? $val : $default;
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

/**
 * Obtém configuração do Supabase com suporte a múltiplos padrões (.env padrão e Vite)
 */
function getSupabaseConfig() {
    $url = getEnvVar('VITE_SUPABASE_URL', getEnvVar('SUPABASE_URL', ''));
    $key = getEnvVar('VITE_SUPABASE_PUBLISHABLE_KEY', getEnvVar('SUPABASE_ANON_KEY', getEnvVar('VITE_SUPABASE_ANON_KEY', getEnvVar('SUPABASE_KEY', getEnvVar('SUPABASE_PUBLISHABLE_KEY', '')))));
    return [$url, $key];
}

/**
 * Envio opcional e resiliente para o Supabase via REST
 */
function syncRecordToSupabase($record) {
    list($supabaseUrl, $supabaseKey) = getSupabaseConfig();

    if (empty($supabaseUrl) || empty($supabaseKey) || strlen($supabaseUrl) < 8 || strlen($supabaseKey) < 10) {
        return false;
    }

    $endpoint = rtrim($supabaseUrl, '/') . '/rest/v1/student_attempts';
    $payload = json_encode([
        'id' => (string)($record['id'] ?? uniqid('att_')),
        'student_name' => $record['studentName'] ?? ($record['student_name'] ?? ''),
        'student_class' => $record['studentClass'] ?? ($record['student_class'] ?? ''),
        'student_login' => $record['studentLogin'] ?? ($record['student_login'] ?? ''),
        'character_name' => $record['characterName'] ?? ($record['character_name'] ?? ''),
        'character_avatar' => $record['characterAvatar'] ?? ($record['character_avatar'] ?? '⚡'),
        'score' => (int)($record['score'] ?? 0),
        'progress_percentage' => (int)($record['progressPercentage'] ?? ($record['progress_percentage'] ?? 0)),
        'stages_completed' => (int)($record['stagesCompleted'] ?? ($record['stages_completed'] ?? 0)),
        'correct_answers' => (int)($record['correctAnswers'] ?? ($record['correct_answers'] ?? 0)),
        'wrong_attempts' => (int)($record['wrongAttempts'] ?? ($record['wrong_attempts'] ?? 0)),
        'lives_remaining' => (int)($record['livesRemaining'] ?? ($record['lives_remaining'] ?? 3)),
        'status' => $record['status'] ?? 'EM ANDAMENTO',
        'stage_results' => $record['stageResults'] ?? ($record['stage_results'] ?? []),
        'raw_json' => json_encode($record, JSON_UNESCAPED_UNICODE)
    ]);

    $opts = [
        'http' => [
            'method' => 'POST',
            'header' => "Content-Type: application/json\r\n" .
                        "apikey: $supabaseKey\r\n" .
                        "Authorization: Bearer $supabaseKey\r\n" .
                        "Prefer: resolution=merge-duplicates\r\n",
            'content' => $payload,
            'timeout' => 2 // Timeout curto para não bloquear se estiver sem internet
        ]
    ];

    $ctx = stream_context_create($opts);
    @file_get_contents($endpoint, false, $ctx);
    return true;
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

    // Configuração pública do sistema (Supabase URL / Anon Key via .env)
    if ($action === 'get_config') {
        list($supabaseUrl, $supabaseAnonKey) = getSupabaseConfig();
        $storageMode = getEnvVar('STORAGE_MODE', 'hybrid');
        $isSupabaseConfigured = (!empty($supabaseUrl) && !empty($supabaseAnonKey) && strlen($supabaseUrl) > 8 && strlen($supabaseAnonKey) > 10);

        echo json_encode([
            'success' => true,
            'supabase_url' => $supabaseUrl,
            'supabase_anon_key' => $supabaseAnonKey,
            'storage_mode' => $storageMode,
            'is_supabase_configured' => $isSupabaseConfigured,
            'is_sqlite_available' => true,
            'database' => basename($dbPath),
            'storage' => 'SQLite + Supabase (.env Hybrid)',
            'timestamp' => date('c')
        ]);
        exit;
    }

    // Healthcheck / Status
    if ($action === 'status') {
        list($supabaseUrl, $supabaseAnonKey) = getSupabaseConfig();
        $isSupabaseConfigured = (!empty($supabaseUrl) && !empty($supabaseAnonKey));

        echo json_encode([
            'success' => true,
            'storage' => 'SQLite (' . ($isTmp ? 'Vercel /tmp' : 'Servidor Local') . ')' . ($isSupabaseConfigured ? ' + Supabase (.env Ativo)' : ''),
            'database' => basename($dbPath),
            'path' => $dbPath,
            'is_tmp' => $isTmp,
            'supabase_configured' => $isSupabaseConfigured,
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

        // 1. Grava no SQLite local (Garantia offline total)
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

        // 2. Sincronização em nuvem não-bloqueante se o Supabase estiver configurado
        $syncedCloud = false;
        if (getEnvVar('STORAGE_MODE', 'hybrid') !== 'sqlite') {
            $syncedCloud = syncRecordToSupabase($record);
        }

        echo json_encode([
            'success' => true, 
            'id' => $record['id'],
            'storage' => 'sqlite',
            'cloud_sync' => $syncedCloud
        ]);
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

    echo json_encode(['success' => true, 'msg' => 'API SQLite do Cyber Runner operacional com suporte a Supabase via .env']);

} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
