// costanti per comporre l'URL dell'api
/*
const apiKey = "ZHG9vuhefNwTRLLJmqmS1iVsoIT7TaJdukzvfMKrrlsNROuzSuqUEaKI";
const apiUrl = "https://api.pexels.com/v1/";
const query = "cats";
const url = apiUrl + "search?query=" + query;*/

// prendo il riferimento al bottone load Images
const loadImages = document.getElementById("load-images");

// prendo il riferimento al bottone load secondary images
const loadSecondaryimages = document.getElementById("load-secondary-image");

const generateImages = function (arrayImages) {
  const row = document.getElementById("row-card");
  console.log(row);
  arrayImages.forEach((image) => {
    console.log(image);
    const newCol = document.createElement("div");
    newCol.classList.add("col");
    newCol.innerHTML = `
              <div class="card mb-4 shadow-sm">
                <img
                  src="${image.src.medium}"
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
                      >
                        Edit
                      </button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            `;
    row.appendChild(newCol);
  });
};
const getCats = function () {
  fetch(url, {
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

      loadImages.addEventListener("click", function () {
        generateImages(arr.photos);
      });
    })
    .catch((err) => {
      console.log("ERRORE", err);
    });
};

getCats();
