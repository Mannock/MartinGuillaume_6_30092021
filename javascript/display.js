import { fetchPhotographer } from "./data.js";
import { Photographer } from "./objects/photographer.js";

let photographers = [];

//charger et afficher
export const photographerDisplay = async () => {
  const photographe = await fetchPhotographer();
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

  // séparer loading et display

  const renderTags = (tag) => {
    return `
      <li>#${tag}</li>
      `;
  };

  const allTags = () => {
    let allTags = [];
    photographers.forEach((item) => {
      allTags = allTags.concat(item.tags);
    });
    let uniqueTags = [...new Set(allTags)];
    console.log(uniqueTags);
    document.querySelector(".nav>ul").innerHTML = uniqueTags
      .map((tag) => {
        return renderTags(tag);
      })
      .join("");
  };

  // allTags();

  document.querySelector(".artists").innerHTML = photographers
    .map((photographer) => {
      return photographer.render();
    })
    .join("");
};
