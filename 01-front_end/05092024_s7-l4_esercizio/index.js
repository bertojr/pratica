// costanti per comporre l'URL dell'api

const apiKey = "ZHG9vuhefNwTRLLJmqmS1iVsoIT7TaJdukzvfMKrrlsNROuzSuqUEaKI";
const apiUrl = "https://api.pexels.com/v1/";
//let query;
//const url = apiUrl + "search?query=" + query;

// prendo il riferimento al bottone load Images
const loadImages = document.getElementById("load-images");

// prendo il riferimento al bottone load secondary images
const loadSecondaryimages = document.getElementById("load-secondary-images");

// prenod il riferimento al bottone search
const search = document.getElementById("btn-search");

const getImagesApi = function (query) {
  fetch(apiUrl + "search?query=" + query, {
    headers: {
      Authorization: apiKey,
    },
  })
    .then((response) => {
      if (response.ok) {
        console.log("ESITO POSITIVO");
        return response.json();
      } else {
        throw new Error("Il server non è stato raggiunto");
      }
    })
    .then((arr) => {
      console.log(arr.photos);
      generateImages(arr.photos);
    })
    .catch((err) => {
      console.log("ERRORE", err);
    });
};

const generateImages = function (arrayImages) {
  const row = document.getElementById("row-card");

  row.innerHTML = "";
  console.log(row);
  arrayImages.forEach((image) => {
    console.log(image);
    const newCol = document.createElement("div");
    newCol.classList.add("col");
    newCol.innerHTML = `
                <div class="card mb-4 shadow-sm">
                  <img
                    src="${image.src.original}"
                    class="bd-placeholder-img card-img-top"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Lorem Ipsum</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </p>
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <div class="btn-group">
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                          onclick="removeImages(this)"
                        >
                          Hide
                        </button>
                      </div>
                      <small class="text-muted">${image.id}</small>
                    </div>
                  </div>
                </div>
              `;
    row.appendChild(newCol);
  });
};

const removeImages = function (btn) {
  const card = btn.closest(".col");
  console.log(card);
  card.classList.add("d-none");
};

getImagesApi("stadium");
loadImages.addEventListener("click", function () {
  getImagesApi("ball");
});
loadSecondaryimages.addEventListener("click", function () {
  getImagesApi("spider-man");
});
search.addEventListener("click", function () {
  const searchInput = document.getElementById("search-custom");
  getImagesApi(searchInput.value);
});
