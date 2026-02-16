alert("SCRIPT FUNCIONANDO!");
// ===============================
// BANCO DE PERGUNTAS
// ===============================

const perguntas = {

  "1ano": {

  matematica: [

    {
      pergunta: "Quanto é 1 + 1?",
      opcoes: ["2", "1", "3"],
      correta: "2"
    },

    {
      pergunta: "Quanto é 2 + 2?",
      opcoes: ["3", "4", "5"],
      correta: "4"
    },

    {
      pergunta: "Quanto é 3 + 2?",
      opcoes: ["4", "5", "6"],
      correta: "5"
    },

    {
      pergunta: "Quanto é 5 - 2?",
      opcoes: ["2", "3", "4"],
      correta: "3"
    },

    {
      pergunta: "Quanto é 4 - 1?",
      opcoes: ["2", "3", "4"],
      correta: "3"
    },

    {
      pergunta: "Qual número vem depois do 6?",
      opcoes: ["7", "5", "8"],
      correta: "7"
    },

    {
      pergunta: "Qual número vem antes do 9?",
      opcoes: ["7", "8", "10"],
      correta: "8"
    },

    {
      pergunta: "Conte: 3, 4, 5, ...?",
      opcoes: ["6", "7", "8"],
      correta: "6"
    },

    {
      pergunta: "Quanto é 2 + 3?",
      opcoes: ["4", "5", "6"],
      correta: "5"
    },

    {
      pergunta: "Quantos dedos temos em uma mão?",
      opcoes: ["5", "4", "6"],
      correta: "5"
    }

  ],

  portugues: [

    {
      pergunta: "Qual palavra está escrita corretamente?",
      opcoes: ["casa", "kaza", "cassa"],
      correta: "casa"
    },

    {
      pergunta: "Qual é uma vogal?",
      opcoes: ["A", "B", "C"],
      correta: "A"
    },

    {
      pergunta: "Qual palavra começa com B?",
      opcoes: ["Bola", "Casa", "Pato"],
      correta: "Bola"
    },

    {
      pergunta: "Qual é uma sílaba?",
      opcoes: ["PA", "BRL", "123"],
      correta: "PA"
    },

    {
      pergunta: "Qual palavra representa um animal?",
      opcoes: ["Cachorro", "Mesa", "Lápis"],
      correta: "Cachorro"
    },

    {
      pergunta: "Qual palavra é uma cor?",
      opcoes: ["Azul", "Gato", "Livro"],
      correta: "Azul"
    },

    {
      pergunta: "Complete: CA + SA = ?",
      opcoes: ["Casa", "Cama", "Capa"],
      correta: "Casa"
    },

    {
      pergunta: "Qual palavra começa com M?",
      opcoes: ["Mesa", "Bola", "Sapo"],
      correta: "Mesa"
    }

  ],

  ciencias: [

    {
      pergunta: "Qual destes é um animal?",
      opcoes: ["Cachorro", "Pedra", "Cadeira"],
      correta: "Cachorro"
    },

    {
      pergunta: "Qual parte usamos para ver?",
      opcoes: ["Olhos", "Pés", "Mãos"],
      correta: "Olhos"
    },

    {
      pergunta: "As plantas precisam de quê para viver?",
      opcoes: ["Água", "Plástico", "Areia"],
      correta: "Água"
    },

    {
      pergunta: "Qual destes é um ser vivo?",
      opcoes: ["Árvore", "Mesa", "Vidro"],
      correta: "Árvore"
    },

    {
      pergunta: "Qual animal vive na água?",
      opcoes: ["Peixe", "Cachorro", "Gato"],
      correta: "Peixe"
    }

  ],

  historia: [

    {
      pergunta: "Quem faz parte da sua família?",
      opcoes: ["Mãe", "Mesa", "Bola"],
      correta: "Mãe"
    },

    {
      pergunta: "Onde você estuda?",
      opcoes: ["Na escola", "No mercado", "Na rua"],
      correta: "Na escola"
    },

    {
      pergunta: "Quem é seu professor?",
      opcoes: ["Quem ensina", "Quem vende", "Quem conserta"],
      correta: "Quem ensina"
    },

    {
      pergunta: "O que comemoramos no aniversário?",
      opcoes: ["Nascimento", "Trabalho", "Viagem"],
      correta: "Nascimento"
    }

  ],

  geografia: [

    {
      pergunta: "Onde você mora?",
      opcoes: ["Na cidade", "No céu", "No mar"],
      correta: "Na cidade"
    },

    {
      pergunta: "Qual é o lugar onde você estuda?",
      opcoes: ["Escola", "Hospital", "Banco"],
      correta: "Escola"
    },

    {
      pergunta: "Onde compramos comida?",
      opcoes: ["Mercado", "Farmácia", "Posto"],
      correta: "Mercado"
    },

    {
      pergunta: "Onde podemos brincar?",
      opcoes: ["Parque", "Hospital", "Delegacia"],
      correta: "Parque"
    }

  ],

  ingles: []

},
  "2ano": criarPadraoAno(2),
  "3ano": criarPadraoAno(3),
  "4ano": criarPadraoAno(4),
  "5ano": criarPadraoAno(5),
  "6ano": criarPadraoAno(6),
  "7ano": criarPadraoAno(7),
  "8ano": criarPadraoAno(8),
  "9ano": criarPadraoAno(9)

};


// ===============================
// FUNÇÃO PARA CRIAR ANOS
// ===============================

function criarPadraoAno(ano) {

  return {

    matematica: [

      {
        pergunta: `Quanto é ${ano} + ${ano}?`,
        opcoes: [`${ano}`, `${ano * 2}`, `${ano * 3}`],
        correta: `${ano * 2}`
      },

      {
        pergunta: `Quanto é ${ano * 5} - ${ano}?`,
        opcoes: [`${ano * 2}`, `${ano * 4}`, `${ano * 3}`],
        correta: `${ano * 4}`
      }

    ],

    portugues: [

      {
        pergunta: "Qual palavra está correta?",
        opcoes: ["casa", "kaza", "cassa"],
        correta: "casa"
      },

      {
        pergunta: "Qual é um verbo?",
        opcoes: ["correr", "mesa", "azul"],
        correta: "correr"
      }

    ],

    ciencias: [

      {
        pergunta: "O ser humano precisa de?",
        opcoes: ["oxigênio", "fogo", "pedra"],
        correta: "oxigênio"
      },

      {
        pergunta: "Qual é um ser vivo?",
        opcoes: ["cachorro", "rocha", "água"],
        correta: "cachorro"
      }

    ],

    historia: [

      {
        pergunta: "Quem descobriu o Brasil?",
        opcoes: ["Pedro Álvares Cabral", "Dom Pedro", "Tiradentes"],
        correta: "Pedro Álvares Cabral"
      },

      {
        pergunta: "O Brasil era colônia de?",
        opcoes: ["Portugal", "Espanha", "França"],
        correta: "Portugal"
      }

    ],

    geografia: [

      {
        pergunta: "Em que país moramos?",
        opcoes: ["Brasil", "Chile", "México"],
        correta: "Brasil"
      },

      {
        pergunta: "Qual é a capital do Brasil?",
        opcoes: ["Brasília", "Rio", "São Paulo"],
        correta: "Brasília"
      }

    ],

    ingles: ano >= 6 ? [

      {
        pergunta: "Como se diz 'casa' em inglês?",
        opcoes: ["house", "car", "book"],
        correta: "house"
      },

      {
        pergunta: "Como se diz 'bom dia'?",
        opcoes: ["good morning", "good night", "goodbye"],
        correta: "good morning"
      }

    ] : []

  };

}


// ===============================
// VARIÁVEIS DO QUIZ
// ===============================

let anoAtual = "";
let materiaAtual = "";
let atual = 0;
let pontos = 0;


// ===============================
// ESCOLHER ANO
// ===============================

function escolherAno(ano) {

  anoAtual = ano;
  materiaAtual = "";
  atual = 0;
  pontos = 0;

  let html = "<h3>Escolha a matéria:</h3>";

  const materias = perguntas[ano];

  for (let materia in materias) {

    if (materias[materia].length > 0) {

      html += `
        <button onclick="start('${materia}')">
          ${materia.toUpperCase()}
        </button>
      `;

    }

  }

  document.getElementById("materias").innerHTML = html;
  document.getElementById("quiz").innerHTML = "";

}


// ===============================
// INICIAR QUIZ
// ===============================

function start(materia) {

  materiaAtual = materia;
  atual = 0;
  pontos = 0;

  mostrarPergunta();

}


// ===============================
// MOSTRAR PERGUNTA
// ===============================

function mostrarPergunta() {

  const lista = perguntas[anoAtual][materiaAtual];

  if (atual >= lista.length) {

    document.getElementById("quiz").innerHTML = `
      <h3>Fim do quiz!</h3>
      <p>Pontos: ${pontos}/${lista.length}</p>
    `;

    return;

  }

  const q = lista[atual];

  let html = `
    <h3>${q.pergunta}</h3>
  `;

  q.opcoes.forEach(opcao => {

    html += `
      <button onclick="responder('${opcao}')">
        ${opcao}
      </button><br><br>
    `;

  });

  document.getElementById("quiz").innerHTML = html;

}


// ===============================
// RESPONDER
// ===============================

function responder(opcao) {

  const q = perguntas[anoAtual][materiaAtual][atual];

  let resultado = "";

  if (opcao === q.correta) {

    pontos++;
    resultado = "✅ Resposta correta!";

  } else {

    resultado = `❌ Errado! Correto: ${q.correta}`;

  }

  document.getElementById("quiz").innerHTML += `
    <p>${resultado}</p>
    <button onclick="proxima()">Próxima</button>
  `;

}


// ===============================
// PRÓXIMA
// ===============================

function proxima() {

  atual++;
  mostrarPergunta();

}
