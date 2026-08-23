/**
 * Cyber Runner - Banco de Questões e Fases (60 Fases - Portugol e Python)
 */
(function(root) {
  var STAGES = [
  {
    "id": 1,
    "pythonFilename": "modulo_portao.py",
    "pythonCodeTemplate": "if chave_de_acesso == \"CYBER_KEY\":\n    abrir_portao()\n<span class=\"code-gap\">_____</span>:\n    disparar_alarme()",
    "pythonOptions": [
      {
        "text": "else",
        "correct": true,
        "feedback": "Correto! O bloco 'else' executa quando a condição do 'if' é falsa em Python."
      },
      {
        "text": "while",
        "correct": false,
        "feedback": "Incorreto! 'while' é um laço de repetição."
      },
      {
        "text": "for",
        "correct": false,
        "feedback": "Incorreto! 'for' percorre iterações."
      },
      {
        "text": "return",
        "correct": false,
        "feedback": "Incorreto! 'return' encerra a função."
      }
    ],
    "pythonExplanation": "Em Python, a estrutura if / else permite decidir entre dois blocos com base em um teste lógico.",
    "title": "Fase 1: Condicionais Simples (SE / SENÃO)",
    "concept": "Decisão Binária Básica (if / else)",
    "filename": "modulo_portao.algo",
    "scenario": "O Portão Neural de Neo-Curitiba está trancado. Se a chave criptográfica for 'CYBER_KEY', liberar o acesso; caso contrário (senão), soar o alarme de invasão.",
    "codeTemplate": "se (chaveDeAcesso == \"CYBER_KEY\") {\n    abrirPortao();\n} <span class=\"code-gap\">_____</span> {\n    dispararAlarme();\n}",
    "options": [
      {
        "text": "senao",
        "correct": true,
        "feedback": "Correto! O bloco 'SENÃO' (else) executa exatamente quando a condição 'SE' (if) é falsa."
      },
      {
        "text": "enquanto",
        "correct": false,
        "feedback": "Incorreto! 'ENQUANTO' (while) é um laço de repetição, não uma bifurcação condicional contrária."
      },
      {
        "text": "repetir",
        "correct": false,
        "feedback": "Incorreto! 'REPETIR' cria loops, enquanto queremos executar a alternativa ao 'SE'."
      },
      {
        "text": "retornar",
        "correct": false,
        "feedback": "Incorreto! 'RETORNAR' devolve um valor ou encerra a função, não tratando o fluxo contrário."
      }
    ],
    "explanation": "Em lógica de programação, a estrutura SE / SENÃO permite que o computador escolha entre dois caminhos exclusivos com base em um teste lógico."
  },
  {
    "id": 2,
    "pythonFilename": "roteador_trafego.py",
    "pythonCodeTemplate": "if pacote[\"tipo\"] == \"URGENTE\":\n    enviar_canal(\"Alfa\")\n<span class=\"code-gap\">____</span> pacote[\"tipo\"] == \"NORMAL\":\n    enviar_canal(\"Beta\")\nelse:\n    enviar_canal(\"Padrao\")",
    "pythonOptions": [
      {
        "text": "elif",
        "correct": true,
        "feedback": "Exato! Em Python, 'elif' (else if) testa uma nova condição se o 'if' anterior for falso."
      },
      {
        "text": "and",
        "correct": false,
        "feedback": "Incorreto! 'and' é um operador lógico de conjunção."
      },
      {
        "text": "for",
        "correct": false,
        "feedback": "Incorreto! 'for' é um laço de repetição."
      },
      {
        "text": "break",
        "correct": false,
        "feedback": "Incorreto! 'break' interrompe um laço."
      }
    ],
    "pythonExplanation": "O 'elif' em Python permite encadear múltiplos testes em ordem hierárquica.",
    "title": "Fase 2: Condicionais Encadeadas (SENÃO SE)",
    "concept": "Múltiplas Condições Sequenciais (else if)",
    "filename": "roteador_trafego.algo",
    "scenario": "O Roteador da Megacity precisa classificar pacotes de dados. Se for 'URGENTE', vai para o Canal Alfa; senão se for 'NORMAL', vai para o Canal Beta; senão, vai para o Canal Padrão.",
    "codeTemplate": "se (pacote.tipo == \"URGENTE\") {\n    enviarCanal(\"Alfa\");\n} <span class=\"code-gap\">____________</span> (pacote.tipo == \"NORMAL\") {\n    enviarCanal(\"Beta\");\n} senao {\n    enviarCanal(\"Padrao\");\n}",
    "options": [
      {
        "text": "senao se",
        "correct": true,
        "feedback": "Exato! 'SENÃO SE' (else if) testa uma nova condição caso a primeira tenha sido falsa."
      },
      {
        "text": "e tambem",
        "correct": false,
        "feedback": "Incorreto! 'E' é um operador lógico de conjunção, não uma estrutura condicional encadeada."
      },
      {
        "text": "para cada",
        "correct": false,
        "feedback": "Incorreto! 'PARA CADA' é usado para iterar sobre listas ou coleções de itens."
      },
      {
        "text": "pare",
        "correct": false,
        "feedback": "Incorreto! 'PARE' (break) interrompe a execução de laços ou switches."
      }
    ],
    "explanation": "O 'SENÃO SE' permite encadear múltiplos testes em ordem hierárquica. Assim que uma condição verdadeira é encontrada, as seguintes são ignoradas."
  },
  {
    "id": 3,
    "pythonFilename": "escudo_quantico.py",
    "pythonCodeTemplate": "if energia >= 80 <span class=\"code-gap\">___</span> gerador_calibrado == True:\n    ativar_escudo_quantico()",
    "pythonOptions": [
      {
        "text": "and (E lógico)",
        "correct": true,
        "feedback": "Perfeito! Em Python, o operador 'and' exige que ambas as condições sejam verdadeiras."
      },
      {
        "text": "or (OU lógico)",
        "correct": false,
        "feedback": "Incorreto! 'or' ativaria o escudo mesmo descalibrado!"
      },
      {
        "text": "not (NÃO lógico)",
        "correct": false,
        "feedback": "Incorreto! 'not' inverte o valor booleano."
      },
      {
        "text": "==",
        "correct": false,
        "feedback": "Incorreto! '==' é comparação de igualdade."
      }
    ],
    "pythonExplanation": "Em Python, o operador 'and' retorna True apenas quando ambas as expressões forem verdadeiras.",
    "title": "Fase 3: Operadores Lógicos (E / AND / &&)",
    "concept": "Conjunção Lógica: Ambos devem ser Verdadeiros",
    "filename": "escudo_quantico.algo",
    "scenario": "O Escudo de Proteção só pode ser ativado com segurança se o nível de energia for maior ou igual a 80 E o gerador estiver devidamente calibrado.",
    "codeTemplate": "se (energia >= 80 <span class=\"code-gap\">___</span> geradorCalibrado == verdadeiro) {\n    ativarEscudoQuantico();\n}",
    "options": [
      {
        "text": "&& (E lógico)",
        "correct": true,
        "feedback": "Perfeito! O operador '&&' (E) exige que AMBAS as condições sejam verdadeiras simultaneamente."
      },
      {
        "text": "|| (OU lógico)",
        "correct": false,
        "feedback": "Incorreto! O '||' (OU) ativaria o escudo mesmo se o gerador estivesse descalibrado, causando curto-circuito!"
      },
      {
        "text": "! (NÃO lógico)",
        "correct": false,
        "feedback": "Incorreto! O '!' inverte o valor booleano, e não conecta duas expressões lógicas."
      },
      {
        "text": "==",
        "correct": false,
        "feedback": "Incorreto! '==' é um operador de comparação de igualdade entre dois valores."
      }
    ],
    "explanation": "Na tabela-verdade do operador 'E' (AND), o resultado final só é VERDADEIRO quando todas as premissas forem verdadeiras ao mesmo tempo."
  },
  {
    "id": 4,
    "pythonFilename": "sensor_intrusao.py",
    "pythonCodeTemplate": "if (sensor_optico == True <span class=\"code-gap\">__</span> sensor_sonoro == True) and not modo_manutencao:\n    ativar_protocolo_defesa()",
    "pythonOptions": [
      {
        "text": "or (OU lógico)",
        "correct": true,
        "feedback": "Excelente! Em Python, o operador 'or' é verdadeiro se pelo menos um sensor disparar."
      },
      {
        "text": "and (E lógico)",
        "correct": false,
        "feedback": "Incorreto! 'and' exigiria ambos os sensores juntos."
      },
      {
        "text": "!=",
        "correct": false,
        "feedback": "Incorreto! '!=' compara diferença."
      },
      {
        "text": "+=",
        "correct": false,
        "feedback": "Incorreto! '+=' é atribuição de incremento."
      }
    ],
    "pythonExplanation": "Em Python, usam-se as palavras-chave em inglês 'or' (para disjunção) e 'not' (para negação).",
    "title": "Fase 4: Operadores Lógicos (OU / || e NÃO / !)",
    "concept": "Disjunção e Negação Lógica (OR & NOT)",
    "filename": "sensor_intrusao.algo",
    "scenario": "O alarme deve disparar se o sensor óptico OU o sensor sonoro detectar anomalia, contanto que o sistema NÃO esteja em modo de manutenção.",
    "codeTemplate": "se ((sensorOptico == true <span class=\"code-gap\">__</span> sensorSonoro == true) && !modoManutencao) {\n    ativarProtocoloDefesa();\n}",
    "options": [
      {
        "text": "|| (OU lógico)",
        "correct": true,
        "feedback": "Excelente! O operador '||' (OU) retorna verdadeiro se PELO MENOS UM dos sensores disparar."
      },
      {
        "text": "&& (E lógico)",
        "correct": false,
        "feedback": "Incorreto! Se usássemos '&&', o alarme só tocaria se AMBOS os sensores disparassem juntos, permitindo invasões sorrateiras."
      },
      {
        "text": "!=",
        "correct": false,
        "feedback": "Incorreto! '!=' significa 'diferente de' e compara valores."
      },
      {
        "text": "++",
        "correct": false,
        "feedback": "Incorreto! '++' é o operador de incremento numérico (+1)."
      }
    ],
    "explanation": "O operador 'OU' (OR) é flexível: basta que uma condição seja satisfeita. O operador '!' (NOT) inverte o estado lógico de verdadeiro para falso."
  },
  {
    "id": 5,
    "pythonFilename": "restaurar_blocos.py",
    "pythonCodeTemplate": "for contador in <span class=\"code-gap\">________</span>(5):\n    restaurar_bloco_memoria(contador)",
    "pythonOptions": [
      {
        "text": "range",
        "correct": true,
        "feedback": "Muito bem! Em Python, 'range(5)' gera a sequência de índices 0, 1, 2, 3 e 4 para o loop 'for'."
      },
      {
        "text": "step",
        "correct": false,
        "feedback": "Incorreto! 'step' é o passo dentro de range()."
      },
      {
        "text": "len",
        "correct": false,
        "feedback": "Incorreto! 'len' calcula o tamanho de uma coleção."
      },
      {
        "text": "list",
        "correct": false,
        "feedback": "Incorreto! 'list' cria uma lista."
      }
    ],
    "pythonExplanation": "Em Python, 'for i in range(N)' é a forma padrão de executar um laço N vezes (de 0 a N-1).",
    "title": "Fase 5: Estrutura de Repetição com Contagem (FOR)",
    "concept": "Laço com Contador Determinado (for)",
    "filename": "restaurar_blocos.algo",
    "scenario": "Existem 5 blocos de memória corrompidos (índices 0 a 4). Crie um laço que execute 5 vezes, incrementando o contador de 1 em 1 a cada passo.",
    "codeTemplate": "para (contador = 0; contador < 5; contador<span class=\"code-gap\">____</span>) {\n    restaurarBlocoMemoria(contador);\n}",
    "options": [
      {
        "text": "++ (incremento)",
        "correct": true,
        "feedback": "Muito bem! 'contador++' soma 1 à variável a cada volta do laço, percorrendo 0, 1, 2, 3 e 4 com perfeição."
      },
      {
        "text": "-- (decremento)",
        "correct": false,
        "feedback": "Incorreto! Decrementar causaria um loop infinito negativo (-1, -2, -3...), travando a memória!"
      },
      {
        "text": "== 0",
        "correct": false,
        "feedback": "Incorreto! '== 0' é uma comparação booleana, não uma instrução de passo/incremento."
      },
      {
        "text": "= 5",
        "correct": false,
        "feedback": "Incorreto! Atribuir 5 encerraria o laço na primeira tentativa sem restaurar os outros blocos."
      }
    ],
    "explanation": "O laço FOR é ideal quando sabemos antecipadamente quantas vezes a instrução deve se repetir. Ele possui inicialização, condição de parada e passo de incremento."
  },
  {
    "id": 6,
    "pythonFilename": "desarmar_firewall.py",
    "pythonCodeTemplate": "<span class=\"code-gap\">_____</span> firewall_integridade > 0:\n    desferir_golpe_cyber()\n    firewall_integridade -= 25",
    "pythonOptions": [
      {
        "text": "while",
        "correct": true,
        "feedback": "Sensacional! 'while' repete o bloco em Python enquanto a condição for True."
      },
      {
        "text": "if",
        "correct": false,
        "feedback": "Incorreto! 'if' executaria apenas uma vez."
      },
      {
        "text": "return",
        "correct": false,
        "feedback": "Incorreto! 'return' sai da função."
      },
      {
        "text": "def",
        "correct": false,
        "feedback": "Incorreto! 'def' declara funções em Python."
      }
    ],
    "pythonExplanation": "O laço 'while' em Python continua executando enquanto sua condição lógica for avaliada como True.",
    "title": "Fase 6: Laço Condicional de Repetição (WHILE)",
    "concept": "Repetição Baseada em Condição Dinâmica (while)",
    "filename": "desarmar_firewall.algo",
    "scenario": "Para derrubar a barreira inimiga, devemos atacar ENQUANTO a integridade do firewall for maior que 0, reduzindo a integridade em 25 a cada golpe.",
    "codeTemplate": "<span class=\"code-gap\">________</span> (firewallIntegridade > 0) {\n    desferirGolpeCyber();\n    firewallIntegridade = firewallIntegridade - 25;\n}",
    "options": [
      {
        "text": "enquanto",
        "correct": true,
        "feedback": "Sensacional! 'ENQUANTO' (while) repete o bloco de código até que a condição se torne falsa (integridade <= 0)."
      },
      {
        "text": "se",
        "correct": false,
        "feedback": "Incorreto! O 'SE' executaria o golpe apenas UMA única vez, sem derrubar toda a barra de vida."
      },
      {
        "text": "retornar",
        "correct": false,
        "feedback": "Incorreto! 'RETORNAR' sairia da função imediatamente."
      },
      {
        "text": "funcao",
        "correct": false,
        "feedback": "Incorreto! 'FUNÇÃO' declara uma sub-rotina, não uma estrutura de repetição."
      }
    ],
    "explanation": "O laço WHILE continua executando indefinidamente enquanto sua condição for verdadeira. A alteração da variável dentro do laço é crucial para evitar loops infinitos!"
  },
  {
    "id": 7,
    "pythonFilename": "nucleo_dados.py",
    "pythonCodeTemplate": "nome_agente = \"Kai\"       # str\nnivel_acesso = 4         # int\ntaxa_energia = 87.5      # float\ncamuflado = <span class=\"code-gap\">____</span>        # bool",
    "pythonOptions": [
      {
        "text": "True",
        "correct": true,
        "feedback": "Exato! Em Python, booleanos são escritos com a primeira letra maiúscula: True ou False."
      },
      {
        "text": "\"True\"",
        "correct": false,
        "feedback": "Incorreto! Aspas transformam o valor na string 'str'."
      },
      {
        "text": "100.0",
        "correct": false,
        "feedback": "Incorreto! 100.0 é float."
      },
      {
        "text": "None",
        "correct": false,
        "feedback": "Incorreto! 'None' representa ausência de valor."
      }
    ],
    "pythonExplanation": "Em Python, o tipo booleano usa os literais True e False com a primeira letra maiúscula.",
    "title": "Fase 7: Tipos Primitivos de Dados",
    "concept": "Identificação de Tipos (Inteiro, Real, Texto, Booleano)",
    "filename": "nucleo_dados.algo",
    "scenario": "O núcleo está registrando os dados do agente. Qual tipo de dado deve armazenar o status 'true' ou 'false' que indica se o agente está camuflado?",
    "codeTemplate": "variavel nomeAgente = \"Kai\";      // Texto (String)\nvariavel nivelAcesso = 4;         // Inteiro (Integer)\nvariavel taxaEnergia = 87.5;      // Real (Float)\nvariavel camuflado = <span class=\"code-gap\">__________</span>;     // Booleano (Boolean)",
    "options": [
      {
        "text": "verdadeiro (true)",
        "correct": true,
        "feedback": "Exato! Variáveis booleanas armazenam apenas dois estados lógicos: verdadeiro (true) ou falso (false)."
      },
      {
        "text": "\"verdadeiro\"",
        "correct": false,
        "feedback": "Incorreto! Aspas duplas transformam o valor em Texto (String), perdendo o comportamento booleano nativo."
      },
      {
        "text": "100.0",
        "correct": false,
        "feedback": "Incorreto! 100.0 é um número de ponto flutuante (Real), não um booleano."
      },
      {
        "text": "nulo",
        "correct": false,
        "feedback": "Incorreto! 'nulo' (null) representa a ausência de valor, não o estado lógico ativado."
      }
    ],
    "explanation": "Os tipos primitivos fundamentais são Inteiro (números inteiros), Real (decimais), Texto/String (caracteres) e Booleano (verdadeiro/falso)."
  },
  {
    "id": 8,
    "pythonFilename": "filtro_frequencia.py",
    "pythonCodeTemplate": "if numero_canal <span class=\"code-gap\">_</span> 2 == 0:\n    sintonizar_canal_par()\nelse:\n    sintonizar_canal_impar()",
    "pythonOptions": [
      {
        "text": "% (módulo/resto)",
        "correct": true,
        "feedback": "Perfeito! O operador '%' calcula o resto da divisão em Python. Se numero % 2 == 0, é PAR!"
      },
      {
        "text": "/",
        "correct": false,
        "feedback": "Incorreto! '/' realiza divisão com ponto flutuante."
      },
      {
        "text": "*",
        "correct": false,
        "feedback": "Incorreto! '*' é multiplicação."
      },
      {
        "text": "**",
        "correct": false,
        "feedback": "Incorreto! '**' é potenciação em Python."
      }
    ],
    "pythonExplanation": "O operador de módulo (%) em Python devolve o resto da divisão inteira entre dois números.",
    "title": "Fase 8: Operador de Módulo / Resto (%)",
    "concept": "Verificação de Números Pares e Múltiplos",
    "filename": "filtro_frequencia.algo",
    "scenario": "Para sintonizar o receptor nos canais PARES, verificamos se o resto da divisão do número do canal por 2 é exatamente igual a 0.",
    "codeTemplate": "se (numeroCanal <span class=\"code-gap\">_</span> 2 == 0) {\n    sintonizarCanalPar();\n} senao {\n    sintonizarCanalImpar();\n}",
    "options": [
      {
        "text": "% (módulo/resto)",
        "correct": true,
        "feedback": "Perfeito! O operador '%' calcula o resto da divisão inteira. Se X % 2 == 0, o número é PAR!"
      },
      {
        "text": "/",
        "correct": false,
        "feedback": "Incorreto! '/' faz a divisão real/quociente, e não retorna o resto da divisão."
      },
      {
        "text": "*",
        "correct": false,
        "feedback": "Incorreto! '*' é multiplicação."
      },
      {
        "text": "^",
        "correct": false,
        "feedback": "Incorreto! '^' é potenciação ou bitwise XOR em muitas linguagens."
      }
    ],
    "explanation": "O operador de módulo (%) é fundamental para testar paridade, divisibilidade, paginação e ciclos em estruturas de repetição."
  },
  {
    "id": 9,
    "pythonFilename": "inventario_chips.py",
    "pythonCodeTemplate": "chips = [\"Chip_Alfa\", \"Chip_Beta\", \"Chip_Gama\"]\nprimeiro_chip = chips<span class=\"code-gap\">___</span>",
    "pythonOptions": [
      {
        "text": "[0]",
        "correct": true,
        "feedback": "Excelente! Em Python, listas usam indexação de base zero [0] para o primeiro elemento."
      },
      {
        "text": "[1]",
        "correct": false,
        "feedback": "Cuidado! O índice [1] acessa o segundo elemento."
      },
      {
        "text": ".first()",
        "correct": false,
        "feedback": "Incorreto! Em Python usam-se colchetes diretos [0]."
      },
      {
        "text": "[3]",
        "correct": false,
        "feedback": "Incorreto! Provocaria um IndexError."
      }
    ],
    "pythonExplanation": "Em listas do Python, o primeiro item está no índice 0 e o último no índice -1 ou len - 1.",
    "title": "Fase 9: Vetores / Arrays Unidimensionais",
    "concept": "Indexação Base Zero (Primeiro Elemento [0])",
    "filename": "inventario_chips.algo",
    "scenario": "Uma lista armazena os chips coletados: ['Chip_Alfa', 'Chip_Beta', 'Chip_Gama']. Como acessamos o PRIMEIRO item da lista?",
    "codeTemplate": "lista chips = [\"Chip_Alfa\", \"Chip_Beta\", \"Chip_Gama\"];\nvariavel primeiroChip = chips<span class=\"code-gap\">___</span>;",
    "options": [
      {
        "text": "[0]",
        "correct": true,
        "feedback": "Excelente! Em quase todas as linguagens modernas, o índice do primeiro elemento de uma lista é 0."
      },
      {
        "text": "[1]",
        "correct": false,
        "feedback": "Cuidado! O índice [1] acessa o SEGUNDO elemento ('Chip_Beta') devido à indexação baseada em zero."
      },
      {
        "text": ".primeiro()",
        "correct": false,
        "feedback": "Incorreto! O acesso direto por colchetes é a notação canônica de indexação."
      },
      {
        "text": "[3]",
        "correct": false,
        "feedback": "Incorreto! O índice [3] provocaria um erro de 'Índice fora dos limites' (IndexOutOfBounds)."
      }
    ],
    "explanation": "Na ciência da computação, a contagem de posições em vetores se inicia no offset zero [0]."
  },
  {
    "id": 10,
    "pythonFilename": "buffer_seguranca.py",
    "pythonCodeTemplate": "nos = [10, 20, 30, 40]\ntotal_elementos = len(nos) # 4\nultimo_indice = total_elementos <span class=\"code-gap\">___</span>",
    "pythonOptions": [
      {
        "text": "- 1",
        "correct": true,
        "feedback": "Correto! Como os índices vão de 0 a len(nos)-1, o último índice é 4 - 1 = 3."
      },
      {
        "text": "+ 1",
        "correct": false,
        "feedback": "Incorreto! Causaria IndexError."
      },
      {
        "text": "* 2",
        "correct": false,
        "feedback": "Incorreto! Dobraria a posição fora do limite."
      },
      {
        "text": "/ 2",
        "correct": false,
        "feedback": "Incorreto! Apontaria para o meio."
      }
    ],
    "pythonExplanation": "Em Python, a função len(lista) retorna a quantidade de itens, e o último índice é len(lista) - 1 (ou lista[-1]).",
    "title": "Fase 10: Comprimento e Limite de Vetores",
    "concept": "Tamanho da Lista e Último Elemento (tamanho - 1)",
    "filename": "buffer_seguranca.algo",
    "scenario": "Dada uma lista de 4 nós: nos = [10, 20, 30, 40]. Qual é o índice do ÚLTIMO elemento disponível?",
    "codeTemplate": "lista nos = [10, 20, 30, 40];\nvariavel totalElementos = nos.tamanho; // 4\nvariavel ultimoIndice = totalElementos <span class=\"code-gap\">___</span>;",
    "options": [
      {
        "text": "- 1",
        "correct": true,
        "feedback": "Correto! Como os índices vão de 0 até (tamanho - 1), o último índice de 4 elementos é 3 (4 - 1)."
      },
      {
        "text": "+ 1",
        "correct": false,
        "feedback": "Incorreto! Somar 1 ultrapassaria a memória do vetor gerando estouro de buffer."
      },
      {
        "text": "* 2",
        "correct": false,
        "feedback": "Incorreto! Dobrar o tamanho resultaria em uma posição inexistente."
      },
      {
        "text": "/ 2",
        "correct": false,
        "feedback": "Incorreto! Dividir por 2 apontaria para o elemento do meio, não para o último."
      }
    ],
    "explanation": "Para qualquer lista de N elementos, o primeiro índice é sempre 0 e o último índice é sempre N - 1."
  },
  {
    "id": 11,
    "pythonFilename": "varredura_setores.py",
    "pythonCodeTemplate": "for i in range(<span class=\"code-gap\">___</span>(setores)):\n    inspecionar_setor(setores[i])",
    "pythonOptions": [
      {
        "text": "len",
        "correct": true,
        "feedback": "Muito bem! A função 'len()' em Python retorna o número total de elementos da lista."
      },
      {
        "text": "1000",
        "correct": false,
        "feedback": "Incorreto! Número fixo causaria erro se houver menos elementos."
      },
      {
        "text": "0",
        "correct": false,
        "feedback": "Incorreto! range(0) criaria uma sequência vazia."
      },
      {
        "text": "max",
        "correct": false,
        "feedback": "Incorreto! 'max' retorna o maior valor da lista."
      }
    ],
    "pythonExplanation": "A função embutida len() é a forma padrão em Python para saber o tamanho de listas, tuplas e strings.",
    "title": "Fase 11: Percorrendo Vetores com Laço FOR",
    "concept": "Iteração Sequencial sobre Coleções",
    "filename": "varredura_setores.algo",
    "scenario": "Precisamos inspecionar todos os setores da cidade armazenados no vetor 'setores'. Complete a condição de parada do laço:",
    "codeTemplate": "para (i = 0; i < <span class=\"code-gap\">_______________</span>; i++) {\n    inspecionarSetor(setores[i]);\n}",
    "options": [
      {
        "text": "setores.tamanho",
        "correct": true,
        "feedback": "Muito bem! Usando 'i < setores.tamanho', o índice 'i' vai de 0 até o último elemento sem estourar a lista."
      },
      {
        "text": "1000",
        "correct": false,
        "feedback": "Incorreto! Usar um número fixo desconhecido causará erros se a lista tiver menos de 1000 itens."
      },
      {
        "text": "0",
        "correct": false,
        "feedback": "Incorreto! Se 'i < 0', o laço nunca executará sequer a primeira vez (0 < 0 é falso)."
      },
      {
        "text": "setores.tamanho + 1",
        "correct": false,
        "feedback": "Incorreto! 'i < tamanho + 1' tentaria acessar um índice além do limite do vetor."
      }
    ],
    "explanation": "A propriedade .tamanho (ou .length) garante que o laço se adapte dinamicamente à quantidade real de itens da lista."
  },
  {
    "id": 12,
    "pythonFilename": "coleta_energia.py",
    "pythonCodeTemplate": "total_energia = 0\nfor bateria in baterias:\n    total_energia = total_energia <span class=\"code-gap\">_</span> bateria",
    "pythonOptions": [
      {
        "text": "+",
        "correct": true,
        "feedback": "Exato! Somar o valor atual ao novo elemento acumula o total na variável em Python."
      },
      {
        "text": "=",
        "correct": false,
        "feedback": "Incorreto! Apenas substituir '=' guardaria apenas a última bateria."
      },
      {
        "text": "* 0 +",
        "correct": false,
        "feedback": "Incorreto! Zeraria a conta."
      },
      {
        "text": "-",
        "correct": false,
        "feedback": "Incorreto! Subtrairia em vez de acumular."
      }
    ],
    "pythonExplanation": "Em Python, o acúmulo de totais em laços é feito usando '+' (ex: total_energia += bateria).",
    "title": "Fase 12: Variáveis Acumuladoras (Soma Total)",
    "concept": "Acúmulo de Valores em Laço (soma = soma + valor)",
    "filename": "coleta_energia.algo",
    "scenario": "A cada bateria encontrada, devemos acumular sua carga na variável 'totalEnergia'. Complete a instrução de acúmulo:",
    "codeTemplate": "variavel totalEnergia = 0;\npara (i = 0; i < baterias.tamanho; i++) {\n    totalEnergia = totalEnergia <span class=\"code-gap\">_</span> baterias[i];\n}",
    "options": [
      {
        "text": "+",
        "correct": true,
        "feedback": "Exato! Somar o valor atual de totalEnergia com o novo valor acumula progressivamente a soma total."
      },
      {
        "text": "=",
        "correct": false,
        "feedback": "Incorreto! Apenas substituir '=' sobrescreveria o total anterior, guardando só o valor da última bateria."
      },
      {
        "text": "* 0 +",
        "correct": false,
        "feedback": "Incorreto! Multiplicar por 0 zeraria todo o histórico anterior."
      },
      {
        "text": "-",
        "correct": false,
        "feedback": "Incorreto! Subtrair diminuiria a energia em vez de somar."
      }
    ],
    "explanation": "O padrão acumulador (total += valor) é a técnica padrão para calcular somatórios, médias e saldos acumulados."
  },
  {
    "id": 13,
    "pythonFilename": "rastreador_bugs.py",
    "pythonCodeTemplate": "contador_virus = 0\nif pacote[\"eh_virus\"] == True:\n    contador_virus = <span class=\"code-gap\">__________________</span>",
    "pythonOptions": [
      {
        "text": "contador_virus + 1",
        "correct": true,
        "feedback": "Correto! Incrementar a própria variável soma 1 ao total de vírus em Python."
      },
      {
        "text": "0",
        "correct": false,
        "feedback": "Incorreto! Resetaria a contagem."
      },
      {
        "text": "pacote[\"eh_virus\"]",
        "correct": false,
        "feedback": "Incorreto! É um valor booleano."
      },
      {
        "text": "contador_virus * 2",
        "correct": false,
        "feedback": "Incorreto! Não contaria ocorrências individuais."
      }
    ],
    "pythonExplanation": "Em Python, incrementa-se contadores com 'contador += 1' ou 'contador = contador + 1'.",
    "title": "Fase 13: Variáveis Contadoras (Incremento)",
    "concept": "Contagem de Ocorrências com Condicional",
    "filename": "rastreador_bugs.algo",
    "scenario": "Queremos contar quantos vírus foram detectados na rede. Se o pacote for um vírus, incremente o contador em 1:",
    "codeTemplate": "variavel contadorVirus = 0;\nse (pacote.ehVirus == verdadeiro) {\n    contadorVirus = <span class=\"code-gap\">_________________</span>;\n}",
    "options": [
      {
        "text": "contadorVirus + 1",
        "correct": true,
        "feedback": "Correto! Somar 1 ao valor atual da própria variável é a definição de um contador (contador++)."
      },
      {
        "text": "0",
        "correct": false,
        "feedback": "Incorreto! Atribuir 0 resetaria a contagem."
      },
      {
        "text": "pacote.ehVirus",
        "correct": false,
        "feedback": "Incorreto! 'ehVirus' é um booleano (true/false), não um número."
      },
      {
        "text": "contadorVirus * 2",
        "correct": false,
        "feedback": "Incorreto! Multiplicar por 2 não contaria ocorrências individuais de forma linear."
      }
    ],
    "explanation": "Contadores guardam quantas vezes determinado evento ocorreu, sendo incrementados geralmente com 'contador = contador + 1' ou 'contador++'."
  },
  {
    "id": 14,
    "pythonFilename": "propulsor_cyber.py",
    "pythonCodeTemplate": "<span class=\"code-gap\">___</span> ativar_propulsor(potencia_desejada):\n    motor.ajustar_potencia(potencia_desejada)\n    motor.ligar()",
    "pythonOptions": [
      {
        "text": "def",
        "correct": true,
        "feedback": "Perfeito! Em Python, a palavra-chave 'def' (define) é usada para declarar funções."
      },
      {
        "text": "while",
        "correct": false,
        "feedback": "Incorreto! 'while' é laço."
      },
      {
        "text": "if",
        "correct": false,
        "feedback": "Incorreto! 'if' é condicional."
      },
      {
        "text": "class",
        "correct": false,
        "feedback": "Incorreto! 'class' define classes em POO."
      }
    ],
    "pythonExplanation": "Em Python, todas as funções são definidas utilizando a palavra-chave 'def nome_da_funcao(parametros):'.",
    "title": "Fase 14: Declaração e Chamada de Funções",
    "concept": "Modularização e Parâmetros de Entrada",
    "filename": "propulsor_cyber.algo",
    "scenario": "Complete a declaração da função 'ativarPropulsor' que recebe como parâmetro a 'potenciaDesejada':",
    "codeTemplate": "<span class=\"code-gap\">______</span> ativarPropulsor(potenciaDesejada) {\n    motor.ajustarPotencia(potenciaDesejada);\n    motor.ligar();\n}",
    "options": [
      {
        "text": "funcao",
        "correct": true,
        "feedback": "Perfeito! A palavra-chave 'funcao' (ou 'function' / 'def') define um bloco de código reutilizável."
      },
      {
        "text": "enquanto",
        "correct": false,
        "feedback": "Incorreto! 'enquanto' cria um laço de repetição."
      },
      {
        "text": "se",
        "correct": false,
        "feedback": "Incorreto! 'se' é uma condicional."
      },
      {
        "text": "lista",
        "correct": false,
        "feedback": "Incorreto! 'lista' declara um vetor de dados."
      }
    ],
    "explanation": "Funções agrupam instruções com um propósito específico, evitando duplicação de código e permitindo reutilização com diferentes argumentos."
  },
  {
    "id": 15,
    "pythonFilename": "calculo_hash.py",
    "pythonCodeTemplate": "def calcular_hash(codigo_base):\n    hash_val = (codigo_base * 1337) % 9999\n    <span class=\"code-gap\">______</span> hash_val",
    "pythonOptions": [
      {
        "text": "return",
        "correct": true,
        "feedback": "Excelente! Em Python, 'return' encerra a função e devolve o resultado para o chamador."
      },
      {
        "text": "print",
        "correct": false,
        "feedback": "Incorreto! 'print' apenas exibe na tela sem retornar o valor."
      },
      {
        "text": "break",
        "correct": false,
        "feedback": "Incorreto! 'break' é para laços."
      },
      {
        "text": "continue",
        "correct": false,
        "feedback": "Incorreto! 'continue' é para laços."
      }
    ],
    "pythonExplanation": "A instrução 'return' em Python devolve um resultado da função e encerra sua execução.",
    "title": "Fase 15: Retorno de Valores em Funções",
    "concept": "Devolução de Resultados (return)",
    "filename": "calculo_hash.algo",
    "scenario": "A função de criptografia calcula o hash de segurança e deve DEVOLVER o resultado calculado para quem a chamou:",
    "codeTemplate": "funcao calcularHash(codigoBase) {\n    variavel hash = (codigoBase * 1337) % 9999;\n    <span class=\"code-gap\">_______</span> hash;\n}",
    "options": [
      {
        "text": "retorne",
        "correct": true,
        "feedback": "Excelente! O comando 'retorne' (return) finaliza a função e envia o valor de volta para o chamador."
      },
      {
        "text": "imprima",
        "correct": false,
        "feedback": "Incorreto! 'imprima' apenas exibe na tela, não devolve o dado para ser usado em outras contas."
      },
      {
        "text": "pare",
        "correct": false,
        "feedback": "Incorreto! 'pare' interrompe loops sem devolver valor resultante."
      },
      {
        "text": "continue",
        "correct": false,
        "feedback": "Incorreto! 'continue' salta para a próxima iteração de um laço."
      }
    ],
    "explanation": "O comando 'return' é a ponte que permite que uma função produza um resultado utilizável por outras partes do programa."
  },
  {
    "id": 16,
    "pythonFilename": "modulo_escopo.py",
    "pythonCodeTemplate": "def processar_sinal():\n    senha_secreta = \"1234\"\n\n# Tentativa de acesso fora da função:\nprint(senha_secreta) # <span class=\"code-gap\">___________________</span>",
    "pythonOptions": [
      {
        "text": "Gera erro NameError (Variável não definida)",
        "correct": true,
        "feedback": "Exato! Em Python, 'senha_secreta' tem escopo local e gera NameError se acessada fora da função."
      },
      {
        "text": "Imprime '1234' normalmente",
        "correct": false,
        "feedback": "Incorreto! A variável não existe no escopo global."
      },
      {
        "text": "Cria uma variável vazia",
        "correct": false,
        "feedback": "Incorreto! Python não cria variáveis implícitas sem atribuição."
      },
      {
        "text": "Apaga a memória",
        "correct": false,
        "feedback": "Incorreto! Apenas lança a exceção NameError."
      }
    ],
    "pythonExplanation": "Em Python, variáveis definidas dentro de funções possuem escopo local e não podem ser lidas no escopo global.",
    "title": "Fase 16: Escopo de Variáveis (Global vs Local)",
    "concept": "Visibilidade e Ciclo de Vida de Variáveis",
    "filename": "modulo_escopo.algo",
    "scenario": "Uma variável criada DENTRO de uma função é LOCAL. O que acontece se tentarmos acessá-la FORA da função?",
    "codeTemplate": "funcao processarSinal() {\n    variavel senhaSecreta = \"1234\";\n}\n// Tentativa de acesso fora da função:\nimprimir(senhaSecreta); // <span class=\"code-gap\">___________________</span>",
    "options": [
      {
        "text": "Gera erro (Variável não definida)",
        "correct": true,
        "feedback": "Exato! Variáveis locais só existem durante a execução do bloco onde foram criadas."
      },
      {
        "text": "Imprime '1234' normalmente",
        "correct": false,
        "feedback": "Incorreto! Fora da função, a variável 'senhaSecreta' não é visível pelo escopo global."
      },
      {
        "text": "Cria uma nova variável vazia",
        "correct": false,
        "feedback": "Incorreto! O compilador acusará erro de referência inexistente."
      },
      {
        "text": "Apaga a memória do computador",
        "correct": false,
        "feedback": "Incorreto! Apenas interrompe a execução do script com exceção de escopo."
      }
    ],
    "explanation": "O escopo delimita onde uma variável pode ser lida ou alterada. Variáveis locais protegem os dados internos de funções contra interferências externas."
  },
  {
    "id": 17,
    "pythonFilename": "calibrar_laser.py",
    "pythonCodeTemplate": "while True:\n    disparar_feixe_teste()\n    if calibracao_valida == True:\n        <span class=\"code-gap\">_____</span> # Encerra a repetição pós-testada",
    "pythonOptions": [
      {
        "text": "break",
        "correct": true,
        "feedback": "Muito bem! Em Python, a estrutura 'while True:' com 'break' no 'if' simula o laço do-while."
      },
      {
        "text": "continue",
        "correct": false,
        "feedback": "Incorreto! 'continue' voltaria para o topo mantendo o loop infinito."
      },
      {
        "text": "pass",
        "correct": false,
        "feedback": "Incorreto! 'pass' não faz nada."
      },
      {
        "text": "return",
        "correct": false,
        "feedback": "Incorreto! 'return' encerraria a função inteira."
      }
    ],
    "pythonExplanation": "Como Python não tem a palavra 'do-while', usa-se 'while True:' com uma condição 'if' interna executando 'break'.",
    "title": "Fase 17: Laço Pós-Testado (FAÇA... ENQUANTO)",
    "concept": "Garantia de Execução de Pelo Menos 1 Vez (do... while)",
    "filename": "calibrar_laser.algo",
    "scenario": "O canhão de plasma precisa disparar PELO MENOS uma vez antes de testar se a calibração foi concluída com sucesso:",
    "codeTemplate": "<span class=\"code-gap\">____</span> {\n    dispararFeixeTeste();\n} enquanto (calibracaoValida == falso);",
    "options": [
      {
        "text": "faca",
        "correct": true,
        "feedback": "Muito bem! O bloco 'FAÇA... ENQUANTO' (do... while) executa o código primeiro e só testa a condição no final."
      },
      {
        "text": "se",
        "correct": false,
        "feedback": "Incorreto! 'se' não possui a terminação 'enquanto' de repetição pós-testada."
      },
      {
        "text": "para",
        "correct": false,
        "feedback": "Incorreto! 'para' é um laço com inicialização pré-testada."
      },
      {
        "text": "retorne",
        "correct": false,
        "feedback": "Incorreto! 'retorne' encerraria a sub-rotina."
      }
    ],
    "explanation": "Ao contrário do 'while' tradicional (pré-testado), o 'do-while' (pós-testado) garante que o bloco execute no mínimo uma vez."
  },
  {
    "id": 18,
    "pythonFilename": "localizar_antidoto.py",
    "pythonCodeTemplate": "for item in itens:\n    if item == \"ANTIDOTO\":\n        extrair_antidoto()\n        <span class=\"code-gap\">_____</span> # Interrompe o loop agora!",
    "pythonOptions": [
      {
        "text": "break",
        "correct": true,
        "feedback": "Correto! O comando 'break' em Python cancela imediatamente a execução do laço 'for'."
      },
      {
        "text": "continue",
        "correct": false,
        "feedback": "Incorreto! 'continue' passaria para o próximo item."
      },
      {
        "text": "pass",
        "correct": false,
        "feedback": "Incorreto! 'pass' é um placeholder nulo."
      },
      {
        "text": "exit",
        "correct": false,
        "feedback": "Incorreto! 'exit()' encerraria o script Python todo."
      }
    ],
    "pythonExplanation": "Em Python, 'break' interrompe a execução do laço 'for' ou 'while' imediatamente.",
    "title": "Fase 18: Interrupção Forçada de Loop (PARE / break)",
    "concept": "Saída Imediata de Laço ao Atingir Condição",
    "filename": "localizar_antidoto.algo",
    "scenario": "Ao vasculhar o banco de dados, assim que o antídoto for localizado, devemos interromper imediatamente o laço sem gastar mais ciclos:",
    "codeTemplate": "para (i = 0; i < itens.tamanho; i++) {\n    se (itens[i] == \"ANTIDOTO\") {\n        extrairAntidoto();\n        <span class=\"code-gap\">____</span>; // Interrompe o loop agora!\n    }\n}",
    "options": [
      {
        "text": "pare (break)",
        "correct": true,
        "feedback": "Correto! O comando 'pare' (break) encerra o laço na hora, economizando processamento."
      },
      {
        "text": "continue",
        "correct": false,
        "feedback": "Incorreto! 'continue' apenas pularia para o próximo item sem sair do laço."
      },
      {
        "text": "senao",
        "correct": false,
        "feedback": "Incorreto! 'senao' é uma cláusula condicional, não um comando de controle de laço."
      },
      {
        "text": "esperar",
        "correct": false,
        "feedback": "Incorreto! 'esperar' pausaria o tempo, mas manteria o laço em execução."
      }
    ],
    "explanation": "O comando 'break' interrompe a execução do laço mais próximo imediatamente, transferindo o fluxo para a linha seguinte ao laço."
  },
  {
    "id": 19,
    "pythonFilename": "ignorar_corrompidos.py",
    "pythonCodeTemplate": "for pacote in pacotes:\n    if pacote[\"esta_corrompido\"] == True:\n        <span class=\"code-gap\">________</span> # Pula para a próxima volta\n    processar_pacote_pesado(pacote)",
    "pythonOptions": [
      {
        "text": "continue",
        "correct": true,
        "feedback": "Excelente! Em Python, 'continue' pula o restante do bloco e avança para a próxima iteração."
      },
      {
        "text": "break",
        "correct": false,
        "feedback": "Incorreto! 'break' cancelaria o loop inteiro."
      },
      {
        "text": "return False",
        "correct": false,
        "feedback": "Incorreto! Sairia da função."
      },
      {
        "text": "del",
        "correct": false,
        "feedback": "Incorreto! 'del' remove variáveis."
      }
    ],
    "pythonExplanation": "O comando 'continue' em Python pula a iteração corrente e avança para a próxima execução do laço.",
    "title": "Fase 19: Pulo de Iteração (CONTINUE)",
    "concept": "Saltar para a Próxima Repetição (continue)",
    "filename": "ignorar_corrompidos.algo",
    "scenario": "Ao analisar pacotes, se o pacote estiver corrompido, queremos IGNORAR o processamento pesado e pular direto para o próximo pacote:",
    "codeTemplate": "para (i = 0; i < pacotes.tamanho; i++) {\n    se (pacotes[i].estaCorrompido == true) {\n        <span class=\"code-gap\">________</span>; // Pula para a próxima volta\n    }\n    processarPacotePesado(pacotes[i]);\n}",
    "options": [
      {
        "text": "continue",
        "correct": true,
        "feedback": "Excelente! 'continue' pula o restante do código da iteração atual e avança imediatamente para o próximo 'i'."
      },
      {
        "text": "pare",
        "correct": false,
        "feedback": "Incorreto! 'pare' (break) cancelaria todo o loop, deixando todos os outros pacotes bons sem processar!"
      },
      {
        "text": "retorne falso",
        "correct": false,
        "feedback": "Incorreto! Sairia da função por completo."
      },
      {
        "text": "deletar",
        "correct": false,
        "feedback": "Incorreto! 'deletar' não é um controle de iteração."
      }
    ],
    "explanation": "O comando 'continue' pula apenas a iteração atual, sem cancelar as repetições futuras do laço."
  },
  {
    "id": 20,
    "pythonFilename": "filtro_seguro.py",
    "pythonCodeTemplate": "if usuario[\"id\"] <span class=\"code-gap\">__</span> \"INVASOR_PROIBIDO\":\n    autorizar_entrada()",
    "pythonOptions": [
      {
        "text": "!=",
        "correct": true,
        "feedback": "Exato! Em Python, o operador '!=' significa 'diferente de'."
      },
      {
        "text": "==",
        "correct": false,
        "feedback": "Incorreto! '==' autorizaria apenas o invasor!"
      },
      {
        "text": "not",
        "correct": false,
        "feedback": "Incorreto! 'not' é operador unário."
      },
      {
        "text": "<=",
        "correct": false,
        "feedback": "Incorreto! '<=' é para menor ou igual numérico."
      }
    ],
    "pythonExplanation": "Em Python, o operador de desigualdade é '!=' (retorna True se os operandos forem diferentes).",
    "title": "Fase 20: Operador de Desigualdade / Diferente (!=)",
    "concept": "Comparação de Não-Igualdade",
    "filename": "filtro_seguro.algo",
    "scenario": "A porta só deve abrir se a identidade do usuário NÃO FOR igual à 'INVASOR_PROIBIDO':",
    "codeTemplate": "se (usuario.id <span class=\"code-gap\">__</span> \"INVASOR_PROIBIDO\") {\n    autorizarEntrada();\n}",
    "options": [
      {
        "text": "!=",
        "correct": true,
        "feedback": "Exato! O operador '!=' significa 'diferente de' e retorna verdadeiro quando os dois lados não são iguais."
      },
      {
        "text": "==",
        "correct": false,
        "feedback": "Incorreto! '==' abriria a porta justamente para o invasor proibido!"
      },
      {
        "text": "!",
        "correct": false,
        "feedback": "Incorreto! '!' sozinho é negação unária."
      },
      {
        "text": "<=",
        "correct": false,
        "feedback": "Incorreto! '<=' compara grandezas numéricas (menor ou igual)."
      }
    ],
    "explanation": "Os operadores de comparação incluem igualdade (==), diferença (!=), maior (>), menor (<), maior ou igual (>=) e menor ou igual (<=)."
  },
  {
    "id": 21,
    "pythonFilename": "blindagem_regras.py",
    "pythonCodeTemplate": "resultado = (False or True) and True\n# resultado será: <span class=\"code-gap\">______</span>",
    "pythonOptions": [
      {
        "text": "True",
        "correct": true,
        "feedback": "Correto! (False or True) resulta em True. Em seguida, True and True é True!"
      },
      {
        "text": "False",
        "correct": false,
        "feedback": "Incorreto! A expressão dentro dos parênteses avalia para True."
      },
      {
        "text": "None",
        "correct": false,
        "feedback": "Incorreto! Expressões lógicas retornam booleanos."
      },
      {
        "text": "Indeterminado",
        "correct": false,
        "feedback": "Incorreto! É determinístico."
      }
    ],
    "pythonExplanation": "Em Python, parênteses têm prioridade, seguidos pelos operadores not, and e or.",
    "title": "Fase 21: Precedência de Operadores Lógicos",
    "concept": "Uso de Parênteses para Prioridade de Avaliação",
    "filename": "blindagem_regras.algo",
    "scenario": "Qual é o resultado da expressão lógica: (FALSO || VERDADEIRO) && VERDADEIRO ?",
    "codeTemplate": "variavel resultado = (FALSO || VERDADEIRO) && VERDADEIRO;\n// resultado será: <span class=\"code-gap\">___________</span>",
    "options": [
      {
        "text": "VERDADEIRO (true)",
        "correct": true,
        "feedback": "Correto! (FALSO || VERDADEIRO) resulta em VERDADEIRO. Depois, VERDADEIRO && VERDADEIRO é VERDADEIRO!"
      },
      {
        "text": "FALSO (false)",
        "correct": false,
        "feedback": "Incorreto! Como a parte dentro dos parênteses avalia para verdadeiro, a conjunção com verdadeiro continua verdadeira."
      },
      {
        "text": "Nulo",
        "correct": false,
        "feedback": "Incorreto! Expressões booleanas sempre resultam em booleano (true ou false)."
      },
      {
        "text": "Indeterminado",
        "correct": false,
        "feedback": "Incorreto! A lógica proposicional é exata e determinística."
      }
    ],
    "explanation": "Parênteses possuem a maior precedência na ordem de avaliação de expressões, resolvendo primeiro o que está dentro deles."
  },
  {
    "id": 22,
    "pythonFilename": "busca_sequencial.py",
    "pythonCodeTemplate": "def buscar_servidor(lista_servidores, alvo):\n    for i in range(len(lista_servidores)):\n        if lista_servidores[i] == alvo:\n            <span class=\"code-gap\">______</span> i # Devolve o índice encontrado\n    return -1",
    "pythonOptions": [
      {
        "text": "return",
        "correct": true,
        "feedback": "Perfeito! 'return i' devolve o índice onde o alvo foi localizado em Python."
      },
      {
        "text": "del",
        "correct": false,
        "feedback": "Incorreto! 'del' apagaria o item."
      },
      {
        "text": "continue",
        "correct": false,
        "feedback": "Incorreto! 'continue' seguiria procurando."
      },
      {
        "text": "pass",
        "correct": false,
        "feedback": "Incorreto! 'pass' não faria nada."
      }
    ],
    "pythonExplanation": "A busca linear percorre os índices de 0 a len-1 e usa 'return' assim que encontra o elemento.",
    "title": "Fase 22: Algoritmo de Busca Linear",
    "concept": "Pesquisa Sequencial em Coleções",
    "filename": "busca_sequencial.algo",
    "scenario": "Complete a busca linear que procura o número do servidor '888' e retorna sua posição (índice) no vetor:",
    "codeTemplate": "funcao buscarServidor(listaServidores, alvo) {\n    para (i = 0; i < listaServidores.tamanho; i++) {\n        se (listaServidores[i] == alvo) {\n            <span class=\"code-gap\">_______</span> i; // Devolve o índice onde foi encontrado\n        }\n    }\n    retorne -1; // Não encontrado\n}",
    "options": [
      {
        "text": "retorne",
        "correct": true,
        "feedback": "Perfeito! Assim que encontra o elemento, 'retorne i' devolve a posição imediatamente."
      },
      {
        "text": "apagar",
        "correct": false,
        "feedback": "Incorreto! 'apagar' removeria o item em vez de responder sua posição."
      },
      {
        "text": "continue",
        "correct": false,
        "feedback": "Incorreto! 'continue' seguiria procurando sem retornar a resposta ao chamador."
      },
      {
        "text": "senao",
        "correct": false,
        "feedback": "Incorreto! 'senao' é uma bifurcação condicional."
      }
    ],
    "explanation": "A busca linear percorre elemento por elemento do início ao fim até encontrar o alvo ou esgotar a lista (retornando convencionalmente -1)."
  },
  {
    "id": 23,
    "pythonFilename": "pico_tensao.py",
    "pythonCodeTemplate": "maior = tensoes[0]\nfor t in tensoes[1:]:\n    if t <span class=\"code-gap\">_</span> maior:\n        maior = t",
    "pythonOptions": [
      {
        "text": ">",
        "correct": true,
        "feedback": "Muito bem! Em Python, '>' verifica se a tensão atual 't' é maior que o recorde 'maior'."
      },
      {
        "text": "<",
        "correct": false,
        "feedback": "Incorreto! '<' buscaria o menor valor."
      },
      {
        "text": "==",
        "correct": false,
        "feedback": "Incorreto! '==' só testaria igualdade."
      },
      {
        "text": "!=",
        "correct": false,
        "feedback": "Incorreto! '!=' atualizaria para qualquer número diferente."
      }
    ],
    "pythonExplanation": "Para encontrar o maior elemento em Python, compara-se cada item com o maior conhecido até então usando '>'.",
    "title": "Fase 23: Encontrando o Maior Valor em Vetor",
    "concept": "Algoritmo de Seleção de Máximo",
    "filename": "pico_tensao.algo",
    "scenario": "Para identificar o maior pico de energia entre as medições, atualizamos a variável 'maior' se encontrarmos um valor superior:",
    "codeTemplate": "variavel maior = tensoes[0];\npara (i = 1; i < tensoes.tamanho; i++) {\n    se (tensoes[i] <span class=\"code-gap\">_</span> maior) {\n        maior = tensoes[i];\n    }\n}",
    "options": [
      {
        "text": ">",
        "correct": true,
        "feedback": "Muito bem! Se a tensão atual for MAIOR (>) que o nosso recorde 'maior', ela se torna o novo recorde!"
      },
      {
        "text": "<",
        "correct": false,
        "feedback": "Incorreto! '<' procuraria o menor valor, não o maior pico de tensão."
      },
      {
        "text": "==",
        "correct": false,
        "feedback": "Incorreto! '==' só testaria se são exatamente iguais."
      },
      {
        "text": "!=",
        "correct": false,
        "feedback": "Incorreto! '!=' atualizaria para qualquer número diferente, mesmo se fosse menor."
      }
    ],
    "explanation": "Para encontrar o valor máximo, inicializamos com o primeiro elemento e substituímos sempre que encontramos um item estritamente maior."
  },
  {
    "id": 24,
    "pythonFilename": "menor_ping.py",
    "pythonCodeTemplate": "menor_latencia = <span class=\"code-gap\">________</span>\nfor r in rotas[1:]:\n    if r < menor_latencia:\n        menor_latencia = r",
    "pythonOptions": [
      {
        "text": "rotas[0]",
        "correct": true,
        "feedback": "Correto! Em Python, inicializar com rotas[0] garante uma comparação segura com um elemento real da lista."
      },
      {
        "text": "0",
        "correct": false,
        "feedback": "Cuidado! Se todos os pings forem maiores que 0, a busca falhará."
      },
      {
        "text": "-9999",
        "correct": false,
        "feedback": "Incorreto! Valor negativo quebraria o cálculo."
      },
      {
        "text": "len(rotas)",
        "correct": false,
        "feedback": "Incorreto! É a quantidade de rotas, não uma latência."
      }
    ],
    "pythonExplanation": "Inicializar o valor mínimo com o primeiro item da lista (lista[0]) evita falsos mínimos zerados.",
    "title": "Fase 24: Encontrando o Menor Valor em Vetor",
    "concept": "Algoritmo de Seleção de Mínimo (Menor Latência)",
    "filename": "menor_ping.algo",
    "scenario": "Queremos selecionar a rota com a MENOR latência (ping). Como inicializamos a busca?",
    "codeTemplate": "variavel menorLatencia = <span class=\"code-gap\">_________</span>;\npara (i = 1; i < rotas.tamanho; i++) {\n    se (rotas[i] < menorLatencia) {\n        menorLatencia = rotas[i];\n    }\n}",
    "options": [
      {
        "text": "rotas[0]",
        "correct": true,
        "feedback": "Correto! Inicializar com o primeiro elemento garante que a comparação comece com um valor real existente na lista."
      },
      {
        "text": "0",
        "correct": false,
        "feedback": "Cuidado! Se todos os pings forem positivos (ex: 20ms, 50ms), 0 seria menor que todos e nunca seria superado, gerando resultado falso!"
      },
      {
        "text": "-9999",
        "correct": false,
        "feedback": "Incorreto! Um valor negativo irreal travaria a busca de mínimo."
      },
      {
        "text": "rotas.tamanho",
        "correct": false,
        "feedback": "Incorreto! O tamanho da lista é a quantidade de itens, não a latência do primeiro elemento."
      }
    ],
    "explanation": "A melhor prática para encontrar mínimos ou máximos em listas é inicializar com o primeiro elemento da própria coleção (vetor[0])."
  },
  {
    "id": 25,
    "pythonFilename": "montar_identidade.py",
    "pythonCodeTemplate": "prefixo = \"AGENTE_\"\ncodigo = \"77\"\ncracha_final = prefixo <span class=\"code-gap\">_</span> codigo # \"AGENTE_77\"",
    "pythonOptions": [
      {
        "text": "+ (concatenação)",
        "correct": true,
        "feedback": "Exato! Em Python, o operador '+' junta duas strings (ex: 'AGENTE_' + '77' -> 'AGENTE_77')."
      },
      {
        "text": "-",
        "correct": false,
        "feedback": "Incorreto! '-' não funciona com strings em Python."
      },
      {
        "text": "*",
        "correct": false,
        "feedback": "Incorreto! '*' com string e string gera erro de tipo."
      },
      {
        "text": "and",
        "correct": false,
        "feedback": "Incorreto! 'and' é operador lógico booleano."
      }
    ],
    "pythonExplanation": "Em Python, o operador '+' une duas strings. Alternativamente, pode-se usar f-strings f'{prefixo}{codigo}'.",
    "title": "Fase 25: Concatenação de Strings (Textos)",
    "concept": "União de Textos com Operador +",
    "filename": "montar_identidade.algo",
    "scenario": "Monte o crachá do agente unindo o prefixo 'AGENTE_' com seu código numérico '77':",
    "codeTemplate": "variavel prefixo = \"AGENTE_\";\nvariavel codigo = \"77\";\nvariavel crachaFinal = prefixo <span class=\"code-gap\">_</span> codigo; // Resultado: \"AGENTE_77\"",
    "options": [
      {
        "text": "+ (concatenação)",
        "correct": true,
        "feedback": "Exato! Quando aplicado a textos (strings), o operador '+' junta (concatena) os caracteres em uma única cadeia."
      },
      {
        "text": "-",
        "correct": false,
        "feedback": "Incorreto! Não existe subtração aritmética entre cadeias de texto."
      },
      {
        "text": "*",
        "correct": false,
        "feedback": "Incorreto! Multiplicação não realiza concatenação."
      },
      {
        "text": "&&",
        "correct": false,
        "feedback": "Incorreto! '&&' é um operador lógico booleano."
      }
    ],
    "explanation": "Concatenação é a operação de unir duas ou mais sequências de caracteres de ponta a ponta para formar uma nova string."
  },
  {
    "id": 26,
    "pythonFilename": "extrair_protocolo.py",
    "pythonCodeTemplate": "chave = \"CYBER_2026\"\nprefixo = chave<span class=\"code-gap\">_______</span> # Extrai os 5 primeiros caracteres: \"CYBER\"",
    "pythonOptions": [
      {
        "text": "[0:5] (fatiamento/slice)",
        "correct": true,
        "feedback": "Muito bem! Em Python, a notação de fatiamento string[0:5] extrai do índice 0 até o índice 4."
      },
      {
        "text": "[0, 5]",
        "correct": false,
        "feedback": "Incorreto! Em Python fatiamento usa dois-pontos [inicio:fim]."
      },
      {
        "text": ".substring(5)",
        "correct": false,
        "feedback": "Incorreto! Python não tem método .substring(), usa-se slicing [0:5]."
      },
      {
        "text": "[5]",
        "correct": false,
        "feedback": "Incorreto! [5] pegaria apenas o caractere único no índice 5 ('_')."
      }
    ],
    "pythonExplanation": "Em Python, o fatiamento de sequências (slicing) é feito com a sintaxe string[inicio:fim].",
    "title": "Fase 26: Extração de Substrings (Fatiamento)",
    "concept": "Obtenção de Pedaços de Texto",
    "filename": "extrair_protocolo.algo",
    "scenario": "Dada a chave 'CYBER_2026', queremos extrair apenas os 5 primeiros caracteres ('CYBER'). Como fazemos o fatiamento de índice 0 a 5?",
    "codeTemplate": "variavel chave = \"CYBER_2026\";\nvariavel prefixo = chave.<span class=\"code-gap\">_________</span>(0, 5); // \"CYBER\"",
    "options": [
      {
        "text": "subtexto / substring",
        "correct": true,
        "feedback": "Muito bem! O método substring(inicio, fim) extrai os caracteres a partir da posição inicial até a posição final."
      },
      {
        "text": "somar",
        "correct": false,
        "feedback": "Incorreto! 'somar' faria operação aritmética."
      },
      {
        "text": "deletar",
        "correct": false,
        "feedback": "Incorreto! 'deletar' removeria sem retornar a fatia desejada."
      },
      {
        "text": "tamanho",
        "correct": false,
        "feedback": "Incorreto! 'tamanho' retorna a quantidade total de caracteres (número inteiro)."
      }
    ],
    "explanation": "Métodos de substring permitem inspecionar cabeçalhos de mensagens, prefixos de arquivos e fragmentos de dados."
  },
  {
    "id": 27,
    "pythonFilename": "converter_input.py",
    "pythonCodeTemplate": "entrada_texto = \"150\"\nnumero = <span class=\"code-gap\">___</span>(entrada_texto)\ntotal = numero + 50 # Deve resultar em 200 (inteiro)",
    "pythonOptions": [
      {
        "text": "int",
        "correct": true,
        "feedback": "Correto! A função embutida int() converte uma string de dígitos numéricos em um número inteiro em Python."
      },
      {
        "text": "str",
        "correct": false,
        "feedback": "Incorreto! 'str' converteria para texto, gerando '15050'."
      },
      {
        "text": "len",
        "correct": false,
        "feedback": "Incorreto! 'len' retornaria 3 (tamanho da string)."
      },
      {
        "text": "float",
        "correct": false,
        "feedback": "Incorreto! 'float' criaria 150.0 (número decimal)."
      }
    ],
    "pythonExplanation": "Em Python, int('150') converte string em inteiro e float('150.5') converte em ponto flutuante.",
    "title": "Fase 27: Conversão de Tipos (Type Casting)",
    "concept": "Conversão de Texto para Número Inteiro",
    "filename": "converter_input.algo",
    "scenario": "O usuário digitou o texto '150' no terminal. Para podermos somar matematicamente com outro número, devemos converter a String em Inteiro:",
    "codeTemplate": "variavel entradaTexto = \"150\";\nvariavel numero = <span class=\"code-gap\">_____________</span>(entradaTexto);\nvariavel total = numero + 50; // Deve dar 200 (não \"15050\")",
    "options": [
      {
        "text": "converterParaInteiro / parseInt",
        "correct": true,
        "feedback": "Correto! 'parseInt' / 'converterParaInteiro' transforma a representação em texto dos dígitos no tipo numérico real."
      },
      {
        "text": "converterParaTexto",
        "correct": false,
        "feedback": "Incorreto! Ele já é um texto; converter para texto causaria a concatenação '15050'."
      },
      {
        "text": "tamanhoDe",
        "correct": false,
        "feedback": "Incorreto! 'tamanhoDe' daria 3 (quantidade de dígitos '1','5','0'), não o valor 150."
      },
      {
        "text": "aleatorio",
        "correct": false,
        "feedback": "Incorreto! Geraria um número randômico qualquer."
      }
    ],
    "explanation": "A conversão de tipos (type casting / parsing) é indispensável para evitar que '10' + 5 resulte em '105' em vez do cálculo 15."
  },
  {
    "id": 28,
    "pythonFilename": "seletor_modulo.py",
    "pythonCodeTemplate": "match codigo_arma:\n    case 1:\n        equipar_laser()\n    case 2:\n        equipar_canhao_emp()\n    case <span class=\"code-gap\">_</span>:\n        equipar_espada_plasma()",
    "pythonOptions": [
      {
        "text": "_ (padrão/wildcard em match-case)",
        "correct": true,
        "feedback": "Excelente! Em Python 3.10+, o símbolo '_' em match/case atua como o caso padrão (default)."
      },
      {
        "text": "default:",
        "correct": false,
        "feedback": "Incorreto! 'default' é da linguagem C/Java, em Python usa-se 'case _:'."
      },
      {
        "text": "else:",
        "correct": false,
        "feedback": "Incorreto! Dentro do bloco match em Python usa-se 'case _:'."
      },
      {
        "text": "other:",
        "correct": false,
        "feedback": "Incorreto! 'other' não é palavra reservada de match-case."
      }
    ],
    "pythonExplanation": "O Python introduziu a estrutura match/case no Python 3.10, usando 'case _:' para o tratamento padrão.",
    "title": "Fase 28: Estrutura Condicional Múltipla (ESCOLHA / switch)",
    "concept": "Seleção Múltipla com CASO / switch case",
    "filename": "seletor_modulo.algo",
    "scenario": "Para selecionar a arma ativa de acordo com o código numérico, usamos uma estrutura ESCOLHA / CASO:",
    "codeTemplate": "<span class=\"code-gap\">_______</span> (codigoArma) {\n    caso 1:\n        equiparLaser();\n        pare;\n    caso 2:\n        equiparCanhaoEMP();\n        pare;\n    padrao:\n        equiparEspadaPlasma();\n}",
    "options": [
      {
        "text": "escolha (switch)",
        "correct": true,
        "feedback": "Excelente! 'escolha' (switch) compara uma única variável contra múltiplos valores constantes de forma limpa."
      },
      {
        "text": "enquanto",
        "correct": false,
        "feedback": "Incorreto! 'enquanto' cria repetição, não ramificação de opções únicas."
      },
      {
        "text": "funcao",
        "correct": false,
        "feedback": "Incorreto! 'funcao' declara procedimentos."
      },
      {
        "text": "para",
        "correct": false,
        "feedback": "Incorreto! 'para' é um laço com contador."
      }
    ],
    "explanation": "A estrutura switch / escolha substitui sequências longas de 'if / else if', tornando menus e máquinas de estado mais legíveis."
  },
  {
    "id": 29,
    "pythonFilename": "inverter_chaves.py",
    "pythonCodeTemplate": "aux = A\nA = B\nB = <span class=\"code-gap\">___</span>",
    "pythonOptions": [
      {
        "text": "aux",
        "correct": true,
        "feedback": "Muito bem! Usando a variável 'aux' preservamos o valor original de A para passar para B."
      },
      {
        "text": "A",
        "correct": false,
        "feedback": "Incorreto! A já foi sobrescrito pelo valor de B."
      },
      {
        "text": "0",
        "correct": false,
        "feedback": "Incorreto! Apagaria o valor."
      },
      {
        "text": "B",
        "correct": false,
        "feedback": "Incorreto! B = B não altera nada."
      }
    ],
    "pythonExplanation": "Em Python tradicional usa-se 'aux = A; A = B; B = aux' ou a sintaxe de desempacotamento direta 'A, B = B, A'.",
    "title": "Fase 29: Troca de Valores entre Duas Variáveis (Swap)",
    "concept": "Algoritmo de Permutação com Variável Auxiliar",
    "filename": "inverter_chaves.algo",
    "scenario": "Para trocar o conteúdo de 'A' e 'B' sem perder nenhum dado, precisamos de uma variável temporária 'auxiliar':",
    "codeTemplate": "variavel aux = A;\nA = B;\nB = <span class=\"code-gap\">___</span>;",
    "options": [
      {
        "text": "aux",
        "correct": true,
        "feedback": "Muito bem! Como guardamos o valor original de 'A' na variável 'aux', podemos passá-lo para 'B' sem perda."
      },
      {
        "text": "A",
        "correct": false,
        "feedback": "Incorreto! 'A' já recebeu o valor de 'B' na linha anterior; colocar 'B = A' deixaria ambos com o mesmo valor de B!"
      },
      {
        "text": "0",
        "correct": false,
        "feedback": "Incorreto! Atribuir 0 apagaria o valor de B."
      },
      {
        "text": "B",
        "correct": false,
        "feedback": "Incorreto! 'B = B' não altera nada."
      }
    ],
    "explanation": "O algoritmo clássico de troca (swap) utiliza uma variável temporária para evitar a sobreposição destrutiva de memória."
  },
  {
    "id": 30,
    "pythonFilename": "mapa_grade.py",
    "pythonCodeTemplate": "grade = [\n    [\"A\", \"B\", \"C\"], # Linha 0\n    [\"D\", \"E\", \"F\"], # Linha 1\n    [\"G\", \"H\", \"I\"]  # Linha 2\n]\ncelula = grade<span class=\"code-gap\">______</span> # Acessa \"F\"",
    "pythonOptions": [
      {
        "text": "[1][2]",
        "correct": true,
        "feedback": "Correto! Em Python, matrizes 2D acessam primeiro a linha grade[1] e depois a coluna [2] -> 'F'."
      },
      {
        "text": "[2][1]",
        "correct": false,
        "feedback": "Incorreto! [2][1] acessaria 'H'."
      },
      {
        "text": "[1, 2]",
        "correct": false,
        "feedback": "Incorreto! Listas aninhadas em Python usam [linha][coluna]."
      },
      {
        "text": "[3][3]",
        "correct": false,
        "feedback": "Incorreto! Geraria IndexError em grade 3x3."
      }
    ],
    "pythonExplanation": "Em Python, matrizes são representadas por listas de listas, acessadas com matriz[linha][coluna].",
    "title": "Fase 30: Matrizes / Vetores Bidimensionais",
    "concept": "Acesso a Elementos por Linha e Coluna [L][C]",
    "filename": "mapa_grade.algo",
    "scenario": "Em uma grade cibernética 3x3, como acessamos o elemento na Linha 1 e Coluna 2?",
    "codeTemplate": "matriz grade = [\n    [\"A\", \"B\", \"C\"], // Linha 0\n    [\"D\", \"E\", \"F\"], // Linha 1\n    [\"G\", \"H\", \"I\"]  // Linha 2\n];\nvariavel celula = grade<span class=\"code-gap\">______</span>; // Acessa o elemento \"F\"",
    "options": [
      {
        "text": "[1][2]",
        "correct": true,
        "feedback": "Correto! Linha 1 acessa o segundo vetor ['D', 'E', 'F'] e Coluna 2 acessa o elemento 'F' (índices 0, 1, 2)."
      },
      {
        "text": "[2][1]",
        "correct": false,
        "feedback": "Incorreto! [2][1] acessaria a Linha 2, Coluna 1 ('H')."
      },
      {
        "text": "[1, 2]",
        "correct": false,
        "feedback": "Incorreto! A sintaxe padrão de matrizes em C/Java/JS usa pares de colchetes separados [linha][coluna]."
      },
      {
        "text": "[3][3]",
        "correct": false,
        "feedback": "Incorreto! [3][3] estouraria os limites de uma matriz 3x3 (índices máximos são 2)."
      }
    ],
    "explanation": "Matrizes são vetores de vetores, onde o primeiro índice indica a linha e o segundo indica a coluna: matriz[linha][coluna]."
  },
  {
    "id": 31,
    "pythonFilename": "renderizar_tela.py",
    "pythonCodeTemplate": "for l in range(total_linhas):\n    for c in range(<span class=\"code-gap\">_____________</span>):\n        desenhar_pixel(matriz[l][c])",
    "pythonOptions": [
      {
        "text": "total_colunas",
        "correct": true,
        "feedback": "Exato! O laço interno 'range(total_colunas)' percorre todas as colunas de cada linha em Python."
      },
      {
        "text": "total_linhas",
        "correct": false,
        "feedback": "Incorreto! Percorrer a dimensão errada causaria erro ou distorção."
      },
      {
        "text": "0",
        "correct": false,
        "feedback": "Incorreto! range(0) criaria loop vazio."
      },
      {
        "text": "1",
        "correct": false,
        "feedback": "Incorreto! range(1) processaria apenas a primeira coluna."
      }
    ],
    "pythonExplanation": "Em Python, laços for aninhados percorrem matrizes linha por linha (for l in range(L): for c in range(C):).",
    "title": "Fase 31: Laços Aninhados (FOR dentro de FOR)",
    "concept": "Varredura Completa de Matriz 2D",
    "filename": "renderizar_tela.algo",
    "scenario": "Para percorrer todas as linhas e todas as colunas de uma matriz, usamos um laço FOR externo para as linhas e um interno para as colunas:",
    "codeTemplate": "para (l = 0; l < totalLinhas; l++) {\n    para (c = 0; c < totalColunas; c<span class=\"code-gap\">____</span>) {\n        desenharPixel(matriz[l][c]);\n    }\n}",
    "options": [
      {
        "text": "++",
        "correct": true,
        "feedback": "Exato! O laço interno incrementa a coluna 'c++' para percorrer todos os pixels de cada linha 'l'."
      },
      {
        "text": "--",
        "correct": false,
        "feedback": "Incorreto! Decrementar geraria um loop infinito para trás."
      },
      {
        "text": "== totalColunas",
        "correct": false,
        "feedback": "Incorreto! '==' é comparação, não passo de incremento."
      },
      {
        "text": "= 0",
        "correct": false,
        "feedback": "Incorreto! Resetar para 0 travaria a coluna no início."
      }
    ],
    "explanation": "Laços aninhados executam a repetição interna por completo a cada única volta do laço externo, gerando NxM iterações."
  },
  {
    "id": 32,
    "pythonFilename": "historico_desfazer.py",
    "pythonCodeTemplate": "acoes = []\nacoes.append(\"Mover\")\nacoes.append(\"Pular\")\nacoes.append(\"Atirar\")\nremovido = acoes.<span class=\"code-gap\">_____</span>() # Remove \"Atirar\" (LIFO)",
    "pythonOptions": [
      {
        "text": "pop()",
        "correct": true,
        "feedback": "Perfeito! O método .pop() sem argumentos em listas de Python remove e retorna o último elemento inserido (LIFO)."
      },
      {
        "text": "dequeue()",
        "correct": false,
        "feedback": "Incorreto! Python não possui método .dequeue() em listas comuns."
      },
      {
        "text": "clear()",
        "correct": false,
        "feedback": "Incorreto! .clear() esvazia a lista toda."
      },
      {
        "text": "reverse()",
        "correct": false,
        "feedback": "Incorreto! .reverse() apenas inverte a lista."
      }
    ],
    "pythonExplanation": "Em Python, listas funcionam nativamente como pilhas (Stack) usando .append() para empilhar e .pop() para desempilhar.",
    "title": "Fase 32: Estrutura de Dados Pilha (LIFO)",
    "concept": "Último a Entrar, Primeiro a Sair (Stack)",
    "filename": "historico_desfazer.algo",
    "scenario": "Em uma Pilha (Stack), qual elemento é removido quando chamamos a operação 'desempilhar' (pop)?",
    "codeTemplate": "pilha acoes = [];\nacoes.empilhar(\"Mover\");\nacoes.empilhar(\"Pular\");\nacoes.empilhar(\"Atirar\");\nvariavel removido = acoes.<span class=\"code-gap\">___________</span>(); // Remove \"Atirar\"",
    "options": [
      {
        "text": "desempilhar (pop)",
        "correct": true,
        "feedback": "Perfeito! A pilha segue a regra LIFO (Last-In, First-Out): o último item inserido é o primeiro a ser retirado."
      },
      {
        "text": "desenfileirar (dequeue)",
        "correct": false,
        "feedback": "Incorreto! 'desenfileirar' pertence à estrutura de Fila (FIFO), que tiraria o primeiro."
      },
      {
        "text": "limparTudo",
        "correct": false,
        "feedback": "Incorreto! Limpar apagaria toda a pilha de uma vez."
      },
      {
        "text": "inverter",
        "correct": false,
        "feedback": "Incorreto! 'inverter' apenas mudaria as posições dos itens."
      }
    ],
    "explanation": "A Pilha (LIFO) é a estrutura usada no botão 'Desfazer' (Ctrl+Z), no histórico de navegação e na pilha de chamadas de funções (Call Stack)."
  },
  {
    "id": 33,
    "pythonFilename": "buffer_impressao.py",
    "pythonCodeTemplate": "buffer = []\nbuffer.append(\"Msg_1\")\nbuffer.append(\"Msg_2\")\nbuffer.append(\"Msg_3\")\nremovido = buffer.<span class=\"code-gap\">______</span> # Remove \"Msg_1\" (FIFO)",
    "pythonOptions": [
      {
        "text": "pop(0)",
        "correct": true,
        "feedback": "Correto! Em Python, .pop(0) remove e retorna o primeiro elemento da lista (posição 0), respeitando FIFO."
      },
      {
        "text": "pop()",
        "correct": false,
        "feedback": "Incorreto! .pop() sem argumentos removeria o último (Msg_3)."
      },
      {
        "text": "remove()",
        "correct": false,
        "feedback": "Incorreto! .remove(valor) necessita do valor exato a ser removido."
      },
      {
        "text": "clear()",
        "correct": false,
        "feedback": "Incorreto! .clear() apagaria a fila inteira."
      }
    ],
    "pythonExplanation": "Para usar uma lista como fila em Python, usa-se .append() para enfileirar e .pop(0) (ou collections.deque) para desenfileirar.",
    "title": "Fase 33: Estrutura de Dados Fila (FIFO)",
    "concept": "Primeiro a Entrar, Primeiro a Sair (Queue)",
    "filename": "buffer_impressao.algo",
    "scenario": "Em uma Fila de mensagens (Queue), qual mensagem é processada primeiro?",
    "codeTemplate": "fila buffer = [];\nbuffer.enfileirar(\"Msg_1\");\nbuffer.enfileirar(\"Msg_2\");\nbuffer.enfileirar(\"Msg_3\");\n// A mensagem retirada agora é: <span class=\"code-gap\">_______</span>",
    "options": [
      {
        "text": "\"Msg_1\" (A primeira que entrou)",
        "correct": true,
        "feedback": "Correto! Filas seguem a regra FIFO (First-In, First-Out): quem chega primeiro é atendido primeiro."
      },
      {
        "text": "\"Msg_3\" (A última que entrou)",
        "correct": false,
        "feedback": "Incorreto! Isso seria uma Pilha (LIFO), não uma Fila."
      },
      {
        "text": "\"Msg_2\" (A do meio)",
        "correct": false,
        "feedback": "Incorreto! Filas respeitam a ordem estrita de chegada."
      },
      {
        "text": "Nenhuma",
        "correct": false,
        "feedback": "Incorreto! A fila contém 3 itens aguardando atendimento."
      }
    ],
    "explanation": "Filas (FIFO) organizam processos no sistema operacional, pedidos em e-commerce e pacotes em buffers de rede."
  },
  {
    "id": 34,
    "pythonFilename": "ficha_agente.py",
    "pythonCodeTemplate": "drone = {\n    \"modelo\": \"Cyber-Viper\",\n    \"escudo\": 100,\n    \"ativo\": True\n}\nnivel_escudo = drone<span class=\"code-gap\">__________</span>",
    "pythonOptions": [
      {
        "text": "[\"escudo\"]",
        "correct": true,
        "feedback": "Excelente! Em dicionários do Python, acessamos o valor associado a uma chave usando colchetes e a string da chave: dict[\"chave\"]."
      },
      {
        "text": ".escudo",
        "correct": false,
        "feedback": "Incorreto! Dicionários em Python não aceitam sintaxe de ponto como atributos de objeto."
      },
      {
        "text": "[0]",
        "correct": false,
        "feedback": "Incorreto! Dicionários usam chaves nomeadas, não índices numéricos inteiros."
      },
      {
        "text": "len()",
        "correct": false,
        "feedback": "Incorreto! len() daria a quantidade de pares chave-valor (3)."
      }
    ],
    "pythonExplanation": "Em Python, dicionários (dict) armazenam pares de chave-valor acessados com a notação de colchetes dict['chave'].",
    "title": "Fase 34: Objetos / Dicionários (Chave e Valor)",
    "concept": "Estruturação de Dados com Atributos Nomeados",
    "filename": "ficha_agente.algo",
    "scenario": "Como acessamos o atributo 'escudo' do objeto que descreve o drone de defesa?",
    "codeTemplate": "objeto drone = {\n    modelo: \"Cyber-Viper\",\n    escudo: 100,\n    ativo: true\n};\nvariavel nivelEscudo = drone.<span class=\"code-gap\">______</span>;",
    "options": [
      {
        "text": "escudo",
        "correct": true,
        "feedback": "Excelente! Em estruturas de objetos e registros, usamos a notação de ponto (objeto.propriedade) para ler o campo desejado."
      },
      {
        "text": "modelo",
        "correct": false,
        "feedback": "Incorreto! 'modelo' retornaria o texto 'Cyber-Viper', não a quantidade de escudo."
      },
      {
        "text": "tamanho",
        "correct": false,
        "feedback": "Incorreto! 'tamanho' não é uma propriedade declarada no objeto drone."
      },
      {
        "text": "[escudo]",
        "correct": false,
        "feedback": "Incorreto! Sem aspas, a sintaxe de colchetes esperaria uma variável com o nome da chave."
      }
    ],
    "explanation": "Objetos e dicionários agrupam propriedades relacionadas em pares de chave: valor, sendo a base do formato JSON e da POO."
  },
  {
    "id": 35,
    "pythonFilename": "atualizar_status.py",
    "pythonCodeTemplate": "drone[\"energia\"] = drone[\"energia\"] <span class=\"code-gap\">____</span>",
    "pythonOptions": [
      {
        "text": "- 30",
        "correct": true,
        "feedback": "Exato! Em Python, atualizamos o valor da chave do dicionário subtraindo 30."
      },
      {
        "text": "+ 30",
        "correct": false,
        "feedback": "Incorreto! '+' somaria em vez de aplicar o dano."
      },
      {
        "text": "= 0",
        "correct": false,
        "feedback": "Incorreto! Destruiria o drone zerando a energia."
      },
      {
        "text": "* 30",
        "correct": false,
        "feedback": "Incorreto! Multiplicaria por 30."
      }
    ],
    "pythonExplanation": "Dicionários em Python são mutáveis; podemos atualizar qualquer chave existente com atribuição (dict['chave'] -= 30).",
    "title": "Fase 35: Modificação de Propriedades de Objeto",
    "concept": "Atualização de Estado em Estruturas de Dados",
    "filename": "atualizar_status.algo",
    "scenario": "Após sofrer dano, reduza a energia do drone em 30 pontos:",
    "codeTemplate": "drone.energia = drone.energia <span class=\"code-gap\">____</span>;",
    "options": [
      {
        "text": "- 30",
        "correct": true,
        "feedback": "Exato! 'drone.energia = drone.energia - 30' calcula o novo valor subtraído e salva de volta na propriedade."
      },
      {
        "text": "+ 30",
        "correct": false,
        "feedback": "Incorreto! Somar aumentaria a vida do drone em vez de aplicar o dano."
      },
      {
        "text": "= 0",
        "correct": false,
        "feedback": "Incorreto! Atribuir 0 destruiria o drone instantaneamente em vez de tirar 30 pontos."
      },
      {
        "text": "* 30",
        "correct": false,
        "feedback": "Incorreto! Multiplicaria a energia por 30."
      }
    ],
    "explanation": "Propriedades de objetos podem ser lidas, atualizadas e incrementadas da mesma forma que variáveis individuais."
  },
  {
    "id": 36,
    "pythonFilename": "blindagem_excecoes.py",
    "pythonCodeTemplate": "<span class=\"code-gap\">___</span>:\n    conectar_servidor_central()\nexcept Exception as erro:\n    registrar_log(f\"Falha: {erro}\")",
    "pythonOptions": [
      {
        "text": "try",
        "correct": true,
        "feedback": "Muito bem! Em Python, o bloco 'try... except' captura e trata exceções sem derrubar o programa."
      },
      {
        "text": "while",
        "correct": false,
        "feedback": "Incorreto! 'while' é laço."
      },
      {
        "text": "if",
        "correct": false,
        "feedback": "Incorreto! 'if' testa condição booleana."
      },
      {
        "text": "for",
        "correct": false,
        "feedback": "Incorreto! 'for' é iteração."
      }
    ],
    "pythonExplanation": "Em Python, o tratamento de erros é feito com o bloco 'try:' e a captura de exceções com 'except Exception as erro:'.",
    "title": "Fase 36: Tratamento de Erros e Exceções",
    "concept": "Prevenção de Quedas com TENTE / CAPTURE (try / catch)",
    "filename": "blindagem_excecoes.algo",
    "scenario": "Para evitar que o programa trave caso o servidor esteja offline ao tentar conectar, envolvemos a chamada em um bloco de proteção:",
    "codeTemplate": "<span class=\"code-gap\">_____</span> {\n    conectarServidorCentral();\n} capture (erro) {\n    registrarLog(\"Falha na conexão: \" + erro);\n    usarServidorBackup();\n}",
    "options": [
      {
        "text": "tente (try)",
        "correct": true,
        "feedback": "Muito bem! O bloco 'tente... capture' (try... catch) captura erros em tempo de execução sem deixar o app cair."
      },
      {
        "text": "enquanto",
        "correct": false,
        "feedback": "Incorreto! 'enquanto' é um laço de repetição."
      },
      {
        "text": "se",
        "correct": false,
        "feedback": "Incorreto! 'se' testa booleanos, mas não captura exceções não tratadas do sistema operacional."
      },
      {
        "text": "para",
        "correct": false,
        "feedback": "Incorreto! 'para' é um laço de iteração."
      }
    ],
    "explanation": "O tratamento de exceções (try / catch) permite criar software robusto e resiliente a falhas de rede, arquivos corrompidos e erros inesperados."
  },
  {
    "id": 37,
    "pythonFilename": "flag_alerta.py",
    "pythonCodeTemplate": "perigo_detectado = False\nfor sensor in sensores:\n    if sensor[\"anomalia\"] == True:\n        perigo_detectado = <span class=\"code-gap\">____</span>",
    "pythonOptions": [
      {
        "text": "True",
        "correct": true,
        "feedback": "Correto! Em Python, a flag booleana recebe o valor True ao sinalizar a anomalia."
      },
      {
        "text": "False",
        "correct": false,
        "feedback": "Incorreto! False manteria o perigo desativado."
      },
      {
        "text": "None",
        "correct": false,
        "feedback": "Incorreto! None removeria o estado booleano."
      },
      {
        "text": "0",
        "correct": false,
        "feedback": "Incorreto! Usar o tipo int 0 descaracteriza a flag booleana explícita."
      }
    ],
    "pythonExplanation": "Flags booleanas em Python (True/False) sinalizam a ocorrência de condições especiais durante iterações.",
    "title": "Fase 37: Variável Sentinela / Flag Booleana",
    "concept": "Sinalizadores de Estado no Fluxo de Execução",
    "filename": "flag_alerta.algo",
    "scenario": "Uma variável 'flag' inicia como falsa. Se qualquer sensor detectar anomalia durante o laço, ela se torna verdadeira e permanece assim:",
    "codeTemplate": "variavel perigoDetectado = falso;\npara (i = 0; i < sensores.tamanho; i++) {\n    se (sensores[i].anomalia == verdadeiro) {\n        perigoDetectado = <span class=\"code-gap\">__________</span>;\n    }\n}",
    "options": [
      {
        "text": "verdadeiro (true)",
        "correct": true,
        "feedback": "Correto! A variável sentinela (flag) 'liga' o estado de perigo assim que a primeira anomalia é confirmada."
      },
      {
        "text": "falso (false)",
        "correct": false,
        "feedback": "Incorreto! Manter como falso ignoraria o perigo."
      },
      {
        "text": "i",
        "correct": false,
        "feedback": "Incorreto! 'i' é o índice numérico, e não o estado booleano de perigo."
      },
      {
        "text": "nulo",
        "correct": false,
        "feedback": "Incorreto! Nulo removeria o tipo booleano da flag."
      }
    ],
    "explanation": "Flags booleanas são sentinelas que guardam se determinado evento crítico aconteceu em qualquer momento de um processamento."
  },
  {
    "id": 38,
    "pythonFilename": "teste_mesa.py",
    "pythonCodeTemplate": "X = 0\nfor i in range(1, 4):\n    X = X + (i * 2)\n# Valor final de X: <span class=\"code-gap\">__</span>",
    "pythonOptions": [
      {
        "text": "12",
        "correct": true,
        "feedback": "Sensacional! i=1: X=0+2=2. i=2: X=2+4=6. i=3: X=6+6=12!"
      },
      {
        "text": "6",
        "correct": false,
        "feedback": "Incorreto! 6 é o valor até i=2."
      },
      {
        "text": "8",
        "correct": false,
        "feedback": "Incorreto! Revise a conta: 2 + 4 + 6 = 12."
      },
      {
        "text": "18",
        "correct": false,
        "feedback": "Incorreto! range(1, 4) itera apenas para i=1, 2, 3."
      }
    ],
    "pythonExplanation": "Em Python, range(1, 4) produz a sequência [1, 2, 3], totalizando X = 2 + 4 + 6 = 12.",
    "title": "Fase 38: Teste de Mesa e Rastreamento de Código",
    "concept": "Simulação Mental de Execução de Algoritmo",
    "filename": "teste_mesa.algo",
    "scenario": "Qual será o valor final de 'X' após o término do seguinte laço de repetição?",
    "codeTemplate": "variavel X = 0;\npara (i = 1; i <= 3; i++) {\n    X = X + (i * 2);\n}\n// Valor final de X: <span class=\"code-gap\">__</span>",
    "options": [
      {
        "text": "12",
        "correct": true,
        "feedback": "Sensacional! Na volta 1: X = 0 + (1*2) = 2. Na volta 2: X = 2 + (2*2) = 6. Na volta 3: X = 6 + (3*2) = 12!"
      },
      {
        "text": "6",
        "correct": false,
        "feedback": "Incorreto! 6 seria apenas o resultado até a segunda volta (i = 2)."
      },
      {
        "text": "8",
        "correct": false,
        "feedback": "Incorreto! Revise a conta: 2 + 4 + 6 = 12."
      },
      {
        "text": "18",
        "correct": false,
        "feedback": "Incorreto! O laço executa apenas 3 vezes (i = 1, 2, 3)."
      }
    ],
    "explanation": "O teste de mesa (trace table) é a habilidade de simular passo a passo a alteração das variáveis na memória durante cada iteração."
  },
  {
    "id": 39,
    "pythonFilename": "recursao_fatorial.py",
    "pythonCodeTemplate": "def contagem_regressiva(numero):\n    if numero <= 0:\n        return # <span class=\"code-gap\">___________________</span>\n    print(numero)\n    contagem_regressiva(numero - 1)",
    "pythonOptions": [
      {
        "text": "O Caso Base (Condição de Parada)",
        "correct": true,
        "feedback": "Perfeito! O 'Caso Base' em Python impede que a função recursiva entre em estouro de pilha (RecursionError)."
      },
      {
        "text": "O comando print",
        "correct": false,
        "feedback": "Incorreto! print apenas exibe dados."
      },
      {
        "text": "O nome da função",
        "correct": false,
        "feedback": "Incorreto! É o identificador da sub-rotina."
      },
      {
        "text": "O operador -",
        "correct": false,
        "feedback": "Incorreto! É o operador de decremento do parâmetro."
      }
    ],
    "pythonExplanation": "O Caso Base é a condição de parada indispensável para evitar estouro do limite de recursão do Python.",
    "title": "Fase 39: Recursão Básica e Caso Base",
    "concept": "Função que Chama a Si Mesma com Condição de Parada",
    "filename": "recursao_fatorial.algo",
    "scenario": "Em uma função recursiva, o que impede que ela entre em loop infinito (estouro de pilha / Stack Overflow)?",
    "codeTemplate": "funcao contagemRegressiva(numero) {\n    se (numero <= 0) {\n        retorne; // <span class=\"code-gap\">___________________</span>\n    }\n    imprimir(numero);\n    contagemRegressiva(numero - 1); // Chamada recursiva\n}",
    "options": [
      {
        "text": "O Caso Base (Condição de Parada)",
        "correct": true,
        "feedback": "Perfeito! O 'Caso Base' é a condição que encerra a cadeia de chamadas recursivas, retornando sem chamar a função novamente."
      },
      {
        "text": "O comando imprimir",
        "correct": false,
        "feedback": "Incorreto! Imprimir apenas mostra texto no console."
      },
      {
        "text": "O nome da função",
        "correct": false,
        "feedback": "Incorreto! O nome é apenas o identificador da sub-rotina."
      },
      {
        "text": "O operador de soma",
        "correct": false,
        "feedback": "Incorreto! A recursão diminui o parâmetro em direção ao caso base."
      }
    ],
    "explanation": "Toda função recursiva precisa de um Caso Base seguro para encerrar a recursão quando o problema atinge seu tamanho mínimo."
  },
  {
    "id": 40,
    "pythonFilename": "ai_core_restoration.py",
    "pythonCodeTemplate": "blocos_restantes = 10\nwhile blocos_restantes > 0:\n    reparar_bloco()\n    <span class=\"code-gap\">____________________</span> # Essencial para o laço terminar!",
    "pythonOptions": [
      {
        "text": "blocos_restantes -= 1 (ou blocos_restantes = blocos_restantes - 1)",
        "correct": true,
        "feedback": "VITÓRIA ABSOLUTA! Sem decrementar a variável em Python, a condição do while permaneceria sempre True!"
      },
      {
        "text": "blocos_restantes += 1",
        "correct": false,
        "feedback": "Incorreto! Incrementar criaria um loop infinito para cima!"
      },
      {
        "text": "print(\"loop\")",
        "correct": false,
        "feedback": "Incorreto! print não altera a variável de controle."
      },
      {
        "text": "blocos_restantes == 0",
        "correct": false,
        "feedback": "Incorreto! '==' apenas compara, sem alterar a variável."
      }
    ],
    "pythonExplanation": "Em Python, a atribuição aumentada 'variavel -= 1' decrementa a variável de controle do laço.",
    "title": "Fase 40: Depuração de Código (Bug Hunting Final)",
    "concept": "Identificação e Correção de Loop Infinito",
    "filename": "ai_core_restoration.algo",
    "scenario": "O AI Core está travando em loop infinito! Qual linha está FALTANDO dentro do laço para permitir que ele termine?",
    "codeTemplate": "variavel blocosRestantes = 10;\nenquanto (blocosRestantes > 0) {\n    repararBloco();\n    <span class=\"code-gap\">____________________</span>; // Essencial para o laço terminar!\n}\nimprimir(\"AI CORE TOTALMENTE RESTAURADO!\");",
    "options": [
      {
        "text": "blocosRestantes = blocosRestantes - 1 (ou blocosRestantes--)",
        "correct": true,
        "feedback": "VITÓRIA ABSOLUTA! Sem decrementar a variável de controle, a condição (10 > 0) continuaria eternamente verdadeira, travando a CPU!"
      },
      {
        "text": "blocosRestantes = blocosRestantes + 1",
        "correct": false,
        "feedback": "Incorreto! Incrementar aumentaria ainda mais os blocos (11, 12, 13...), mantendo o loop infinito para sempre!"
      },
      {
        "text": "imprimir(\"loop\")",
        "correct": false,
        "feedback": "Incorreto! Imprimir não altera o valor da variável de controle."
      },
      {
        "text": "blocosRestantes == 0",
        "correct": false,
        "feedback": "Incorreto! '==' é comparação e não altera o valor da variável na memória."
      }
    ],
    "explanation": "Em laços 'while', a variável testada na condição DEVE sofrer alteração em direção ao fim da repetição para evitar loops infinitos."
  },
  {
    "id": 41,
    "pythonFilename": "busca_binaria_cyber.py",
    "pythonCodeTemplate": "def busca_binaria(vetor_ordenado, alvo):\n    inicio = 0\n    fim = len(vetor_ordenado) - 1\n    while inicio <= fim:\n        meio = <span class=\"code-gap\">__________________________</span>\n        if vetor_ordenado[meio] == alvo: return meio\n        if vetor_ordenado[meio] < alvo: inicio = meio + 1\n        else: fim = meio - 1\n    return -1",
    "pythonOptions": [
      {
        "text": "(inicio + fim) // 2",
        "correct": true,
        "feedback": "Sensacional! Em Python, o operador '//' realiza a divisão inteira (piso), calculando a posição média exata do índice!"
      },
      {
        "text": "fim - inicio",
        "correct": false,
        "feedback": "Incorreto! (fim - inicio) calcula a amplitude, não a posição do meio."
      },
      {
        "text": "inicio * 2",
        "correct": false,
        "feedback": "Incorreto! Não encontra a posição central."
      },
      {
        "text": "len(vetor_ordenado) // 2",
        "correct": false,
        "feedback": "Incorreto! Ignora as variáveis dinâmicas inicio e fim."
      }
    ],
    "pythonExplanation": "Em Python, usamos a divisão inteira '//' (ex: (inicio + fim) // 2) para obter o índice central em número inteiro.",
    "title": "Fase 41 (Desafio): Busca Binária (Binary Search)",
    "concept": "Divisão e Conquista em Vetor Ordenado (O(log N))",
    "filename": "busca_binaria_cyber.algo",
    "scenario": "Em uma lista ORDENADA de 1.000.000 de IPs, a Busca Binária divide o espaço de busca pela metade a cada passo. Como calculamos o índice do MEIO?",
    "codeTemplate": "funcao buscaBinaria(vetorOrdenado, alvo) {\n    variavel inicio = 0;\n    variavel fim = vetorOrdenado.tamanho - 1;\n    enquanto (inicio <= fim) {\n        variavel meio = <span class=\"code-gap\">__________________________</span>;\n        se (vetorOrdenado[meio] == alvo) retorne meio;\n        se (vetorOrdenado[meio] < alvo) inicio = meio + 1;\n        senao fim = meio - 1;\n    }\n    retorne -1;\n}",
    "options": [
      {
        "text": "arredondarParaBaixo((inicio + fim) / 2)",
        "correct": true,
        "feedback": "Sensacional! O ponto médio é exatamente a média aritmética dos limites (inicio + fim) / 2."
      },
      {
        "text": "fim - inicio",
        "correct": false,
        "feedback": "Incorreto! (fim - inicio) calcula a distância/amplitude, não a posição central do índice."
      },
      {
        "text": "inicio * 2",
        "correct": false,
        "feedback": "Incorreto! Multiplicar o início por 2 não encontra o elemento mediano."
      },
      {
        "text": "vetorOrdenado.tamanho / 2",
        "correct": false,
        "feedback": "Incorreto! O tamanho fixo ignora os novos limites 'inicio' e 'fim' que mudam a cada iteração."
      }
    ],
    "explanation": "A Busca Binária tem complexidade O(log N). Em 1 milhão de itens ordenados, ela encontra qualquer elemento em no máximo 20 comparações!"
  },
  {
    "id": 42,
    "pythonFilename": "ordenacao_bolha.py",
    "pythonCodeTemplate": "for i in range(n - 1):\n    for j in range(n - i - 1):\n        if vetor[j] <span class=\"code-gap\">_</span> vetor[j + 1]:\n            vetor[j], vetor[j + 1] = vetor[j + 1], vetor[j]",
    "pythonOptions": [
      {
        "text": "> (maior que)",
        "correct": true,
        "feedback": "Exato! Em Python, se vetor[j] > vetor[j+1], os elementos adjacentes estão desalinhados e são trocados."
      },
      {
        "text": "<",
        "correct": false,
        "feedback": "Incorreto! '<' ordenaria em ordem decrescente."
      },
      {
        "text": "==",
        "correct": false,
        "feedback": "Incorreto! Trocar elementos iguais destruiria a estabilidade do algoritmo."
      },
      {
        "text": "!=",
        "correct": false,
        "feedback": "Incorreto! '!=' trocaria inclusive elementos em ordem correta."
      }
    ],
    "pythonExplanation": "No Bubble Sort em Python, a troca de variáveis adjacentes pode ser feita diretamente com 'a, b = b, a'.",
    "title": "Fase 42 (Desafio): Ordenação por Bolha (Bubble Sort)",
    "concept": "Comparação e Troca de Elementos Adjacentes",
    "filename": "ordenacao_bolha.algo",
    "scenario": "Para ordenar o vetor em ordem crescente com Bubble Sort, quando devemos trocar dois elementos vizinhos de posição?",
    "codeTemplate": "para (i = 0; i < n - 1; i++) {\n    para (j = 0; j < n - i - 1; j++) {\n        se (vetor[j] <span class=\"code-gap\">_</span> vetor[j + 1]) {\n            trocar(vetor, j, j + 1);\n        }\n    }\n}",
    "options": [
      {
        "text": "> (maior que)",
        "correct": true,
        "feedback": "Exato! Se o elemento da esquerda vetor[j] for MAIOR que o vizinho da direita vetor[j+1], eles estão fora de ordem e devem ser trocados!"
      },
      {
        "text": "<",
        "correct": false,
        "feedback": "Incorreto! '<' ordenaria o vetor em ordem decrescente (do maior para o menor)."
      },
      {
        "text": "==",
        "correct": false,
        "feedback": "Incorreto! Trocar elementos iguais é inútil e quebra a estabilidade da ordenação."
      },
      {
        "text": "!=",
        "correct": false,
        "feedback": "Incorreto! '!=' trocaria inclusive elementos que já estão na ordem correta."
      }
    ],
    "explanation": "O Bubble Sort faz os maiores valores 'flutuarem' progressivamente para o final da lista a cada passada completa."
  },
  {
    "id": 43,
    "pythonFilename": "fibonacci_recursivo.py",
    "pythonCodeTemplate": "def fibonacci(n):\n    if n == 0: return 0\n    if n == 1: return 1\n    return <span class=\"code-gap\">_________________________________</span>",
    "pythonOptions": [
      {
        "text": "fibonacci(n - 1) + fibonacci(n - 2)",
        "correct": true,
        "feedback": "Perfeito! Cada termo de Fibonacci em Python é a soma recursiva dos dois termos anteriores."
      },
      {
        "text": "fibonacci(n - 1) * fibonacci(n - 2)",
        "correct": false,
        "feedback": "Incorreto! Fibonacci é soma, não multiplicação."
      },
      {
        "text": "fibonacci(n * 2)",
        "correct": false,
        "feedback": "Incorreto! Dobrar o parâmetro provocaria estouro de pilha."
      },
      {
        "text": "n + fibonacci(n)",
        "correct": false,
        "feedback": "Incorreto! Travaria em recursão infinita."
      }
    ],
    "pythonExplanation": "Em Python, a função recursiva de Fibonacci retorna a soma de duas chamadas recursivas: F(n-1) + F(n-2).",
    "title": "Fase 43 (Desafio): Recursão Múltipla (Sequência de Fibonacci)",
    "concept": "Definição de Termos Recursivos (Fn = Fn-1 + Fn-2)",
    "filename": "fibonacci_recursivo.algo",
    "scenario": "O algoritmo gerador de chaves segue a Sequência de Fibonacci (0, 1, 1, 2, 3, 5, 8...). Complete o retorno recursivo para N >= 2:",
    "codeTemplate": "funcao fibonacci(n) {\n    se (n == 0) retorne 0;\n    se (n == 1) retorne 1;\n    retorne <span class=\"code-gap\">_________________________________</span>;\n}",
    "options": [
      {
        "text": "fibonacci(n - 1) + fibonacci(n - 2)",
        "correct": true,
        "feedback": "Perfeito! Cada termo de Fibonacci é a soma exata dos dois termos imediatamente anteriores."
      },
      {
        "text": "fibonacci(n - 1) * fibonacci(n - 2)",
        "correct": false,
        "feedback": "Incorreto! Fibonacci é a SOMA dos dois termos anteriores, não a multiplicação."
      },
      {
        "text": "fibonacci(n * 2)",
        "correct": false,
        "feedback": "Incorreto! Dobrar o parâmetro provocaria recursão infinita e estouro de pilha."
      },
      {
        "text": "n + fibonacci(n)",
        "correct": false,
        "feedback": "Incorreto! Chamar com o mesmo 'n' travaria em recursão infinita sem convergência."
      }
    ],
    "explanation": "A relação de recorrência de Fibonacci é F(n) = F(n-1) + F(n-2), com os casos base canônicos F(0)=0 e F(1)=1."
  },
  {
    "id": 44,
    "pythonFilename": "verificador_palindromo.py",
    "pythonCodeTemplate": "ini, fim = 0, len(texto) - 1\nwhile ini < fim:\n    if texto[ini] != texto[fim]: return False\n    ini <span class=\"code-gap\">____</span>; fim <span class=\"code-gap\">____</span>\nreturn True",
    "pythonOptions": [
      {
        "text": "+= 1 e -= 1",
        "correct": true,
        "feedback": "Excelente! Em Python, 'ini += 1' avança o índice para a direita e 'fim -= 1' recua o índice para a esquerda."
      },
      {
        "text": "-= 1 e += 1",
        "correct": false,
        "feedback": "Incorreto! Afastaria os índices para fora dos limites."
      },
      {
        "text": "+= 1 e += 1",
        "correct": false,
        "feedback": "Incorreto! Moveria ambos na mesma direção."
      },
      {
        "text": "= 0 e = 0",
        "correct": false,
        "feedback": "Incorreto! Resetaria as variáveis para 0."
      }
    ],
    "pythonExplanation": "O algoritmo de dois ponteiros em Python ajusta as posições dos índices com 'ini += 1' e 'fim -= 1'.",
    "title": "Fase 44 (Desafio): Dois Ponteiros - Verificador de Palíndromo",
    "concept": "Convergência de Extremidades (Início e Fim)",
    "filename": "verificador_palindromo.algo",
    "scenario": "Para checar se uma sequência de bytes é um Palíndromo (lê-se igual de frente para trás), comparamos as pontas e avançamos:",
    "codeTemplate": "variavel ini = 0;\nvariavel fim = texto.tamanho - 1;\nenquanto (ini < fim) {\n    se (texto[ini] != texto[fim]) retorne falso;\n    ini<span class=\"code-gap\">____</span>;\n    fim<span class=\"code-gap\">____</span>;\n}\nretorne verdadeiro;",
    "options": [
      {
        "text": "++ e --",
        "correct": true,
        "feedback": "Excelente! 'ini++' avança para a direita e 'fim--' recua para a esquerda até se encontrarem no centro."
      },
      {
        "text": "-- e ++",
        "correct": false,
        "feedback": "Incorreto! Afastaria os ponteiros para fora dos limites do texto."
      },
      {
        "text": "++ e ++",
        "correct": false,
        "feedback": "Incorreto! Ambos se moveriam na mesma direção, impedindo o teste simétrico das pontas."
      },
      {
        "text": "= 0 e = 0",
        "correct": false,
        "feedback": "Incorreto! Resetaria as variáveis para zero a cada iteração."
      }
    ],
    "explanation": "A técnica de dois ponteiros (Two Pointers) resolve checagens simétricas e buscas de pares em tempo linear O(N) com memória O(1)."
  },
  {
    "id": 45,
    "pythonFilename": "filtro_bits.py",
    "pythonCodeTemplate": "mascara = 4 # Binário: 0b00000100\nif (registro_status <span class=\"code-gap\">_</span> mascara) != 0:\n    ativar_protocolo_defesa()",
    "pythonOptions": [
      {
        "text": "& (E Bitwise)",
        "correct": true,
        "feedback": "Correto! O operador '&' em Python realiza a operação E bit a bit entre os inteiros."
      },
      {
        "text": "and (E Lógico)",
        "correct": false,
        "feedback": "Incorreto! 'and' é operador lógico booleano, não bitwise."
      },
      {
        "text": "| (OU Bitwise)",
        "correct": false,
        "feedback": "Incorreto! '|' força bits a 1."
      },
      {
        "text": "%",
        "correct": false,
        "feedback": "Incorreto! '%' calcula resto da divisão."
      }
    ],
    "pythonExplanation": "Em Python, os operadores bitwise são: & (AND), | (OR), ^ (XOR), ~ (NOT), << (Left Shift) e >> (Right Shift).",
    "title": "Fase 45 (Desafio): Operadores Bitwise (Máscara de Bits &)",
    "concept": "Manipulação de Bits em Nível de Hardware",
    "filename": "filtro_bits.algo",
    "scenario": "Para verificar se o 3º bit (peso 4 = 2^2) de uma flag de segurança está ATIVO (1), aplicamos uma máscara com o operador E Bitwise (&):",
    "codeTemplate": "variavel mascara = 4; // Em binário: 00000100\nse ((registroStatus <span class=\"code-gap\">_</span> mascara) != 0) {\n    ativarProtocoloDefesa();\n}",
    "options": [
      {
        "text": "& (E Bitwise)",
        "correct": true,
        "feedback": "Correto! O operador '&' preserva apenas os bits que são '1' em ambos os operandos (bitmasking)."
      },
      {
        "text": "&& (E Lógico)",
        "correct": false,
        "feedback": "Incorreto! '&&' avalia valores booleanos como um todo, não bit a bit individualmente."
      },
      {
        "text": "| (OU Bitwise)",
        "correct": false,
        "feedback": "Incorreto! '|' força os bits a ficarem em 1, em vez de apenas inspecionar o bit existente."
      },
      {
        "text": "%",
        "correct": false,
        "feedback": "Incorreto! '%' calcula o resto da divisão aritmética."
      }
    ],
    "explanation": "Operações bit a bit (&, |, ^, ~, <<, >>) são ultrarrápidas e fundamentais em emuladores, drivers e sistemas embarcados."
  },
  {
    "id": 46,
    "pythonFilename": "analise_algoritmo.py",
    "pythonCodeTemplate": "for i in range(N):\n    for j in range(N):\n        processar_pixel(matriz[i][j])",
    "pythonOptions": [
      {
        "text": "O(N²)",
        "correct": true,
        "feedback": "Muito bem! Dois laços 'for' aninhados iterando N vezes em Python resultam em complexidade de tempo O(N²)."
      },
      {
        "text": "O(N)",
        "correct": false,
        "feedback": "Incorreto! O(N) é a complexidade de um único laço simples."
      },
      {
        "text": "O(1)",
        "correct": false,
        "feedback": "Incorreto! O(1) é tempo constante."
      },
      {
        "text": "O(log N)",
        "correct": false,
        "feedback": "Incorreto! O(log N) é divisão logarítmica."
      }
    ],
    "pythonExplanation": "A análise Big-O em Python mede a escalabilidade do algoritmo quando N cresce.",
    "title": "Fase 46 (Desafio): Análise de Complexidade de Tempo (Big-O)",
    "concept": "Comportamento Assintótico de Algoritmos",
    "filename": "analise_algoritmo.algo",
    "scenario": "Qual é a complexidade de tempo no pior caso de um algoritmo com 2 laços FOR aninhados, onde ambos percorrem 'N' elementos?",
    "codeTemplate": "para (i = 0; i < N; i++) {\n    para (j = 0; j < N; j++) {\n        processarPixel(matriz[i][j]); // Executa N * N vezes\n    }\n}",
    "options": [
      {
        "text": "O(N²)",
        "correct": true,
        "feedback": "Muito bem! Como cada volta de 'i' executa 'N' voltas de 'j', o total de passos é N * N = O(N²) (complexidade quadrática)."
      },
      {
        "text": "O(N)",
        "correct": false,
        "feedback": "Incorreto! O(N) linear seria apenas 1 único laço simples."
      },
      {
        "text": "O(1)",
        "correct": false,
        "feedback": "Incorreto! O(1) representa tempo constante, independente de N."
      },
      {
        "text": "O(log N)",
        "correct": false,
        "feedback": "Incorreto! O(log N) divide o problema sucessivamente (como na busca binária)."
      }
    ],
    "explanation": "A notação Big-O descreve como o tempo de execução ou memória de um algoritmo escala conforme o tamanho da entrada (N) cresce."
  },
  {
    "id": 47,
    "pythonFilename": "limpar_duplicatas.py",
    "pythonCodeTemplate": "ids_comuns = [10, 20, 10, 30, 20, 40]\nids_unicos = <span class=\"code-gap\">___</span>(ids_comuns) # {10, 20, 30, 40}",
    "pythonOptions": [
      {
        "text": "set",
        "correct": true,
        "feedback": "Exato! Em Python, o tipo nativo set() cria um conjunto que remove automaticamente valores duplicados."
      },
      {
        "text": "stack",
        "correct": false,
        "feedback": "Incorreto! Python não possui o tipo nativo 'stack'."
      },
      {
        "text": "queue",
        "correct": false,
        "feedback": "Incorreto! 'queue' não elimina duplicatas."
      },
      {
        "text": "list",
        "correct": false,
        "feedback": "Incorreto! 'list' manteria todos os elementos duplicados."
      }
    ],
    "pythonExplanation": "A classe embutida set() em Python converte coleções removendo todas as duplicatas em tempo médio O(N).",
    "title": "Fase 47 (Desafio): Remoção de Duplicatas com Conjuntos (Set)",
    "concept": "Unicidade de Elementos e Tabelas de Dispersão",
    "filename": "limpar_duplicatas.algo",
    "scenario": "Qual estrutura de dados armazena nativamente apenas elementos ÚNICOS, descartando automaticamente qualquer inserção repetida?",
    "codeTemplate": "variavel idsComuns = [10, 20, 10, 30, 20, 40];\nvariavel idsUnicos = novo <span class=\"code-gap\">__________</span>(idsComuns); // Resultado: {10, 20, 30, 40}",
    "options": [
      {
        "text": "Conjunto / Set",
        "correct": true,
        "feedback": "Exato! Estruturas do tipo Set garantem a unicidade de suas chaves com verificação média em O(1)."
      },
      {
        "text": "Pilha / Stack",
        "correct": false,
        "feedback": "Incorreto! Pilhas aceitam itens repetidos e apenas controlam a ordem LIFO."
      },
      {
        "text": "Fila / Queue",
        "correct": false,
        "feedback": "Incorreto! Filas aceitam repetições e controlam apenas a ordem FIFO."
      },
      {
        "text": "Matriz 2D",
        "correct": false,
        "feedback": "Incorreto! Matrizes são apenas grades de posições numéricas."
      }
    ],
    "explanation": "Um Conjunto (Set) utiliza internamente tabelas hash para garantir que nenhum elemento duplicado seja adicionado à coleção."
  },
  {
    "id": 48,
    "pythonFilename": "inverter_vetor.py",
    "pythonCodeTemplate": "ini, fim = 0, len(v) - 1\nwhile <span class=\"code-gap\">_________</span>:\n    v[ini], v[fim] = v[fim], v[ini]\n    ini += 1; fim -= 1",
    "pythonOptions": [
      {
        "text": "ini < fim",
        "correct": true,
        "feedback": "Correto! Enquanto 'ini < fim', as pontas do vetor são trocadas in-place em Python."
      },
      {
        "text": "ini == 0",
        "correct": false,
        "feedback": "Incorreto! Só executaria a primeira troca."
      },
      {
        "text": "ini < len(v)",
        "correct": false,
        "feedback": "Incorreto! Trocaria de volta desfazendo a inversão."
      },
      {
        "text": "fim > 1000",
        "correct": false,
        "feedback": "Incorreto! 1000 é um número fixo arbitrário."
      }
    ],
    "pythonExplanation": "Em Python, a troca in-place 'v[ini], v[fim] = v[fim], v[ini]' inverte o vetor sem gastar memória extra.",
    "title": "Fase 48 (Desafio): Inversão de Vetor In-Place",
    "concept": "Economia de Memória O(1) Auxiliar",
    "filename": "inverter_vetor.algo",
    "scenario": "Para inverter um vetor sem criar uma segunda lista na memória, executamos a troca das posições até que o índice inicial alcance o:",
    "codeTemplate": "variavel ini = 0, fim = v.tamanho - 1;\nenquanto (<span class=\"code-gap\">_________</span>) {\n    trocar(v, ini, fim);\n    ini++; fim--;\n}",
    "options": [
      {
        "text": "ini < fim",
        "correct": true,
        "feedback": "Correto! Quando 'ini >= fim', todos os elementos opostos já foram trocados e o meio foi atingido."
      },
      {
        "text": "ini == 0",
        "correct": false,
        "feedback": "Incorreto! 'ini == 0' só seria verdadeiro na primeiríssima volta."
      },
      {
        "text": "ini < v.tamanho",
        "correct": false,
        "feedback": "Incorreto! Se for até o final, trocaria de novo os mesmos elementos, desfazendo a inversão!"
      },
      {
        "text": "fim > 1000",
        "correct": false,
        "feedback": "Incorreto! 1000 é um número arbitrário não relacionado ao tamanho real do vetor."
      }
    ],
    "explanation": "Inverter um array 'in-place' usando dois ponteiros requer apenas N/2 trocas e nenhuma alocação extra de memória."
  },
  {
    "id": 49,
    "pythonFilename": "ponteiro_referencia.py",
    "pythonCodeTemplate": "def alterar_primeiro(lista):\n    lista[0] = 999\ndados = [1, 2, 3]\nalterar_primeiro(dados)\n# O valor de dados[0] agora é: <span class=\"code-gap\">___</span>",
    "pythonOptions": [
      {
        "text": "999 (modificado pois listas em Python são mutáveis)",
        "correct": true,
        "feedback": "Perfeito! Listas em Python são mutáveis e passadas por referência de memória; portanto, a alteração afeta a lista original."
      },
      {
        "text": "1",
        "correct": false,
        "feedback": "Incorreto! Listas são mutáveis em Python e não são copiadas por valor."
      },
      {
        "text": "0",
        "correct": false,
        "feedback": "Incorreto! A atribuição foi 999."
      },
      {
        "text": "Gera erro",
        "correct": false,
        "feedback": "Incorreto! É um comportamento padrão do Python."
      }
    ],
    "pythonExplanation": "Em Python, objetos mutáveis (como list e dict) são passados por referência para funções.",
    "title": "Fase 49 (Desafio): Passagem por Valor vs Referência",
    "concept": "Mutabilidade de Coleções e Objetos na Memória",
    "filename": "ponteiro_referencia.algo",
    "scenario": "Quando passamos um Vetor como argumento para uma função e alteramos um item dentro dela, o que ocorre com o vetor original fora da função?",
    "codeTemplate": "funcao alterarPrimeiro(lista) {\n    lista[0] = 999;\n}\nvariavel dados = [1, 2, 3];\nalterarPrimeiro(dados);\n// O valor de dados[0] agora é: <span class=\"code-gap\">___</span>",
    "options": [
      {
        "text": "999 (O vetor original foi modificado porque é passado por referência)",
        "correct": true,
        "feedback": "Perfeito! Vetores e objetos são passados por referência (endereço de memória); portanto, alterações internas afetam a estrutura original."
      },
      {
        "text": "1 (Permanece 1 porque listas são imutáveis)",
        "correct": false,
        "feedback": "Incorreto! Na maioria das linguagens imperativas, vetores são mutáveis e passados por referência."
      },
      {
        "text": "0",
        "correct": false,
        "feedback": "Incorreto! A função atribuiu 999, não 0."
      },
      {
        "text": "Gera erro de execução",
        "correct": false,
        "feedback": "Incorreto! É um comportamento padrão da arquitetura de memória."
      }
    ],
    "explanation": "Tipos primitivos (int, float, bool) são copiados por valor, enquanto estruturas compostas (vetores, objetos) compartilham a referência de memória."
  },
  {
    "id": 50,
    "pythonFilename": "validador_sintaxe.py",
    "pythonCodeTemplate": "if char == '(':\n    pilha.append('(')\nelif char == ')':\n    if not pilha: return False\n    pilha.<span class=\"code-gap\">_____</span>() # Remove o '(' correspondente",
    "pythonOptions": [
      {
        "text": "pop()",
        "correct": true,
        "feedback": "Sensacional! O método .pop() em listas do Python desempilha o último parêntese aberto."
      },
      {
        "text": "append(')')",
        "correct": false,
        "feedback": "Incorreto! append(')') empilharia mais um símbolo."
      },
      {
        "text": "clear()",
        "correct": false,
        "feedback": "Incorreto! clear() esvaziaria a pilha inteira."
      },
      {
        "text": "reverse()",
        "correct": false,
        "feedback": "Incorreto! reverse() inverteria a pilha."
      }
    ],
    "pythonExplanation": "Em Python, o método .pop() retira o elemento do topo da pilha em tempo O(1).",
    "title": "Fase 50 (Desafio): Balanceamento de Parênteses com Pilha",
    "concept": "Validação Sintática de Compiladores",
    "filename": "validador_sintaxe.algo",
    "scenario": "Para validar expressões matemáticas como '((A+B)*C)', empilhamos '(' ao abrir. O que devemos fazer ao encontrar o caractere de fechamento ')'?",
    "codeTemplate": "se (caractere == '(') {\n    pilha.empilhar('(');\n} senao se (caractere == ')') {\n    se (pilha.estaVazia()) retorne falso; // Erro: fechou sem abrir!\n    pilha.<span class=\"code-gap\">___________</span>(); // Remove o '(' correspondente\n}",
    "options": [
      {
        "text": "desempilhar() / pop()",
        "correct": true,
        "feedback": "Sensacional! Desempilhar o parêntese aberto consome o par correspondente da pilha com precisão."
      },
      {
        "text": "empilhar(')')",
        "correct": false,
        "feedback": "Incorreto! Empilhar o caractere de fechamento acumularia símbolos em vez de fechar os pares abertos."
      },
      {
        "text": "limparTudo()",
        "correct": false,
        "feedback": "Incorreto! Limpar apagaria outros parênteses aninhados válidos."
      },
      {
        "text": "inverter()",
        "correct": false,
        "feedback": "Incorreto! Inverter mudaria a ordem dos parênteses pendentes."
      }
    ],
    "explanation": "Compiladores e analisadores sintáticos usam pilhas para verificar o balanceamento exato de delimitadores: (), [], {} e tags HTML."
  },
  {
    "id": 51,
    "pythonFilename": "algoritmo_troco.py",
    "pythonCodeTemplate": "for moeda in moedas:\n    qtd = valor_restante <span class=\"code-gap\">//</span> moeda\n    valor_restante = valor_restante <span class=\"code-gap\">%</span> moeda",
    "pythonOptions": [
      {
        "text": "// (divisão inteira) e % (resto)",
        "correct": true,
        "feedback": "Excelente! Em Python, '//' calcula a divisão inteira e '%' obtém o resto que sobra."
      },
      {
        "text": "* e +",
        "correct": false,
        "feedback": "Incorreto! Multiplicaria em vez de dividir."
      },
      {
        "text": "== e !=",
        "correct": false,
        "feedback": "Incorreto! Comparação lógica."
      },
      {
        "text": "+ e -",
        "correct": false,
        "feedback": "Incorreto! Divisão inteira é mais direta."
      }
    ],
    "pythonExplanation": "Em Python, a divisão inteira '//' descarta a parte fracionária e '%' devolve o resto.",
    "title": "Fase 51 (Desafio): Algoritmo Guloso (Problema do Troco)",
    "concept": "Escolha da Melhor Opção Local Imediata",
    "filename": "algoritmo_troco.algo",
    "scenario": "Dadas moedas de valores [100, 50, 20, 10, 5, 1], como um algoritmo guloso escolhe as moedas para totalizar um valor com a menor quantidade?",
    "codeTemplate": "para (i = 0; i < moedas.tamanho; i++) {\n    variavel qtdMoedasDesteValor = parteInteira(valorRestante <span class=\"code-gap\">_</span> moedas[i]);\n    valorRestante = valorRestante <span class=\"code-gap\">_</span> moedas[i];\n}",
    "options": [
      {
        "text": "/ (divisão) e % (resto)",
        "correct": true,
        "feedback": "Excelente! A divisão inteira extrai quantas moedas cabem, e o resto (%) atualiza o valor que ainda sobra."
      },
      {
        "text": "* e +",
        "correct": false,
        "feedback": "Incorreto! Multiplicar aumentaria a quantia a pagar."
      },
      {
        "text": "== e !=",
        "correct": false,
        "feedback": "Incorreto! São operadores de comparação lógica, não operações aritméticas de contagem."
      },
      {
        "text": "+ e -",
        "correct": false,
        "feedback": "Incorreto! Apenas somar e subtrair de 1 em 1 seria ineficiente frente à divisão direta."
      }
    ],
    "explanation": "Algoritmos gulosos (Greedy) selecionam a maior moeda disponível primeiro, resolvendo problemas canônicos de otimização de troco."
  },
  {
    "id": 52,
    "pythonFilename": "arvore_busca.py",
    "pythonCodeTemplate": "def inserir(no_atual, novo_valor):\n    if novo_valor < no_atual.valor:\n        no_atual.filho_<span class=\"code-gap\">________</span> = inserir(no_atual.filho_<span class=\"code-gap\">________</span>, novo_valor)\n    else:\n        no_atual.filho_direito = inserir(no_atual.filho_direito, novo_valor)\n    return no_atual",
    "pythonOptions": [
      {
        "text": "esquerdo (left)",
        "correct": true,
        "feedback": "Correto! Por regra da Árvore Binária de Busca, valores menores são armazenados no ramo esquerdo."
      },
      {
        "text": "direito (right)",
        "correct": false,
        "feedback": "Incorreto! Valores maiores vão para o ramo direito."
      },
      {
        "text": "raiz",
        "correct": false,
        "feedback": "Incorreto! A raiz é o nó de topo."
      },
      {
        "text": "nenhum",
        "correct": false,
        "feedback": "Incorreto! A árvore precisa inserir o nó."
      }
    ],
    "pythonExplanation": "Em Python, atributos de objetos em BST direcionam a navegação recursiva (no.filho_esquerdo vs no.filho_direito).",
    "title": "Fase 52 (Desafio): Árvore Binária de Busca (BST)",
    "concept": "Propriedade Fundamental de Ordenação em Árvores",
    "filename": "arvore_busca.algo",
    "scenario": "Em uma Árvore Binária de Busca (BST), se o novo valor a ser inserido for MENOR que o nó atual, para qual ramo devemos navegar?",
    "codeTemplate": "funcao inserir(noAtual, novoValor) {\n    se (novoValor < noAtual.valor) {\n        noAtual.filho<span class=\"code-gap\">________</span> = inserir(noAtual.filho<span class=\"code-gap\">________</span>, novoValor);\n    } senao {\n        noAtual.filhoDireito = inserir(noAtual.filhoDireito, novoValor);\n    }\n    retorne noAtual;\n}",
    "options": [
      {
        "text": "Esquerdo (Left)",
        "correct": true,
        "feedback": "Correto! Por definição formal de BST, todos os valores menores ficam na subárvore Esquerda e os maiores na Direita."
      },
      {
        "text": "Direito (Right)",
        "correct": false,
        "feedback": "Incorreto! Valores maiores que o nó atual vão para a subárvore Direita."
      },
      {
        "text": "Raiz",
        "correct": false,
        "feedback": "Incorreto! A raiz é o nó ancestral de topo."
      },
      {
        "text": "Nenhum",
        "correct": false,
        "feedback": "Incorreto! A árvore deve crescer para o ramo esquerdo."
      }
    ],
    "explanation": "A propriedade da BST (Esquerda < Raiz < Direita) permite realizar buscas, inserções e deleções com tempo médio O(log N)."
  },
  {
    "id": 53,
    "pythonFilename": "detector_ciclo.py",
    "pythonCodeTemplate": "lento = cabeca\nrapido = cabeca\nwhile rapido and rapido.proximo:\n    lento = lento.proximo\n    rapido = rapido.<span class=\"code-gap\">___________________</span>\n    if lento == rapido: return True",
    "pythonOptions": [
      {
        "text": "proximo.proximo (2 nós por passo)",
        "correct": true,
        "feedback": "Muito bem! O ponteiro rápido avança dois nós 'proximo.proximo' a cada iteração em Python."
      },
      {
        "text": "proximo (1 nó por passo)",
        "correct": false,
        "feedback": "Incorreto! Mantendo a mesma velocidade não se encontrariam."
      },
      {
        "text": "anterior",
        "correct": false,
        "feedback": "Incorreto! Lista encadeada simples não tem ponteiro anterior."
      },
      {
        "text": "cabeca",
        "correct": false,
        "feedback": "Incorreto! Voltar para a cabeça travaria a busca."
      }
    ],
    "pythonExplanation": "O algoritmo de Floyd usa ponteiros de velocidades diferentes (rapido = rapido.proximo.proximo) para detectar ciclos.",
    "title": "Fase 53 (Desafio): Detecção de Ciclos (Algoritmo de Floyd)",
    "concept": "Ponteiro Lento e Rápido (Tartaruga e Lebre)",
    "filename": "detector_ciclo.algo",
    "scenario": "Para detectar se uma lista encadeada possui um loop infinito (ciclo), o ponteiro 'lento' avança 1 nó por vez, enquanto o ponteiro 'rápido' avança:",
    "codeTemplate": "variavel lento = cabeca;\nvariavel rapido = cabeca;\nenquanto (rapido != nulo && rapido.proximo != nulo) {\n    lento = lento.proximo;\n    rapido = rapido.<span class=\"code-gap\">___________________</span>;\n    se (lento == rapido) retorne verdadeiro; // Ciclo detectado!\n}",
    "options": [
      {
        "text": "proximo.proximo (2 nós por passo)",
        "correct": true,
        "feedback": "Muito bem! Como o rápido anda com o dobro da velocidade, se houver um ciclo, ele inevitavelmente alcançará o lento por trás!"
      },
      {
        "text": "proximo (1 nó por passo)",
        "correct": false,
        "feedback": "Incorreto! Se ambos andassem na mesma velocidade, manteriam sempre a mesma distância sem nunca se encontrar."
      },
      {
        "text": "anterior",
        "correct": false,
        "feedback": "Incorreto! Em listas simplesmente encadeadas não existe ponteiro de volta."
      },
      {
        "text": "cabeca",
        "correct": false,
        "feedback": "Incorreto! Resetar para o início não permitiria o avanço da lebre."
      }
    ],
    "explanation": "O algoritmo de Floyd (Tartaruga e Lebre) detecta loops em grafos e listas usando apenas duas referências e sem gastar memória adicional O(1)."
  },
  {
    "id": 54,
    "pythonFilename": "transformacao_map.py",
    "pythonCodeTemplate": "numeros = [10, 20, 30]\nduplicados = list(<span class=\"code-gap\">___</span>(lambda x: x * 2, numeros)) # [20, 40, 60]",
    "pythonOptions": [
      {
        "text": "map",
        "correct": true,
        "feedback": "Exato! A função embutida map(funcao, iteravel) em Python aplica uma transformação a cada elemento."
      },
      {
        "text": "filter",
        "correct": false,
        "feedback": "Incorreto! filter seleciona por condição booleana."
      },
      {
        "text": "reduce",
        "correct": false,
        "feedback": "Incorreto! reduce condensa a um único valor."
      },
      {
        "text": "del",
        "correct": false,
        "feedback": "Incorreto! del apaga dados."
      }
    ],
    "pythonExplanation": "Em Python, map(funcao, lista) retorna um iterador de itens transformados (convertido para lista com list()).",
    "title": "Fase 54 (Desafio): Funções de Alta Ordem - Mapeamento (MAP)",
    "concept": "Transformação Funcional Imutável de Vetores",
    "filename": "transformacao_map.algo",
    "scenario": "Queremos duplicar o valor de todos os números de uma lista sem alterar a lista original. Qual método funcional de alta ordem usamos?",
    "codeTemplate": "variavel numeros = [10, 20, 30];\nvariavel duplicados = numeros.<span class=\"code-gap\">___</span>(item => item * 2); // [20, 40, 60]",
    "options": [
      {
        "text": "mapear / map",
        "correct": true,
        "feedback": "Exato! O método 'map' aplica uma função de transformação a cada item e retorna um novo vetor do mesmo tamanho."
      },
      {
        "text": "filtrar / filter",
        "correct": false,
        "feedback": "Incorreto! 'filter' seleciona apenas itens que atendem a um teste booleano, sem transformar os valores."
      },
      {
        "text": "reduzir / reduce",
        "correct": false,
        "feedback": "Incorreto! 'reduce' condensa o vetor inteiro em um único valor final."
      },
      {
        "text": "deletar",
        "correct": false,
        "feedback": "Incorreto! 'deletar' destruiria dados."
      }
    ],
    "explanation": "O paradigma funcional utiliza 'map' para transformações de dados puras e sem efeitos colaterais (side-effects)."
  },
  {
    "id": 55,
    "pythonFilename": "filtragem_segura.py",
    "pythonCodeTemplate": "ativos = list(<span class=\"code-gap\">______</span>(lambda u: u[\"status\"] == \"ATIVO\", usuarios))",
    "pythonOptions": [
      {
        "text": "filter",
        "correct": true,
        "feedback": "Correto! A função embutida filter(predicado, iteravel) em Python seleciona apenas os elementos que retornam True."
      },
      {
        "text": "map",
        "correct": false,
        "feedback": "Incorreto! map transformaria os elementos em booleanos."
      },
      {
        "text": "sort",
        "correct": false,
        "feedback": "Incorreto! sort apenas ordena."
      },
      {
        "text": "append",
        "correct": false,
        "feedback": "Incorreto! append adiciona um item."
      }
    ],
    "pythonExplanation": "Em Python, filter(funcao_booleana, colecao) extrai os elementos que satisfazem o predicado.",
    "title": "Fase 55 (Desafio): Funções de Alta Ordem - Filtragem (FILTER)",
    "concept": "Seleção por Predicado Booleano",
    "filename": "filtragem_segura.algo",
    "scenario": "Dada uma lista de usuários, selecione apenas aqueles cujo status seja 'ATIVO':",
    "codeTemplate": "variavel ativos = usuarios.<span class=\"code-gap\">______</span>(u => u.status == \"ATIVO\");",
    "options": [
      {
        "text": "filtrar / filter",
        "correct": true,
        "feedback": "Correto! 'filter' executa uma função predicada para cada elemento, mantendo no resultado apenas onde retornou 'true'."
      },
      {
        "text": "mapear / map",
        "correct": false,
        "feedback": "Incorreto! 'map' transformaria os itens em uma lista de booleanos [true, false, true...], não na lista dos usuários."
      },
      {
        "text": "ordenar / sort",
        "correct": false,
        "feedback": "Incorreto! 'sort' apenas reorganiza a ordem dos elementos existentes."
      },
      {
        "text": "empilhar",
        "correct": false,
        "feedback": "Incorreto! 'empilhar' é uma operação de pilha."
      }
    ],
    "explanation": "'Filter' é a operação padrão para extrair subconjuntos de registros sem loops manuais imperativos."
  },
  {
    "id": 56,
    "pythonFilename": "acumulador_reduce.py",
    "pythonCodeTemplate": "from functools import reduce\nprecos = [100, 250, 50]\ntotal = <span class=\"code-gap\">______</span>(lambda acc, x: acc + x, precos, 0) # 400",
    "pythonOptions": [
      {
        "text": "reduce",
        "correct": true,
        "feedback": "Sensacional! A função reduce() do módulo functools em Python agrega todos os itens a um valor acumulado."
      },
      {
        "text": "slice",
        "correct": false,
        "feedback": "Incorreto! slice fatoria listas."
      },
      {
        "text": "join",
        "correct": false,
        "feedback": "Incorreto! join junta strings."
      },
      {
        "text": "reverse",
        "correct": false,
        "feedback": "Incorreto! reverse inverte posições."
      }
    ],
    "pythonExplanation": "Em Python, reduce(funcao, iteravel, inicial) está disponível no módulo padrão functools.",
    "title": "Fase 56 (Desafio): Funções de Alta Ordem - Redução (REDUCE)",
    "concept": "Agregação Acumulativa de Vetores",
    "filename": "acumulador_reduce.algo",
    "scenario": "Para somar todos os valores de uma lista em um único valor total começando de 0, usamos o método funcional:",
    "codeTemplate": "variavel precos = [100, 250, 50];\nvariavel total = precos.<span class=\"code-gap\">______</span>((acumulador, item) => acumulador + item, 0); // 400",
    "options": [
      {
        "text": "reduzir / reduce",
        "correct": true,
        "feedback": "Sensacional! 'reduce' itera por toda a coleção passando o valor acumulado anterior adiante até obter um único resultado."
      },
      {
        "text": "fatiar / slice",
        "correct": false,
        "feedback": "Incorreto! 'slice' extrai um pedaço do vetor."
      },
      {
        "text": "juntar / join",
        "correct": false,
        "feedback": "Incorreto! 'join' junta strings separadas por vírgula."
      },
      {
        "text": "inverter",
        "correct": false,
        "feedback": "Incorreto! Inverter apenas muda as posições."
      }
    ],
    "explanation": "O 'reduce' é extremamente poderoso para calcular totais, médias, agrupar objetos ou construir árvores a partir de listas."
  },
  {
    "id": 57,
    "pythonFilename": "tabela_hash_colisao.py",
    "pythonCodeTemplate": "# hash(\"chave_A\") % 10 == 3\n# hash(\"chave_B\") % 10 == 3 (Colisão!)\ntabela_hash[3] = <span class=\"code-gap\">___________________________________</span>",
    "pythonOptions": [
      {
        "text": "Uma lista contendo ambos os pares chave-valor",
        "correct": true,
        "feedback": "Perfeito! No encadeamento em Python, o balde tabela_hash[3] armazena uma lista de tuplas [(chave, valor)]."
      },
      {
        "text": "Sobrescreve a chave antiga",
        "correct": false,
        "feedback": "Incorreto! Perderia dados da chave anterior."
      },
      {
        "text": "Trava o sistema",
        "correct": false,
        "feedback": "Incorreto! Colisões são tratadas normalmente."
      },
      {
        "text": "Limpa a memória",
        "correct": false,
        "feedback": "Incorreto! Destruiria a tabela."
      }
    ],
    "pythonExplanation": "Encadeamento separado armazena uma lista de pares [(k1, v1), (k2, v2)] para resolver colisões em tabelas Hash.",
    "title": "Fase 57 (Desafio): Resolução de Colisões em Tabela Hash",
    "concept": "Tratamento de Chaves Distintas com Mesmo Hash",
    "filename": "tabela_hash_colisao.algo",
    "scenario": "Quando duas chaves diferentes ('chave_A' e 'chave_B') produzem exatamente o mesmo índice na Tabela Hash, como o encadeamento (*Chaining*) resolve o conflito?",
    "codeTemplate": "// Hash(\"chave_A\") % 10 == 3\n// Hash(\"chave_B\") % 10 == 3 (Colisão!)\ntabelaHash[3] = <span class=\"code-gap\">___________________________________</span>;",
    "options": [
      {
        "text": "Uma Lista Encadeada contendo ambos os pares chave-valor",
        "correct": true,
        "feedback": "Perfeito! No encadeamento separado, cada posição da tabela armazena uma lista com todos os elementos que colidiram naquele balde (bucket)."
      },
      {
        "text": "Sobrescreve e apaga a chave antiga",
        "correct": false,
        "feedback": "Incorreto! Sobrescrever causaria perda irreparável de dados da chave anterior."
      },
      {
        "text": "Trava o sistema operacional",
        "correct": false,
        "feedback": "Incorreto! Colisões são eventos previstos e normais no design de tabelas hash."
      },
      {
        "text": "Limpa toda a memória da tabela",
        "correct": false,
        "feedback": "Incorreto! Destruiria todo o banco de dados."
      }
    ],
    "explanation": "Encadeamento separado (Separate Chaining) e Endereçamento Aberto são as duas técnicas clássicas de tratamento de colisões em Hash Tables."
  },
  {
    "id": 58,
    "pythonFilename": "encontrar_impar_xor.py",
    "pythonCodeTemplate": "# lista = [5, 9, 3, 9, 5]\nunico = 0\nfor x in lista:\n    unico = unico ^ x\n# Resultado: unico == 3! Pois X ^ X = <span class=\"code-gap\">_</span> e X ^ 0 = <span class=\"code-gap\">_</span>",
    "pythonOptions": [
      {
        "text": "0 e X",
        "correct": true,
        "feedback": "Brilhante! Em Python, X ^ X = 0 e X ^ 0 = X, cancelando todos os pares de números repetidos!"
      },
      {
        "text": "1 e 0",
        "correct": false,
        "feedback": "Incorreto! X ^ X zera os bits."
      },
      {
        "text": "X e 0",
        "correct": false,
        "feedback": "Incorreto! Ordem inversa."
      },
      {
        "text": "Infinito e 1",
        "correct": false,
        "feedback": "Incorreto! Álgebra booleana discreta."
      }
    ],
    "pythonExplanation": "O operador '^' (XOR) em Python zera bits idênticos, isolando o número ímpar que não possui par.",
    "title": "Fase 58 (Desafio): Propriedade Matemática do XOR Bitwise (^)",
    "concept": "Localização de Elemento Único em O(N) Tempo e O(1) Espaço",
    "filename": "encontrar_impar_xor.algo",
    "scenario": "Em uma lista onde todos os números aparecem em PARES idênticos, exceto um número único isolado, por que aplicar XOR (^) acumulado em todos os itens revela o número solitário?",
    "codeTemplate": "// lista = [5, 9, 3, 9, 5]\nvariavel unico = 0;\npara (i = 0; i < lista.tamanho; i++) {\n    unico = unico ^ lista[i];\n}\n// Resultado: unico == 3! Pois X ^ X = <span class=\"code-gap\">_</span> e X ^ 0 = <span class=\"code-gap\">_</span>",
    "options": [
      {
        "text": "0 e X",
        "correct": true,
        "feedback": "Brilhante! Qualquer número XOR ele mesmo é 0 (X ^ X = 0), e qualquer número XOR 0 é ele próprio (X ^ 0 = X), anulando todos os pares!"
      },
      {
        "text": "1 e 0",
        "correct": false,
        "feedback": "Incorreto! X ^ X zera os bits correspondentes."
      },
      {
        "text": "X e 0",
        "correct": false,
        "feedback": "Incorreto! A ordem correta das propriedades de paridade é inversa."
      },
      {
        "text": "Infinito e 1",
        "correct": false,
        "feedback": "Incorreto! São operações lógicas discretas em álgebra booleana."
      }
    ],
    "explanation": "As propriedades de comutatividade e auto-anulação do XOR (A ^ A = 0) tornam-no um truque algorítmico lendário para otimização de espaço."
  },
  {
    "id": 59,
    "pythonFilename": "memoizacao_cache.py",
    "pythonCodeTemplate": "def fibo_memo(n, cache):\n    if n <= 1: return n\n    if <span class=\"code-gap\">_________</span>:\n        return cache[n] # Reutiliza resultado de O(1)\n    cache[n] = fibo_memo(n - 1, cache) + fibo_memo(n - 2, cache)\n    return cache[n]",
    "pythonOptions": [
      {
        "text": "n in cache",
        "correct": true,
        "feedback": "Excelente! Em Python, 'n in cache' verifica instantaneamente se o subproblema já foi calculado e salvo no dicionário!"
      },
      {
        "text": "n == 100",
        "correct": false,
        "feedback": "Incorreto! Caso isolado."
      },
      {
        "text": "len(cache) == 0",
        "correct": false,
        "feedback": "Incorreto! Se estiver vazio não tem o resultado."
      },
      {
        "text": "n < 0",
        "correct": false,
        "feedback": "Incorreto! Tratado no caso base n <= 1."
      }
    ],
    "pythonExplanation": "Em Python, 'n in cache' testa a presença de chaves em dicionários de forma eficiente em tempo O(1).",
    "title": "Fase 59 (Desafio): Programação Dinâmica & Memoização",
    "concept": "Armazenamento de Resoluções de Subproblemas Sobrepostos",
    "filename": "memoizacao_cache.algo",
    "scenario": "Para transformar a complexidade exponencial O(2^N) de Fibonacci em tempo linear O(N), consultamos uma tabela de cache antes de calcular:",
    "codeTemplate": "funcao fiboMemo(n, cache) {\n    se (n <= 1) retorne n;\n    se (<span class=\"code-gap\">___________________</span>) {\n        retorne cache[n]; // Reutiliza resultado já calculado instantaneamente!\n    }\n    cache[n] = fiboMemo(n - 1, cache) + fiboMemo(n - 2, cache);\n    retorne cache[n];\n}",
    "options": [
      {
        "text": "cache[n] != indefinido (ou cache contém n)",
        "correct": true,
        "feedback": "Excelente! A memoização armazena as respostas intermediárias na memória cache, evitando recalcular os mesmos ramos recursivos repetidas vezes."
      },
      {
        "text": "n == 100",
        "correct": false,
        "feedback": "Incorreto! 100 é um caso isolado e não serviria para nenhum outro valor de 'n'."
      },
      {
        "text": "cache.tamanho == 0",
        "correct": false,
        "feedback": "Incorreto! Se o cache estiver vazio, não há valor para retornar."
      },
      {
        "text": "n < 0",
        "correct": false,
        "feedback": "Incorreto! A condição de parada base já trata n <= 1."
      }
    ],
    "explanation": "Programação Dinâmica com Memoização (Top-Down) elimina cálculos redundantes, reduzindo o tempo de execução de dias para milissegundos."
  },
  {
    "id": 60,
    "pythonFilename": "ai_core_master_key.py",
    "pythonCodeTemplate": "def cifrar_caractere(indice_letra, chave):\n    return (indice_letra + chave) <span class=\"code-gap\">_</span> 26",
    "pythonOptions": [
      {
        "text": "% (módulo)",
        "correct": true,
        "feedback": "MESTRE DO ALGORITMO! Em Python, o operador '%' realiza a rotação cíclica exata no alfabeto de 26 letras!"
      },
      {
        "text": "/",
        "correct": false,
        "feedback": "Incorreto! '/' daria número com vírgula float."
      },
      {
        "text": "*",
        "correct": false,
        "feedback": "Incorreto! Multiplicar daria números astronômicos."
      },
      {
        "text": "-",
        "correct": false,
        "feedback": "Incorreto! Subtrair não faria a rotação circular."
      }
    ],
    "pythonExplanation": "O operador % 26 garante a rotação modular do alfabeto (Cifra de César) em Python.",
    "title": "Fase 60 (Desafio Épico Final): Decodificação Criptográfica",
    "concept": "Cálculo Modular Cíclico para Rotação de Caracteres (Cifra de César)",
    "filename": "ai_core_master_key.algo",
    "scenario": "Para restaurar a chave mestra definitiva do AI Core com rotação de alfabeto (A-Z = 26 letras), aplicamos o operador módulo para garantir o retorno ao início:",
    "codeTemplate": "// novoIndice = (indiceAtual + deslocamento) % 26\nfuncao cifrarCaractere(indiceLetra, chave) {\n    retorne (indiceLetra + chave) <span class=\"code-gap\">____</span> 26;\n}",
    "options": [
      {
        "text": "% (módulo)",
        "correct": true,
        "feedback": "MESTRE DO ALGORITMO! O operador '%' faz com que qualquer número maior ou igual a 26 dê a volta cíclica correta (ex: 27 % 26 = 1 = 'B')!"
      },
      {
        "text": "/",
        "correct": false,
        "feedback": "Incorreto! '/' daria o quociente fracionário em vez do índice inteiro da letra."
      },
      {
        "text": "*",
        "correct": false,
        "feedback": "Incorreto! Multiplicar geraria valores astronômicos fora da tabela de caracteres."
      },
      {
        "text": "-",
        "correct": false,
        "feedback": "Incorreto! Subtrair não faria a rotação circular dos limites da base 26."
      }
    ],
    "explanation": "A aritmética modular (mod 26) é a base matemática da criptografia clássica, relógios de ponteiro e sistemas circulares em ciência da computação!"
  }
];

  if (typeof window !== 'undefined') {
    window.STAGES = STAGES;
  }
  if (typeof global !== 'undefined') {
    global.STAGES = STAGES;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = STAGES;
  }
})(typeof self !== 'undefined' ? self : this);
