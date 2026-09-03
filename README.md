# Cyber Runner: O Resgate do Algoritmo 🚀

Plataforma educacional gamificada para treinamento prático de **Lógica de Programação**, desenvolvida para o ensino médio e técnico.

---

## 🌟 Funcionalidades Principais

1. **Modo Dual de Linguagem (Portugol e Python)**:
   - Os alunos podem optar por responder os desafios em **Portugol** ou **Python** diretamente no cadastro ou alternar a qualquer momento durante a missão.
   - **60 fases progressivas**: Do básico (condicionais, laços, vetores) aos algoritmos avançados (busca binária, ordenação, recursão, tabelas hash, programação dinâmica e criptografia modular).

2. **Interface Sem Scroll (0 Scroll) & Alternativas Randomizadas**:
   - Formulário de cadastro em linha de 4 colunas (**Nome**, **Turma**, **Login**, **Senha**).
   - Grade 2x2 para alternativas de resposta com **embaralhamento dinâmico (Fisher-Yates)** a cada tentativa/fase, evitando memorização posicional e cópia entre computadores vizinhos.

3. **Avanço no Ritmo do Aluno & Sistema de Energias**:
   - Ao acertar uma questão, o aluno visualiza o feedback positivo e a explicação pedagógica completa, avançando para a próxima fase no seu próprio ritmo ao clicar no botão **PRÓXIMA FASE ➔**.
   - **Sistema de Foco e Vidas**: Trocas de janela ou aba durante a partida resultam na dedução de **1 energia** (de 3 energias disponíveis), com alerta sonoro e visual.

4. **Painel do Professor & Monitor em Tempo Real**:
   - Visualização de desempenho por turma (1TECA, 1ADMA, 1INFOA, etc.), taxa de conclusão, média de notas e violações.
   - Exportação de relatórios em **CSV para Excel** e **Backup JSON**.

---

---

## 🌐 Arquitetura de Dados: Supabase (.env) + SQLite (Offline)

O sistema foi arquitetado para ser **100% tolerante a falhas e resiliente a quedas de conexão** (*Offline-First*):

| Camada | Função | Onde os dados ficam |
|---|---|---|
| **SQLite (`database.sqlite`)** | **Offline / Rede Local** | Gravação imediata no servidor local (XAMPP/PHP). Funciona sem internet e é criado automaticamente. |
| **LocalStorage** | **Offline de Emergência** | Cache interno do navegador em cada máquina cliente. |
| **Supabase Cloud** | **Online / Centralização** | Sincronização em tempo real quando houver internet. |

---

## 🗄️ Configuração do Banco de Dados

### 1. Banco Local SQLite (`database.sqlite`)

O SQLite é a opção mais rápida e já vem integrada nativamente com o PHP (`api.php`).

#### A. Criação 100% Automática:
Você **não** precisa instalar nenhum SGBD (como MySQL ou Postgres). Na primeira vez que qualquer aluno entra no jogo ou o professor acessa o painel, o arquivo `database.sqlite` é gerado automaticamente na raiz do projeto com todas as tabelas necessárias.

#### B. Permissões de Gravação (XAMPP / Windows):
Para que o Apache/PHP consiga gravar os dados no arquivo SQLite:
- Certifique-se de que a pasta `c:\xampp\htdocs\estudarprogramar` possui permissão de escrita.
- No Windows, clique com o botão direito na pasta do projeto -> **Propriedades** -> desmarque a opção **Somente Leitura** se estiver marcada e confirme.

#### C. Estrutura das Tabelas Criadas Automaticamente:
```sql
-- Tabela de Tentativas e Progresso dos Alunos
CREATE TABLE IF NOT EXISTS student_attempts (
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
);

-- Tabela de Contas dos Alunos
CREATE TABLE IF NOT EXISTS student_users (
    id TEXT PRIMARY KEY,
    login TEXT UNIQUE,
    password_hash TEXT,
    first_name TEXT,
    student_class TEXT,
    avatar TEXT,
    created_at TEXT
);
```

#### D. Como Visualizar os Dados do SQLite:
- Baixe o aplicativo gratuito [DB Browser for SQLite](https://sqlitebrowser.org/).
- Abra o arquivo `c:\xampp\htdocs\estudarprogramar\database.sqlite` para inspecionar notas, turmas e tentativas salvas.

---

### 2. Banco de Dados na Nuvem Supabase (PostgreSQL)

O Supabase sincroniza os dados de todos os alunos em tempo real, permitindo que o professor acompanhe a aula de qualquer dispositivo pela internet.

#### A. Criar o Projeto no Supabase:
1. Acesse [supabase.com](https://supabase.com) e faça login (gratuito).
2. Clique em **"New Project"**.
3. Escolha um nome (ex: `cyber-runner`), defina uma senha de banco e escolha uma região próxima (ex: `São Paulo (sa-east-1)`).

#### B. Criar a Tabela no Supabase (SQL Editor):
1. No menu lateral esquerdo do Supabase, clique em **SQL Editor**.
2. Clique em **New Query**.
3. Cole o script SQL abaixo e clique em **Run**:

```sql
-- 1. Criação da tabela principal de tentativas dos alunos
CREATE TABLE IF NOT EXISTS public.student_attempts (
    id TEXT PRIMARY KEY,
    student_name TEXT,
    student_class TEXT,
    student_login TEXT,
    character_name TEXT,
    character_avatar TEXT,
    score INTEGER DEFAULT 0,
    progress_percentage INTEGER DEFAULT 0,
    stages_completed INTEGER DEFAULT 0,
    correct_answers INTEGER DEFAULT 0,
    wrong_attempts INTEGER DEFAULT 0,
    lives_remaining INTEGER DEFAULT 4,
    status TEXT DEFAULT 'EM ANDAMENTO',
    timestamp TIMESTAMPTZ DEFAULT NOW(),
    stage_results JSONB,
    raw_json JSONB
);

-- 2. Habilita o Row Level Security (Segurança por Linha)
ALTER TABLE public.student_attempts ENABLE ROW LEVEL SECURITY;

-- 3. Políticas de Acesso para a chave pública anon
-- Permite que os alunos salvem suas tentativas
CREATE POLICY "Permitir insercao anonima" ON public.student_attempts
    FOR INSERT WITH CHECK (true);

-- Permite atualizar pontuações durante a partida
CREATE POLICY "Permitir atualizacao anonima" ON public.student_attempts
    FOR UPDATE USING (true);

-- Permite ao Painel do Professor consultar os dados das turmas
CREATE POLICY "Permitir leitura publica" ON public.student_attempts
    FOR SELECT USING (true);
```

#### C. Conectar o Projeto ao Supabase via `.env`:
1. No painel do Supabase, vá em **Project Settings** (ícone de engrenagem) -> **API**.
2. Copie a **Project URL** e a chave pública **anon / public key**.
3. Na pasta do projeto (`c:\xampp\htdocs\estudarprogramar`), crie ou edite o arquivo `.env`:

```env
# URL do Projeto Supabase
SUPABASE_URL=https://seu-codigo-projeto.supabase.co

# Chave Pública Anon do Supabase
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Modo de Armazenamento: 'hybrid' (salva no SQLite local E no Supabase), 'supabase' ou 'sqlite'
STORAGE_MODE=hybrid
```

> **Dica**: No próprio jogo, há um botão de engrenagem no rodapé onde o professor também pode inserir essas chaves visualmente caso execute sem servidor PHP local!

---

## 🔒 Como Adicionar e Configurar o `.htaccess` (Apache / XAMPP)

O arquivo `.htaccess` na raiz do projeto cumpre **duas funções vitais**:
1. **Permissões do VLibras Widget**: Envia o cabeçalho `Permissions-Policy` autorizando o player Unity WebGL do VLibras a acessar sensores sem disparar violações no console do navegador (`accelerometer is not allowed in this document`).
2. **Proteção de Dados**: Bloqueia o download indevido de arquivos sensíveis pelo navegador (`database.sqlite`, `.env`, `professor_auth.json`).

---

### 1. Criando o Arquivo `.htaccess` no Windows

No Windows Explorer, criar um arquivo com nome iniciado por ponto pode gerar o aviso *"Você deve digitar um nome de arquivo"*. Use um destes métodos simples:

- **Método 1 (PowerShell / Terminal - Recomendado)**:
  ```powershell
  New-Item -Path .htaccess -ItemType File -Force
  ```
- **Método 2 (Bloco de Notas)**:
  Abra o Bloco de Notas -> Salvar Como -> selecione o tipo **"Todos os arquivos (*.*)"** -> salve como `".htaccess"` (com aspas).
- **Método 3 (VS Code)**:
  Crie um novo arquivo direto na raiz com o nome `.htaccess`.

---

### 2. Conteúdo Completo do `.htaccess`

Copie e cole o seguinte conteúdo no arquivo `.htaccess` na raiz do projeto (`c:\xampp\htdocs\estudarprogramar\.htaccess`):

```apache
# =========================================================================
# CONFIGURAÇÃO APACHE / XAMPP - CYBER RUNNER & VLIBRAS
# =========================================================================

# 1. POLÍTICA DE PERMISSÕES PARA O VLIBRAS WIDGET (UNITY WEBGL)
# Elimina a mensagem [Violation] accelerometer is not allowed in this document
<IfModule mod_headers.c>
    Header always set Permissions-Policy "accelerometer=(self \"https://vlibras.gov.br\" \"https://*.vlibras.gov.br\" \"https://cdn.jsdelivr.net\"), gyroscope=(self \"https://vlibras.gov.br\" \"https://*.vlibras.gov.br\" \"https://cdn.jsdelivr.net\"), magnetometer=(self \"https://vlibras.gov.br\" \"https://*.vlibras.gov.br\" \"https://cdn.jsdelivr.net\")"
</IfModule>

# 2. SEGURANÇA: BLOQUEIA ACESSO DIRETO A ARQUIVOS SENSÍVEIS PELO NAVEGADOR
# Impede o download indevido do SQLite e variáveis de ambiente
<FilesMatch "^(\.env|\.env\..*|database\.sqlite|\.git.*)$">
    <IfModule mod_authz_core.c>
        Require all denied
    </IfModule>
    <IfModule !mod_authz_core.c>
        Order deny,allow
        Deny from all
    </IfModule>
</FilesMatch>

# 3. CHARSET E TIPOS MIME PADRÃO
AddDefaultCharset UTF-8
<IfModule mod_mime.c>
    AddType application/json .json
    AddType application/wasm .wasm
    AddType image/webp .webp
    AddType image/svg+xml .svg
</IfModule>
```

---

### 3. Como Habilitar o `.htaccess` no Apache do XAMPP

Para que o Apache do XAMPP leia as regras do `.htaccess`:

#### Passo 1: Abrir o arquivo de configuração do Apache (`httpd.conf`)
1. Abra o **XAMPP Control Panel**.
2. Na linha do **Apache**, clique no botão **Config** e selecione **Apache (httpd.conf)**.
   *(Ou abra o arquivo `C:\xampp\apache\conf\httpd.conf`)*.

#### Passo 2: Ativar os Módulos Necessários
Pressione `Ctrl + F` e certifique-se de que as seguintes linhas estão **sem `#`** no início:

```apache
LoadModule headers_module modules/mod_headers.so
LoadModule rewrite_module modules/mod_rewrite.so
```

#### Passo 3: Permitir Sobrescrita (`AllowOverride All`)
Procure no arquivo pelo bloco `<Directory "C:/xampp/htdocs">` (em torno da linha 240-260) e altere para `AllowOverride All`:

```apache
<Directory "C:/xampp/htdocs">
    Options Indexes FollowSymLinks Includes ExecCGI
    
    # Altere AllowOverride None para AllowOverride All:
    AllowOverride All
    
    Require all granted
</Directory>
```

#### Passo 4: Reiniciar o Apache
No **XAMPP Control Panel**, clique em **Stop** no Apache e depois em **Start** para aplicar as configurações.

---

### 4. Como Testar se o `.htaccess` está Funcionando

1. **Teste de Proteção de Arquivos**:
   - Tente acessar: `http://localhost/estudarprogramar/database.sqlite` ou `http://localhost/estudarprogramar/.env`.
   - **Resultado esperado**: O navegador deve exibir **403 Forbidden** (Acesso Negado).
2. **Teste do VLibras**:
   - Abra `http://localhost/estudarprogramar/` com o Console do DevTools (`F12`) aberto.
   - **Resultado esperado**: Nenhuma mensagem de violação de acelerômetro (`Permissions policy violation`) aparecerá.

---

## 🔐 Acesso e Senha do Professor

O acesso ao Painel do Professor (`professor.html` ou aba "Painel do Professor") é protegido por código de autorização.

### Como Alterar a Senha do Professor:
Abra o arquivo `professor_auth.json` na raiz do projeto e edite o campo `codigoAcesso`:

```json
{
  "codigoAcesso": "PROF2026",
  "descricao": "Código de acesso do Professor ao painel de monitoramento do Cyber Runner."
}
```

*(Caso execute o jogo diretamente como arquivo local `file:///`, a mesma senha pode ser ajustada também em `professor_auth.js`)*.

---

## 📂 Estrutura de Arquivos

- `index.html`: Interface principal do aluno, gamificação e widget VLibras com acessibilidade.
- `professor.html`: Painel avançado de monitoramento de turmas e métricas em tempo real.
- `.htaccess`: Regras do Apache para permissões de sensores do VLibras e proteção de dados.
- `.env`: Arquivo de variáveis de ambiente com as credenciais do Supabase.
- `.env.example`: Modelo documentado para fácil configuração.
- `api.php` / `api/index.php`: API REST PHP com persistência SQLite e sincronização com Supabase.
- `questions.json` / `questions.js`: Banco estruturado com as 60 fases completas em Portugol e Python.
- `professor_auth.json` / `professor_auth.js`: Configuração de segurança e código de acesso do professor.
- `vercel.json`: Configuração de deploy para o ambiente Serverless da Vercel.

---

## 🚀 Como Executar

1. **Servidor Local (XAMPP / PHP)**:
   - Coloque a pasta do projeto dentro de `C:/xampp/htdocs/estudarprogramar`.
   - Inicie o **Apache** no painel do XAMPP.
   - Acesse no navegador: `http://localhost/estudarprogramar/`.

2. **Nuvem (Vercel / Supabase)**:
   - Faça o deploy no Vercel (já configurado com `vercel.json`).
   - Defina as variáveis de ambiente `SUPABASE_URL` e `SUPABASE_ANON_KEY` nas configurações da Vercel ou via `.env`.


