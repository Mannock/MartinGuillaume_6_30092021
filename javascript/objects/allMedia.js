// Tous les medias de la page pour gérer le triage et l'incrémentation des likes

export class AllMedias {
  constructor() {
    this.all = [];
    this.order = "";
    this.totallikes = 0;
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
    this.lightboxListener();
    // this.sortingAll();
    this.addMediaLikes();
    this.getAllLikes();
  }

  addLightbox(lightbox) {
    this.lightbox = lightbox;
  }

  lightboxListener() {
    let x = document.querySelectorAll(".work-display__card__image");
    x.forEach((media, index) => {
      media.addEventListener("click", (e) => {
        this.lightbox.handleIndex(index);
        console.log(this.lightbox.index);
        console.log(this.all);
      });
    });
    this.lightbox.listenChanges();
  }

  // DRY

  sortingAll() {
    let sort = document.getElementById("selector");
    sort.addEventListener("change", (e) => {
      console.log(sort.value);
      if (sort.value == "name") {
        this.all = this.all.sort((a, b) => {
          return a.title > b.title ? 1 : -1;
        });
        this.display(this.all);
      } else if (sort.value == "popularity") {
        this.all = this.all.sort((a, b) => {
          return b.likes - a.likes;
        });
        this.display(this.all);
      } else if (sort.value == "date") {
        this.all = this.all.sort((a, b) => {
          let date1 = new Date(a.date);
          let date2 = new Date(b.date);
          return date2 - date1;
        });
        this.display(this.all);
      }
    });
  }

  addMediaLikes() {
    let hearts = document.getElementsByClassName("hearticon");
    for (let i = 0; i < hearts.length; i++) {
      let heart = hearts[i];
      let selected = heart.parentNode;

      heart.addEventListener("click", (e) => {
        let id = e.target.getAttribute("data-id");
        let index = this.all.findIndex((media) => media.id == id);
        let likes = this.all[index].likes + 1;
        this.all[index].likes = likes;
        selected.parentNode.children[1].children[0].textContent = likes;
        this.totalLikes++;
        document.getElementById("bottom-infos").innerHTML = this.totalLikes;
      });
    }
  }
  getAllLikes() {
    let total = 0;
    this.all.forEach((media) => {
      total += media.likes;
    });
    this.totalLikes = total;
    document.querySelector("#bottom-infos").textContent = total;
  }
}
