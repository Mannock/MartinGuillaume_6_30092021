import { Photographer } from "./objects/photographer.js";
import { Image } from "./objects/image.js";
import { MediaFactory } from "./objects/mediaFactory.js";
import { AllMedias } from "./objects/allMedia.js";
const photographerID = new URLSearchParams(window.location.search).get("id");

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
    // let photographer = new Photographer(profil); ASK

    let medias = json.media.filter(
      (media) => media.photographerId == photographerID
    );
    console.log(medias);
    let factory = new MediaFactory();
    let allMedias = new AllMedias();

    medias.forEach((element) => {
      let media = factory.create(element);
      // console.log(media);
      allMedias.add(media);
      console.log(allMedias.all);
    });
    allMedias.display(allMedias.all);

    // let media = medias.forEach((element) => {
    //   factory.create(element);
    // });
    // console.log(media);

    // console.log(pictures);
    // console.log(pictures[0].hasOwnProperty("image"));
    photographer.displayProfile();

    // medias.display(medias);
    // document.querySelector(".work-display").innerHTML = pictures
    //   .map((picture) => {
    //     return picture.render();
    //   })
    //   .join("");
  });

// import { photographerDisplay } from ".";

// const fetchMedias = async () => {
//   await fetch("data.json")
//     .then((res) => res.json())
//     .then((data) => (medias = data.media));
//   console.log(medias);
// };

// fetchMedias();

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
