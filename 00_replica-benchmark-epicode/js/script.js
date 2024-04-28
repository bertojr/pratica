/* ARRAY DELLE DOMANDE */
const questions = [
  {
    category: "Dragon Ball",
    type: "multiple",
    difficulty: "easy",
    question: "Quanti figli ha Goku?",
    correct_answer: "Due",
    incorrect_answers: [
      "Uno",
      "Tre",
      "Nessuno",
    ],
  },
  {
    category: "Dragon Ball",
    type: "multiple",
    difficulty: "easy",
    question: "Come si chiama il primo nemico di Dragon Ball Z?",
    correct_answer: "Radish",
    incorrect_answers: [
      "Piccolo",
      "Freezer",
      "Nappa",
    ],
  },
  {
    category: "Dragon Ball",
    type: "multiple",
    difficulty: "easy",
    question: "Come si chiama il vero padre di Goku?",
    correct_answer: "Bardack",
    incorrect_answers: [
      "Broly",
      "Paragas",
      "Vegeta",
    ],
  },
  {
    category: "Dragon Ball",
    type: "multiple",
    difficulty: "easy",
    question: "Qual'è il vero nome di Goku?",
    correct_answer: "Kakaroth",
    incorrect_answers: [
      "Beats",
      "Serrori",
      "Son",
    ],
  },
  {
    category: "Dragon Ball",
    type: "multiple",
    difficulty: "easy",
    question: "Quale incredibile tecnica impara Goku presso Re Kaioh?",
    correct_answer: "Kaioken",
    incorrect_answers: [
      "Kamehameha",
      "Pugno del drago",
      "Immagine residua",
    ],
  },
  {
    category: "Dragon Ball",
    type: "multiple",
    difficulty: "easy",
    question: "Chi fu il primo ad uccidere Krilin?",
    correct_answer: "Tamburello",
    incorrect_answers: [
      "Grande Mago Piccolo",
      "Kami",
      "Freezer",
    ],
  },
  {
    category: "Dragon Ball",
    type: "multiple",
    difficulty: "easy",
    question: "A quanto ammonta il livello di Goku durante lo scontro con Nappa?",
    correct_answer: "8000",
    incorrect_answers: [
      "9000",
      "4000",
      "5000",
    ],
  },
  {
    category: "Dragon Ball",
    type: "multiple",
    difficulty: "easy",
    question: "Quale personaggio è in grado di scambiare il suo corpo con quello dell'avversario?",
    correct_answer: "Gyniu",
    incorrect_answers: [
      "Freezer",
      "Cell",
      "Jeeth",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Quanti sono i membri della squadra Gyniu?",
    correct_answer: "Cinque",
    incorrect_answers: ["Tre", "Quattro", "Sei"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Come si chiamano i due tirapiedi al comando dell'esercio di Freezer?",
    correct_answer: "Zarbon e Dodoria",
    incorrect_answers: ["Gyniu e Jeeth", "Tagoma e Shizami", "Appule e Raspberry"],
  },
  {
    category: "Dragon Ball",
    type: "multiple",
    difficulty: "easy",
    question: "Chi è il primo maestro di goku",
    correct_answer: "Nonno Gohan",
    incorrect_answers: ["Whish", "Re Kaioh", "Maestro Muten/Genio"],
  },
  {
    category: "Dragon Ball",
    type: "multiple",
    difficulty: "easy",
    question:
      "Chi è la prima persona, all'infuori di suo nonno, che incontra Goku",
    correct_answer: "Bulma",
    incorrect_answers: ["Krilin", "Maestro Muten/Genio", "Chichi"],
  },
  {
    category: "Dragon Ball",
    type: "multiple",
    difficulty: "easy",
    question: "Chi è Radish per Goku",
    correct_answer: "Il fratello",
    incorrect_answers: ["Il cugino", "Il padre", "Non è nessuno per lui"],
  },
  {
    category: "Dragon Ball",
    type: "multiple",
    difficulty: "easy",
    question: "Qual'è la vera razza di Goku",
    correct_answer: "Sayan",
    incorrect_answers: ["Namecciano", "Terrestre", "Yardrat"],
  },
];

var indiceDomandaCorrente = 0;
var domandeCorrette = 0;
var intervalId;
var mainCentral = document.querySelector(".main_central");
window.onload = function () {
  mostraDomanda(indiceDomandaCorrente);
  mostraRisultati();
};

// funzione per il timer della domanda
function timer() {
  let i, secondiRimanenti;

  i = 60;
  if (window.location.href.includes("exam_02_test.html")) {
    secondiRimanenti = document.getElementById("secondi_rimanenti");
    
    intervalId = setInterval(function () {
      if (i >= 0) {
        secondiRimanenti.innerHTML = i;
      } else {

        if (indiceDomandaCorrente === questions.length - 1) {
          console.log("Quiz terminato");
          window.location.href = "./exam_03_results.html";
          return;
        }
        indiceDomandaCorrente++;
        mostraDomanda(indiceDomandaCorrente);
      } 
      i--;
    }, 1000);
  }
}

// funzione per mostrare le domande nel box
function mostraDomanda() {
  let containerRisposte, risposteRandom;

  risposteRandom = shuffleArray();
  mainCentral.innerHTML = `
    <h1>${questions[indiceDomandaCorrente].question}</h1>
    <div class="container_risposte"></div>
    `;
  containerRisposte = mainCentral.querySelector(".container_risposte");

  risposteRandom.forEach((risposta) => {
    containerRisposte.innerHTML += `
      <button class="btn_risposta">${risposta}</button>
      `;
  });

  clearInterval(intervalId);
  domandaSuccessiva();
  timer();
}

// funzione per mostrare la domanda successiva quando si clicca una risposta
function domandaSuccessiva() {
  var btnRisposta;

  btnRisposta = mainCentral.querySelectorAll(".btn_risposta");

  btnRisposta.forEach((btn) => {
    btn.addEventListener("click", function () {
      indiceDomandaCorrente++;
      calcolaPunteggio(btn);
      if (indiceDomandaCorrente < questions.length) {
        mostraDomanda(indiceDomandaCorrente);
      } else {
        console.log("Hai finito il quiz");
        window.location.href = "./exam_03_results.html";
      }
    });
  });
}

// funzione per ordinare casualmente le risposte all'interno dell'array
function shuffleArray() {
  let risposte;

  risposte = [
    ...questions[indiceDomandaCorrente].incorrect_answers,
    questions[indiceDomandaCorrente].correct_answer,
  ];

  // funzion eper generare un numero casuale compreso tra -0.5 e 0.5
  function indiceRandom() {
    return Math.random() - 0.5;
  }
  return risposte.sort(indiceRandom);
}

// funzione per il conteggio delle domande corrette e domande abgliate
function calcolaPunteggio(clickUtente) {
  let domandeSbagliate, domandeSbagliatePercentuale;
  let domandeCorrettePercentuale;
  console.log("Hai cliccato " + clickUtente.innerText);
  console.log(
    "La risposta giusta è: " +
      questions[indiceDomandaCorrente - 1].correct_answer
  );

  if (
    clickUtente.innerText ===
    questions[indiceDomandaCorrente - 1].correct_answer
  ) {
    domandeCorrette++;
    console.log("correct");
  } else {
    console.log("incorrect");
  }

  // salvattaggio domande corrette e domande sbgliate con localstorage
  domandeCorrettePercentuale = (domandeCorrette / questions.length) * 100;
  localStorage.setItem("domandeCorrette", domandeCorrette);
  localStorage.setItem(
    "domandeCorrettePercentuale",
    domandeCorrettePercentuale.toFixed(1)
  );
  domandeSbagliate = questions.length - domandeCorrette;
  domandeSbagliatePercentuale = (domandeSbagliate / questions.length) * 100;
  localStorage.setItem("domandeSbagliate", domandeSbagliate);
  localStorage.setItem(
    "domandeSbagliatePercentuale",
    domandeSbagliatePercentuale.toFixed(1)
  );
  console.log(domandeCorrette);
}

// funzione per mostrare le domande sbagliate e corrette all'interno della pagina
function mostraRisultati() {
  var domandeCorrette, domandeSbagliate;
  domandeCorrette = localStorage.getItem("domandeCorrette");
  domandeSbagliate = localStorage.getItem("domandeSbagliate");
  domandeCorrettePercentuale = localStorage.getItem(
    "domandeCorrettePercentuale"
  );
  domandeSbagliatePercentuale = localStorage.getItem(
    "domandeSbagliatePercentuale"
  );
  if (window.location.href.includes("exam_03_results.html")) {
    mainCentral.innerHTML = "";
    mainCentral.innerHTML = `
      <h1>Percentuale domande corrette: ${domandeCorrettePercentuale}%<h1>
      <h3>${domandeCorrette}/${questions.length}</h3>
      <h1>Domande sbagliate: ${domandeSbagliatePercentuale}%<h1>
      <h3>${domandeSbagliate}/${questions.length}</h3>
      `;
    console.log("Domande corrette: " + domandeCorrette);
    console.log("Domande sbagliate: " + domandeSbagliate);
  }
}


google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
   // Recupera i dati sulle domande corrette e sbagliate
   var domandeCorrette = localStorage.getItem("domandeCorrette");
   var domandeSbagliate = localStorage.getItem("domandeSbagliate");

   // Crea un array con i dati
   var data = google.visualization.arrayToDataTable([
       ['Task', 'Quantity'],
       ['Domande corrette', parseInt(domandeCorrette)], // Converti in numero intero
       ['Domande sbagliate', parseInt(domandeSbagliate)], // Converti in numero intero
   ]);

   var options = {
    width: 700,
    height: 700,
    backgroundColor: "none",
    legend: "none",
    pieSliceText: "none",
    pieHole: 0.7,
    colors: ["green", "red"]
   }

   var chart = new google.visualization.PieChart(document.getElementById('grafico'));

   chart.draw(data, options);
}
