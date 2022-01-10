import { Photographer } from "./objects/photographer.js";
import { fetchPhotographer } from "./data.js";

let photographers = [];

export const photographerDisplay = async () => {
  const photographe = await fetchPhotographer();
  photographers = photographe.photographers.map((data) => {
    return new Photographer(
      data.name,
      data.city,
      data.country,
      data.tagline,
      data.price,
      data.tags,
      data.id
    );
  });
  affichage(photographers);
  allTags();
  tagsListener();
};

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
};

let filterArray = [];

function tagsListener() {
  const tags = document.querySelectorAll(".tags");
  tags.forEach((e) =>
    e.addEventListener("click", () => {
      e.classList.toggle("active");
      if (
        e.classList.contains("active") &&
        !filterArray.includes(e.classList[1])
      ) {
        filterArray.push(e.classList[1]);
      } else {
        const index = filterArray.findIndex((x) => x === e.classList[1]);
        filterArray.splice(index, 1);
      }
      onlyTagged();
    })
  );
}

const onlyTagged = () => {
  const newArray = photographers.filter((p) => p.hasTags(filterArray));
  // console.log(newArray);
  if (newArray == 0) {
    affichage(photographers);
  } else {
    affichage(newArray);
  }
};

photographerDisplay();
