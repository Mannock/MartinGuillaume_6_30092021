import { Photographer } from "./objects/photographer.js";
import { Lightbox } from "./objects/lightbox.js";
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

    let medias = json.media.filter(
      (media) => media.photographerId == photographerID
    );

    let allMedias = new AllMedias();
    let lightbox = new Lightbox(allMedias.all);
    allMedias.addLightbox(lightbox);
    let factory = new MediaFactory();

    medias.forEach((element) => {
      let media = factory.create(element);
      allMedias.add(media);
    });

    photographer.displayProfile();
    allMedias.display(allMedias.all);
  });
