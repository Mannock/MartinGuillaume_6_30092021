import { Photographer } from "./photographer.js";
import { fetchPhotographer } from "./data.js";

let photographers = [];

export const photographerDisplay = async () => {
  const photographe = await fetchPhotographer();
  //   console.log(photographe.photographers);
  photographers = photographe.photographers.map((data) => {
    return new Photographer(
      data.name,
      data.city,
      data.country,
      data.tagline,
      data.price,
      data.tags
    );
  });
  console.log(photographers);
  affichage(photographers);
  allTags();
  tagsListener();
};

photographerDisplay();

const affichage = (data) => {
  document.querySelector(".artists").innerHTML = data
    .map((photographer) => {
      return photographer.render();
    })
    .join("");
};

//Display all Tags top
const renderTags = (tag) => {
  return `
      <li class = "tags ${tag}">#${tag}</li>
      `;
};

const allTags = () => {
  let allTags = [];
  photographers.forEach((item) => {
    allTags = allTags.concat(item.tags);
  });
  let uniqueTags = [...new Set(allTags)];
  document.querySelector(".nav>ul").innerHTML = uniqueTags
    .map((tag) => {
      return renderTags(tag);
    })
    .join("");

  // console.log(uniqueTags);
  // uniqueTags.forEach((tag) => {
  //   console.log(tag);
  //   // tag.classlist.add("test");
  // });
};

let filterArray = [];

function tagsListener() {
  const tags = document.querySelectorAll(".tags");
  console.log(tags);
  tags.forEach((e) =>
    e.addEventListener("click", () => {
      e.classList.toggle("active");
      console.log(e.classList.value);
      // filterArray.push(e.classList[1]);
      // console.log(filterArray);
      if (
        e.classList.contains("active") &&
        !filterArray.includes(e.classList[1])
      ) {
        filterArray.push(e.classList[1]);
      } else {
        const index = filterArray.findIndex((x) => x === e.classList[1]);
        filterArray.splice(index, 1);
        //   filterArray = filterArray.filter((el) => el !== e.classlist[1]);
      }
      console.log(filterArray);
    })
  );
}
// let sortingArray = document.querySelectorAll("ul li");
// console.log(sortingArray);

//ajouter une class aux tags
// tag.addEventListener("click", () => {
//   console.log("click");
// });

//créer les event listeners

//trier en fonction de la sélection
