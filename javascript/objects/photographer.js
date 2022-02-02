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

    document.getElementById("name").innerHTML = `${this.name}`;
    document.getElementById(
      "location"
    ).innerHTML = `<p>${this.city}, ${this.country}<p>`;
    document.getElementById("tagline").innerHTML = this.tagline;
    document.getElementById("tags").innerHTML = `<ul>${ownTags}</ul>`;
    document.getElementById("profilePic").innerHTML = ` <img
    class="card__image"
    src="./img/Sample Photos/Photographers ID Photos/${this.name
      .split(" ")
      .join("")}.jpg" alt="photo de ${this.name}">`;
    document.getElementById("nameModal").innerHTML = this.name;
    document.getElementById("scrollPrice").innerHTML = `${this.price}€/jour`;
  }

  // displayProfile() {
  //   return `
  //   <div class="photographer-infos">
  //   <div class="card">
  //     <img
  //       class="card__image"
  //       src="./img/Sample Photos/Photographers ID Photos/MimiKeel.jpg"
  //       alt=""
  //     />
  //   </div>
  //   <h1>>${this.name}</h1>
  //   <button class="open-modal button">Contactez-moi</button>
  //   <div class="modal hidden">
  //     <button class="close-modal">&times;</button>
  //     <h1>Contactez-moi</h1>
  //     <h1>${this.name}</h1>
  //     <form action="">
  //       <div class="firstname-container">
  //         <label for="firstname">Prénom</label><br />
  //         <input
  //           class="text-control"
  //           type="text"
  //           id="firstname"
  //           name="first"
  //           autocomplete="off"
  //           minlength="2"
  //         /><br />
  //         <span></span>
  //       </div>
  //       <div class="lastname-container">
  //         <label for="lastname">Nom</label><br />
  //         <input
  //           class="text-control"
  //           type="text"
  //           id="lastname"
  //           name="last"
  //           autocomplete="off"
  //         /><br />
  //         <span></span>
  //       </div>
  //       <div class="email-container">
  //         <label for="email">E-mail</label><br />
  //         <input
  //           class="text-control"
  //           type="text"
  //           id="email"
  //           name="email"
  //           autocomplete="off"
  //         /><br />
  //         <span></span>
  //       </div>
  //       <div class="message-container">
  //         <label for="message">Votre message</label><br />
  //         <input
  //           class="text-control"
  //           type="text"
  //           id="message"
  //           name="last"
  //           autocomplete="off"
  //         /><br />
  //         <span></span>
  //       </div>
  //       <input class="btn-submit button2" type="submit" value="Envoyer" />
  //     </form>
  //   </div>

  //   <p>${this.city}, ${this.country}</p>
  //   <p>Voir le beau dans le quotidien</p>
  //   <div class="tag">
  //     <ul>
  //       <li>#portrait</li>
  //       <li>#events</li>
  //       <li>#travel</li>
  //       <li>#animals</li>
  //     </ul>
  //   </div>
  // </div>
  //   `;
  // }
}
