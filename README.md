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

## 🌐 Arquitetura Híbrida: Supabase (.env) + SQLite (Offline)

O sistema foi arquitetado para ser **100% tolerante a falhas e resiliente a quedas de conexão** (*Offline-First*):

| Camada | Função | Onde os dados ficam |
|---|---|---|
| **SQLite (`database.sqlite`)** | **Offline / Rede Local** | Gravação imediata no servidor local (XAMPP/PHP). Funciona sem internet. |
| **LocalStorage** | **Offline de Emergência** | Cache interno do navegador em cada máquina cliente. |
| **Supabase Cloud** | **Online / Centralização** | Sincronização automática em tempo real quando houver internet. |

---

## ⚙️ Configuração do `.env` (Supabase)

Para conectar à nuvem Supabase sem precisar configurar máquina por máquina, utilize o arquivo `.env`:

1. Copie o arquivo de exemplo:
   ```bash
   copy .env.example .env
   ```
2. Abra o `.env` e insira suas credenciais:
   ```env
   SUPABASE_URL=https://seu-projeto.supabase.co
   SUPABASE_ANON_KEY=sua-chave-anon-publica
   STORAGE_MODE=hybrid
   ```
3. Pronto! Ao carregar o jogo ou o Painel do Professor, o sistema detecta as credenciais automaticamente via `api.php?action=get_config`.

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

- `index.html`: Interface principal do aluno e gameplay.
- `professor.html`: Painel avançado de gestão e acompanhamento do professor em tempo real.
- `.env`: Arquivo de variáveis de ambiente com as credenciais do Supabase.
- `.env.example`: Modelo documentado para fácil configuração.
- `api.php` / `api/index.php`: API REST PHP com leitor nativo de `.env` e persistência em SQLite (`database.sqlite`) / Vercel Serverless.
- `questions.json` / `questions.js`: Banco estruturado com as 60 fases completas em Portugol e Python.
- `professor_auth.json` / `professor_auth.js`: Configuração de segurança e código de acesso do professor.

---

## 🚀 Como Executar

1. **Servidor Local (XAMPP / PHP)**:
   - Coloque os arquivos dentro de `htdocs/estudarprogramar`.
   - Acesse no navegador: `http://localhost/estudarprogramar/`.

2. **Nuvem (Vercel / Supabase)**:
   - Faça o deploy no Vercel (já configurado com `vercel.json`).
   - Defina as variáveis de ambiente `SUPABASE_URL` e `SUPABASE_ANON_KEY` nas configurações da Vercel ou via `.env`.
