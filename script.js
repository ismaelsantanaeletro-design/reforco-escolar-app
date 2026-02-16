const perguntas = {

  "1ano": {

    matematica: [

      {
        pergunta: "Quanto é 1 + 1?",
        opcoes: ["1", "2", "3"],
        correta: "2"
      },

      {
        pergunta: "Quanto é 2 + 2?",
        opcoes: ["3", "4", "5"],
        correta: "4"
      }

    ],

    portugues: [

      {
        pergunta: "Qual é a primeira letra do alfabeto?",
        opcoes: ["A", "B", "C"],
        correta: "A"
      },

      {
        pergunta: "Qual é o plural de casa?",
        opcoes: ["casas", "casos", "casa"],
        correta: "casas"
      }

    ],

    ciencias: [

      {
        pergunta: "O sol é uma?",
        opcoes: ["estrela", "planeta", "lua"],
        correta: "estrela"
      },

      {
        pergunta: "Precisamos de qual para respirar?",
        opcoes: ["oxigênio", "água", "terra"],
        correta: "oxigênio"
      }

    ],

    historia: [

      {
        pergunta: "Quem descobriu o Brasil?",
        opcoes: ["Pedro Álvares Cabral", "Dom Pedro", "Tiradentes"],
        correta: "Pedro Álvares Cabral"
      },

      {
        pergunta: "O Brasil fica em qual continente?",
        opcoes: ["América", "Europa", "Ásia"],
        correta: "América"
      }

    ],

    geografia: [

      {
        pergunta: "Onde moramos?",
        opcoes: ["Brasil", "EUA", "Japão"],
        correta: "Brasil"
      },

      {
        pergunta: "Qual é a capital do Brasil?",
        opcoes: ["Brasília", "Rio", "São Paulo"],
        correta: "Brasília"
      }

    ]

  }
    ],

    portugues: [
      {
        pergunta: "Qual é a primeira letra do alfabeto?",
        opcoes: ["A", "B", "C"],
        correta: "A"
      }
    ]
  },

  "2ano": {

    matematica: [
      {
        pergunta: "Quanto é 5 + 3?",
        opcoes: ["6", "7", "8"],
        correta: "8"
      }
    ],

    portugues: [
      {
        pergunta: "Plural de flor é?",
        opcoes: ["flores", "floris", "flor"],
        correta: "flores"
      }
    ]
  }

};

let anoAtual = "";
let materiaAtual = "";
let atual = 0;
let pontos = 0;
function escolherAno(ano) {

  anoAtual = ano;

  let html = "<h3>Escolha a matéria:</h3>";

  const materias = perguntas[ano];

  for (let materia in materias) {

    html += `
      <button onclick="start('${materia}')">
        ${materia.toUpperCase()}
      </button>
    `;
  }

  document.getElementById("materias").innerHTML = html;
  document.getElementById("quiz").innerHTML = "";
}
