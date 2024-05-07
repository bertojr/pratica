const salvaInLocalStorage = function () {
  const valoreInputField = inputField.value;
  console.log("valoreInputField", valoreInputField);
  localStorage.setItem("nome", valoreInputField);
  inputField.value = "";
  aggiornaHtml();
};
const rimuoviDaLocalStorage = function () {
  localStorage.removeItem("nome");
  aggiornaHtml();
};
const aggiornaHtml = function () {
  const nomeHtml = document.getElementsByTagName("h3")[0];
  const nomeSalvatoInLocalStorage = localStorage.getItem("nome");
  console.log("nomeHtml", nomeHtml);
  console.log(nomeSalvatoInLocalStorage);
  nomeHtml.innerHTML = nomeSalvatoInLocalStorage;
};
const contatoreSessione = function () {
  const startTime = sessionStorage.getItem("start-time");
  if (startTime === null) {
    sessionStorage.setItem("start-time", Date.now());
  }

  // Aggiorna il contatore ogni secondo
  setInterval(function () {
    // Ottieni il timestamp di inizio memorizzato
    const startTime = parseInt(sessionStorage.getItem("start-time"));
    // Ottieni il timestamp attuale
    const currentTime = Date.now();
    // Calcola la differenza di tempo in millisecondi
    const elapsedTime = currentTime - startTime;
    // Calcola il tempo trascorso in secondi
    const elapsedSeconds = Math.floor(elapsedTime / 1000);

    // Aggiorna l'HTML per visualizzare il tempo trascorso
    const contatoreElement = document.getElementsByTagName("h1")[0];
    contatoreElement.innerHTML = elapsedSeconds;
  }, 1000); // Aggiorna ogni secondo (1000 millisecondi)
};

const formTag = document.getElementsByTagName("form")[0];
console.log("formTag", formTag);
const inputField = document.getElementById("name");
console.log("inputField", inputField);
const btnSalva = document.getElementsByClassName("btn-success")[0];
console.log("btnSalva", btnSalva);
const btnRimuovi = document.getElementsByClassName("btn-danger")[0];
console.log("btnRimuovi", btnRimuovi);

formTag.addEventListener("submit", function (e) {
  e.preventDefault();
});
btnSalva.addEventListener("click", function (e) {
  salvaInLocalStorage();
});
btnRimuovi.addEventListener("click", rimuoviDaLocalStorage);

window.onload = function () {
  aggiornaHtml();
  contatoreSessione();
};
