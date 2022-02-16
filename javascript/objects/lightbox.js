export class Lightbox {
  constructor(allMedias) {
    this.medias = allMedias;
  }

  display() {
    console.log("test");
    document.getElementsByClassName("lightbox")[0].style.display = "block";
  }

  previous() {}

  next() {}
}
//   <div class="lightbox">
//     <button class="lightbox__close"><img src="/Code/img/cross.png"></button>
//     <button class="lightbox__next"><img src="/Code/img/arrowright.png"></button>
//     <button class="lightbox__prev"><img src="/Code/img/arrowleft.png"></button>
//     <div class="lightbox__container">
//       <img src="https://picsum.photos/900/1800" alt="">
//     </div>
//   </div>
