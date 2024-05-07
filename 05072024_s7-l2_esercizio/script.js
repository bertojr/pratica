const salvaInLocalStorage = function () {
  const valoreInputField = inputField.value;
  console.log("valoreInputField", valoreInputField);
  localStorage.setItem("nome", valoreInputField);
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
  i++;
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
  e.preventDefault;
  salvaInLocalStorage();
});
btnRimuovi.addEventListener("click", rimuoviDaLocalStorage);

window.onload = function () {
  aggiornaHtml();
};
