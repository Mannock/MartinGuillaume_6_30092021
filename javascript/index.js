let photographers = [];

const fetchPhotographer = async () => {
  await fetch("data.json")
    .then((res) => res.json())
    .then((data) => (photographers = data.photographers));

  console.log(photographers);
};

const photographerDisplay = async () => {
  await fetchPhotographer();

  document.querySelector(".artists").innerHTML = photographers
    .map((photographer) => {
      let tags = [];
      console.log(photographer.tags);

      return `
        <div class="container">
        <div class="card">
        <a href="photographer.html">
        <img class="card__image" src="./img/Sample Photos/Photographers ID Photos/${photographer.name
          .split(" ")
          .join("")}.jpg" alt="photo de ${photographer.name}">
          </a>
          </div>
          <div class="card__infos">
          <h1>${photographer.name}</h1>
          <p>${photographer.city}, ${photographer.country}</p>
          <p>${photographer.tagline}</p>
          <p>${photographer.price}€/jour</p>
          <div class="tag">
          <ul>
          <li>${photographer.tags}</li>
          </ul>
          </div>
          </div>
          </div>
          `;
    })
    .join("");
};

photographerDisplay();

//-----------------------------------------------------------------------------

class Photographer {
  constructor(name, city, country, tagline, price) {
    this.name = name;
    this.city = city;
    this.country = country;
    this.tagline = tagline;
    this.price = price;
  }
  render = function () {
    console.log("Bonjour, je suis " + this.name);
  };
}

const photographer1 = new Photographer(
  "John",
  "Lyon",
  "France",
  "Izokay",
  "400"
);

// const photographer1 = new Photographer("");
