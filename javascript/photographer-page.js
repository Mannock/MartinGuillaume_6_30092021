// import { dropdownFunction } from "./dropdown.js";
import { Photographer } from "./objects/photographer.js";
import { Lightbox } from "./objects/lightbox.js";
import { Image } from "./objects/image.js";
import { MediaFactory } from "./objects/mediaFactory.js";
import { AllMedias } from "./objects/allMedia.js";
const photographerID = new URLSearchParams(window.location.search).get("id");
// dropdownFunction();

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
      // console.log(allMedias.all);
      // console.log(media.likes);
    });
    console.log(allMedias.all);

    let lightbox = new Lightbox(allMedias.all);
    console.log(lightbox.medias);
    console.log(lightbox);

    allMedias.sortingPopularity();
    allMedias.sortingDate();
    allMedias.sortingName();
    allMedias.display(allMedias.all);

    allMedias.addMediaLikes();
    allMedias.getAllLikes();
    photographer.displayProfile();

    let x = document.querySelectorAll(".work-display__card__image");
    x.forEach((media, index) => {
      media.addEventListener("click", (e) => {
        console.log(index);
        console.log(media);
        lightbox.handleIndex(index);
      });
    });

    console.log(x);
    // let lightboxClose = document.getElementById("lightbox__close");
    // lightboxClose.addEventListener("click", (e) => {
    //   document.getElementsByClassName("lightbox")[0].style.display = "none";
    // });
  });

// const dropdown = document.getElementById("dropbtn");
// console.log(dropdown);
// dropdown.addEventListener("click", () => {
//   console.log("hellow");
//   document.getElementById("myDropdown").classList.toggle("show");
// });

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
