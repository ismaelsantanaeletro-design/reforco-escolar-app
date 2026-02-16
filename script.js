alert("SCRIPT FUNCIONANDO!");
// ===============================
// BANCO DE PERGUNTAS
// ===============================

const perguntas = {

  "1ano": {

    matematica: [

      {
        pergunta: "Quanto é 1 + 2?",
        opcoes: ["3", "2", "4"],
        correta: "3"
      },

      {
        pergunta: "Quanto é 4 - 1?",
        opcoes: ["2", "3", "1"],
        correta: "3"
      },

      {
        pergunta: "Quanto é 5 + 0?",
        opcoes: ["6", "5", "4"],
        correta: "5"
      },

      {
        pergunta: "Qual número vem depois do 7?",
        opcoes: ["8", "6", "9"],
        correta: "8"
      },

      {
        pergunta: "Quanto é 2 + 3?",
        opcoes: ["4", "6", "6"],
        correta: "5"
      }

    ],

    portugues: [],
    ciencias: [],
    historia: [],
    geografia: [],
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
