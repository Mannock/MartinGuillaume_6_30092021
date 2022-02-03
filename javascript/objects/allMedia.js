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
  }

  // DRY

  sortingPopularity() {
    let popularity = document.getElementsByClassName("popularity-order");
    popularity[0].addEventListener("click", (e) => {
      console.log("hhello");
      this.all = this.all.sort((a, b) => {
        return b.likes - a.likes;
      });
      this.display(this.all);
    });
  }

  sortingDate() {
    let date = document.getElementsByClassName("date-order");
    date[0].addEventListener("click", (e) => {
      this.all = this.all.sort((a, b) => {
        let date1 = new Date(a.date);
        let date2 = new Date(b.date);

        return date2 - date1;
      });
      this.display(this.all);
      console.log(this.all);
    });
  }

  sortingName() {
    let name = document.getElementsByClassName("name-order");
    name[0].addEventListener("click", (e) => {
      this.all = this.all.sort((a, b) => {
        return a.title > b.title ? 1 : -1;
      });
      this.display(this.all);
      console.log(this.all);
    });
  }

  addMediaLikes() {
    let hearts = document.getElementsByClassName("hearticon");
    // console.log(hearts);
    for (let i = 0; i < hearts.length; i++) {
      // console.log(hearts.length);
      let heart = hearts[i];
      // console.log(heart);
      let selected = heart.parentNode;
      // console.log(selected.parentNode.children[1].children[0]);

      heart.addEventListener("click", (e) => {
        let id = e.target.getAttribute("data-id");
        // console.log(id);
        let index = this.all.findIndex((media) => media.id == id);
        let likes = this.all[index].likes + 1;
        // console.log(index);
        this.all[index].likes = likes;
        selected.parentNode.children[1].children[0].textContent = likes;
        // console.log(this.all[index].likes);
        // heart.setAttribute("style", "color:#901c1c");
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