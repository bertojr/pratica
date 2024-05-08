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
  const rigaLibri = document.getElementsByClassName("row")[0];
  console.log(rigaLibri);
  libri.forEach((libro) => {
    const newCol = document.createElement("div");
    newCol.classList.add("col", "mb-4");
    newCol.innerHTML = `
        <div class="card">
            <img src="${libro.img}" class="card-img-top" alt="${libro.title}">
            <div class="card-body">
                <h5 class="card-title">${libro.title}</h5>
                <h6 class="card-text text-end py-3">Prezzo: ${libro.price} €</h6>
                <a href="#" class="btn btn-danger" onclick="rimuoviLibriHtml(this)">SCARTA</a>
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

getLibri();
