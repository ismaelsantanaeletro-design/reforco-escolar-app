const perguntas = {

  "1ano": {

    matematica: [
      {
        pergunta: "Quanto é 1 + 1?",
        opcoes: ["1", "2", "3"],
        correta: "2"
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
