export class Photographer {
  constructor(name, city, country, tagline, price, tags) {
    this.name = name;
    this.city = city;
    this.country = country;
    this.tagline = tagline;
    this.price = price;
    this.tags = tags;
  }

  // filtrer les photographes aves les tags correspondants.
  hasTags = (tags) => {
    let ok = false;

    this.tags.forEach((tag) => {
      if (tags.includes(tag)) {
        ok = true;
      }
    });
    return ok;
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
      <a href="photographer.html">
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
}
