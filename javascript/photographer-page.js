// const fetchPhotographer = async () => {
//   const res = await fetch("data.json");
//   return res.json();
// };

import { Photographer } from "./objects/photographer.js";

// import { photographerDisplay } from ".";

// fetchPhotographer();
const photographerID = new URLSearchParams(window.location.search).get("id");
console.log(photographerID);

// function query(key) {
//   const params = new URLSearchParams(window.location.search);
//   return params.get(key);
// }

fetch("data.json")
  .then(function (res) {
    return res.json();
  })
  .then(function (json) {
    let profil = json.photographers.filter(
      (photographe) => photographe.id == photographerID
    )[0];
    let photographer = new Photographer(
      profil.name,
      profil.city,
      profil.country,
      profil.tagline,
      profil.price,
      profil.tags,
      profil.id
    );
    console.log(photographer);
    photographer.displayProfile();
  });

// .then(function (json) {
//   let list = new MediaList();
//   let factory = new MediaFactory();
//   let medias = getMedias(json.media);
//   let profil = json.photographers.filter(
//     (photographe) => photographe.id == query("id")
//   )[0];
//   let photographer = new Photographer(profil);
// let medias = [];

// import { photographerDisplay } from ".";

// const fetchMedias = async () => {
//   await fetch("data.json")
//     .then((res) => res.json())
//     .then((data) => (medias = data.media));
//   console.log(medias);
// };

// fetchMedias();

// let query = location.search;
// console.log(query);

// const mediaDisplay = async () => {
//   await fetchMedias();

//   document.querySelector(".work-display").innerHTML = medias
//     .map((media) => {
//       return `<div class="work-display__card">
//         <img
//           class="work-display__card__image"
//           src="./img/Sample Photos/Mimi/Animals_Rainbow.jpg"
//           alt=""
//         />
//         <div class="infos-card">
//           <h2>Arc-en-ciel</h2>
//           <div class="counter">
//             <p>12</p>
//             <img src="./img/heart-icon.png" alt="heart icon" />
//           </div>
//         </div>
//         </div>

//             `;
//     })
//     .join("");
// };

// mediaDisplay();
