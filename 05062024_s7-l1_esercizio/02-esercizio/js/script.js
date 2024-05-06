const nome = document.getElementById("nome");
console.log("nome", nome);
const propietario = document.getElementById("propietario");
console.log("propietario", propietario);
const specie = document.getElementById("specie");
console.log("specie", specie);
const razza = document.getElementById("razza");
console.log("razza", razza);
const form = document.getElementsByTagName("form")[0];
console.log("form", form);

class Animale {
  constructor(_nome, _propietario, _specie, _razza) {
    this.nome = _nome;
    this.propietario = _propietario;
    this.specie = _specie;
    this.razza = _razza;
  }

  confrontoAnimali(nuovoAnimale) {
    return animali.some(
      (animale) => animale.propietario === nuovoAnimale.propietario
    );
  }
}
const animali = [];

const aggiornaListaHtml = function () {
  const rigaAnimali = document.getElementById("riga-animali");
  rigaAnimali.innerHTML = "";

  animali.forEach((animale) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("col");
    newDiv.innerHTML = `
        <div class="card"">
            <div class="card-body">
                <h5 class="card-title">${animale.nome}</h5>
                <h5 class="card-title">${animale.propietario}</h5>
                <h5 class="card-title">${animale.specie}</h5>
                <h5 class="card-title">${animale.razza}</h5>
            </div>
        </div>`;
    rigaAnimali.appendChild(newDiv);
  });
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const animale = new Animale(
    nome.value,
    propietario.value,
    specie.value,
    razza.value
  );

  console.log("L'animale è stato creato", animale);
  animali.push(animale);

  nome.value = "";
  propietario.value = "";
  specie.value = "";
  razza.value = "";

  aggiornaListaHtml();
  console.log(animale.confrontoAnimali(animale));
});
