export class Image {
  constructor(data) {
    this.id = data.id;
    this.photographerId = data.photographerId;
    this.title = data.title;
    this.src = data.src;
    this.tags = data.tags;
    this.likes = data.likes;
    this.date = data.date;
    this.price = data.price;
  }

  render = function () {
    return `
    <div class="work-display__card">
             <img
               class="work-display__card__image"
               src="./img/Sample Photos/${this.photographerId}/${this.src}"
               alt=""
             />
             <div class="infos-card">
               <h2>${this.title}</h2>
               <div class="counter">
                 <p class = "medialikes" data-id="${this.id}">${this.likes}</p>
                 <img src="./img/heart-icon.png" class= "hearticon" data-id="${this.id}" alt="heart icon" />
               </div>
             </div>
             </div>
    
     `;
  };

  renderLightbox = function () {
    return `
    `;
  };

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
