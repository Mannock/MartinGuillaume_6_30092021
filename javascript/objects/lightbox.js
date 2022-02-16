export class Lightbox {
  constructor(allMedias) {
    this.medias = allMedias;
    this.index = 0;
    console.log(allMedias);
  }

  handleIndex(index) {
    this.index = index;
    this.display();
  }

  display() {
    const box = document.getElementById("lightbox-container");
    const media = this.medias[this.index];
    console.log(media);
    box.innerHTML = media.render();
  }

  next() {
    this.index++;
    if (this.index == this.medias.length) {
      this.index = 0;
    }
    this.display();
  }

  previous() {
    this.index--;
    if (this.index < 0) {
      this.index = this.medias.length - 1;
    }
    this.display();
  }

  close() {
    let lightboxClose = document.getElementById("lightbox__close");
    console.log(lightboxClose);
    lightboxClose.addEventListener("click", (e) => {
      document.getElementsByClassName("lightbox")[0].style.display = "none";
    });
  }
}
