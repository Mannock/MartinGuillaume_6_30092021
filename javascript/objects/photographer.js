export class Photographer {
  constructor(name, city, country, tagline, price, tags, id) {
    this.name = name;
    this.city = city;
    this.country = country;
    this.tagline = tagline;
    this.price = price;
    this.tags = tags;
    this.id = id;
  }

  // filtrer les photographes aves les tags correspondants.
  hasTags = (tags) => {
    let res = false;

    this.tags.forEach((tag) => {
      if (tags.includes(tag)) {
        res = true;
      }
    });
    return res;
  };

  render = function () {
    let ownTags = "";
    for (let i = 0; i < this.tags.length; i++) {
      let tag = this.tags[i];
      ownTags += `<li class= "${tag}">#${tag}</li>`;
    }

    return `
      <div class="container">
      <div class="card">
      <a href="photographer-page.html?id=${this.id}">
      <img class="card__image" src="./img/Sample Photos/Photographers ID Photos/${this.name
        .split(" ")
        .join("")}.jpg" alt="photo de ${this.name}">
        </a>
        </div>
        <div class="card__infos">
        <h1>${this.name}</h1>
        <p>${this.city}, ${this.country}</p>
        <p>${this.tagline}</p>
        <p>${this.price}€/jour</p>
        <div class="tag">
        <ul>${ownTags}</ul>
        </div>
        </div>
        </div>
        `;
  };

  displayProfile() {
    let ownTags = "";
    for (let i = 0; i < this.tags.length; i++) {
      let tag = this.tags[i];
      ownTags += `<li class= "${tag}">#${tag}</li>`;
    }

    document.getElementById("nameProfil").innerHTML = `${this.name}`;
    document.getElementById(
      "locationProfil"
    ).innerHTML = `<p>${this.city}, ${this.country}<p>`;
    document.getElementById("taglineProfil").innerHTML = this.tagline;
    // document.getElementById("tags").innerHTML = `<ul>${ownTags}</ul>`;
    document.getElementById("tagProfil").innerHTML = `<ul>${ownTags}</ul>`;
    document.getElementById("photoProfil").innerHTML = ` <img
    class="card__image"
    src="./img/Sample Photos/Photographers ID Photos/${this.name
      .split(" ")
      .join("")}.jpg" alt="photo de ${this.name}">`;
    document.getElementById("nameModal").innerHTML = this.name;
    document.getElementById("scrollPrice").innerHTML = `${this.price}€/jour`;
  }
}
