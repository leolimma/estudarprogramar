# Cyber Runner: O Resgate do Algoritmo 🚀

Plataforma educacional gamificada para treinamento prático de **Lógica de Programação**, desenvolvida para o ensino médio e técnico.

---

## 🌟 Funcionalidades Principais

1. **Modo Dual de Linguagem (Portugol e Python)**:
   - Os alunos podem optar por responder os desafios em **Portugol** ou **Python** diretamente no cadastro ou alternar a qualquer momento durante a missão.
   - **60 fases progressivas**: Do básico (condicionais, laços, vetores) aos algoritmos avançados (busca binária, ordenação, recursão, tabelas hash, programação dinâmica e criptografia modular).

2. **Interface Sem Scroll (0 Scroll)**:
   - Formulário de cadastro em linha de 4 colunas (**Nome**, **Turma**, **Login**, **Senha**).
   - Grade 2x2 para alternativas de resposta.

3. **Avanço no Ritmo do Aluno & Sistema de Vidas**:
   - Ao acertar uma questão, o aluno visualiza o feedback positivo e a explicação pedagógica completa, avançando para a próxima fase no seu próprio ritmo ao clicar no botão **PRÓXIMA FASE ➔**.
   - **Sistema de Foco e Vidas**: Trocas de janela ou aba durante a partida resultam na dedução de **1 vida** (de 3 vidas disponíveis), com alerta sonoro e visual.

4. **Painel do Professor & Monitor em Tempo Real**:
   - Visualização de desempenho por turma (1TECA, 1ADMA, 1INFOA, etc.), taxa de conclusão, média de notas e violações.
   - Exportação de relatórios em **CSV para Excel** e **Backup JSON**.

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
- `professor.html`: Painel avançado de gestão e acompanhamento do professor.
- `questions.json` / `questions.js`: Banco estruturado com as 60 fases completas em Portugol e Python.
- `professor_auth.json` / `professor_auth.js`: Configuração de segurança e código de acesso do professor.
- `api.php` / `api/index.php`: API REST PHP com banco SQLite para persistência em servidor local (XAMPP) e Vercel Serverless.

---

## 🚀 Como Executar

1. **Servidor Local (XAMPP / PHP)**:
   - Coloque os arquivos dentro de `htdocs/estudarprogramar`.
   - Acesse no navegador: `http://localhost/estudarprogramar/`.

2. **Nuvem (Vercel / Supabase)**:
   - Faça o deploy no Vercel (já configurado com `vercel.json`).
   - Configure o Supabase para sincronização em nuvem pelo botão ⚙️ no Painel do Professor.
