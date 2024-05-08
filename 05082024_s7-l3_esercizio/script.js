const getLibri = function () {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      if (response.ok) {
        console.log("Arrivato");
        return response.json();
      } else {
        throw new Error("La risposta del server è stata negativa");
      }
    })
    .then((arrayLibri) => {
      console.log(arrayLibri);
      generaLibriHtml(arrayLibri);
    })
    .catch((err) => {
      console.log(err);
    });
};

const generaLibriHtml = function (libri) {
  const rigaLibri = document.getElementsByClassName("row")[1];
  console.log(rigaLibri);
  libri.forEach((libro) => {
    const newCol = document.createElement("div");
    newCol.classList.add("col", "mb-4");
    newCol.innerHTML = `
        <div class="card h-100 ">
            <img src="${libro.img}" class="card-img-top" alt="Immagine libro">
            <div class="card-body">
                <h5 class="card-title">${libro.title}</h5>
                <h6 class="card-text text-end py-3">Prezzo: ${libro.price} €</h6>
                <div class="btn-container d-flex justify-content-between">
                    <button class="btn btn-danger" onclick="rimuoviLibriHtml(this)">SCARTA</button>
                    <button class="btn btn-success" onclick="aggiungiAlCarrello(this)">Aggiungi al carrello</button>
                </div>
            </div>
        </div>
        `;
    rigaLibri.appendChild(newCol);
  });
};

const rimuoviLibriHtml = function (elemento) {
  const libroDaRimuovere = elemento.closest(".col");
  console.log(libroDaRimuovere);
  libroDaRimuovere.remove();
};

const aggiungiAlCarrello = function (elemento) {
  const card = elemento.closest(".card");
  console.log(card);
  const title = card.getElementsByClassName("card-title")[0].innerText;
  console.log(title);

  const ul = document.getElementById("carrello");
  console.log(ul);
  const li = document.createElement("li");
  li.classList.add("list-group-item");
  li.innerHTML = `<p>${title}</p><button class="btn btn-danger" onclick="rimuoviDalCarrello(this)">Rimuovi dal carrello</button>`;
  ul.appendChild(li);
};

const rimuoviDalCarrello = function (elemento) {
  const libroNelCarrello = elemento.closest(".list-group-item");
  libroNelCarrello.remove();
};

getLibri();
