const perguntas = {
  matematica: [
    {
      pergunta: "Quanto é 2 + 2?",
      opcoes: ["3", "4", "5"],
      correta: "4"
    }
  ],

  portugues: [
    {
      pergunta: "Qual é o plural de pão?",
      opcoes: ["pães", "pãoes", "pãos"],
      correta: "pães"
    }
  ]
};

let atual = 0;
let materiaAtual = "";

function start(materia) {
  materiaAtual = materia;
  atual = 0;
  mostrarPergunta();
}

function mostrarPergunta() {

  const q = perguntas[materiaAtual][atual];

  let html = `
    <h2>${q.pergunta}</h2>
  `;

  q.opcoes.forEach(op => {
    html += `
      <button onclick="responder('${op}')">${op}</button><br><br>
    `;
  });

  document.getElementById("quiz").innerHTML = html;
}

function responder(resposta) {

  const q = perguntas[materiaAtual][atual];

  if (resposta === q.correta) {
    alert("✅ Resposta correta!");
  } else {
    alert("❌ Resposta errada!");
  }

  atual++;

  if (atual < perguntas[materiaAtual].length) {
    mostrarPergunta();
  } else {
    alert("🎉 Fim do quiz!");
  }
}
