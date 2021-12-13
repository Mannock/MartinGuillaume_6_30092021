const modal = document.querySelector(".modal"); //selects the modal
const btnCloseModal = document.querySelector(".close-modal"); //selects the button to close the modal
const btnOpenModal = document.querySelector(".open-modal"); //selects the button to show the modal
const overlay = document.querySelector(".overlay"); //selects the overlay

const toggleModal = function () {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

btnOpenModal.addEventListener("click", toggleModal);

btnCloseModal.addEventListener("click", toggleModal);

overlay.addEventListener("click", toggleModal);

let medias = [];

const fetchMedias = async () => {
  await fetch("data.json")
    .then((res) => res.json())
    .then((data) => (medias = data.media));
  console.log(medias);
};

fetchMedias();

const mediaDisplay = async () => {
  await fetchMedias();

  document.querySelector(".work-display").innerHTML = medias
    .map((media) => {
      return `<div class="work-display__card">
        <img
          class="work-display__card__image"
          src="./img/Sample Photos/Mimi/Animals_Rainbow.jpg"
          alt=""
        />
        <div class="infos-card">
          <h2>Arc-en-ciel</h2>
          <div class="counter">
            <p>12</p>
            <img src="./img/heart-icon.png" alt="heart icon" />
          </div>
        </div>
        </div>
         
            `;
    })
    .join("");
};

mediaDisplay();
