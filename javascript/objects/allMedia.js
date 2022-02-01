// Tous les medias de la page pour gérer le triage et l'incrémentation des likes

export class AllMedias {
  constructor() {
    this.all = [];
    this.order = "";
    this.likes = 0;
  }
  add(media) {
    this.all.push(media);
  }

  display(medias) {
    let html = "";
    medias.forEach((media) => {
      html += media.render();
    });
    document.querySelector(".work-display").innerHTML = html;
  }

  reordering(medias) {}
}
