export class Media {
  constructor(id, photographerId, title, image, tags, likes, date, price) {
    this.id = id;
    this.photographerId = photographerId;
    this.title = title;
    this.image = image;
    this.tags = tags;
    this.likes = likes;
    this.date = date;
    this.price = price;
  }

  //   display(medias) {
  //     medias.forEach(media => {
  //       document.querySelector(".work-display").innerHTML = medias
  //     .map((media) => {
  //       return `<div class="work-display__card">
  //         <img
  //           class="work-display__card__image"
  //           src="./img/Sample Photos/Mimi/Animals_Rainbow.jpg"
  //           alt=""
  //         />
  //         <div class="infos-card">
  //           <h2>Arc-en-ciel</h2>
  //           <div class="counter">
  //             <p>12</p>
  //             <img src="./img/heart-icon.png" alt="heart icon" />
  //           </div>
  //         </div>
  //         </div>

  //             `;
  //     })
  //     .join("");
  // };
  //     }
}
