export class Lightbox {
  constructor(allMedias) {
    this.medias = allMedias;
    this.index = 0;
    // console.log(allMedias);
  }

  handleIndex(index) {
    this.index = index;
    this.display();
  }

  display() {
    const box = document.getElementById("lightbox-container");
    document.getElementById("box").style.display = "flex";
    console.log(this.index);
    const media = this.medias[this.index];
    console.log(this.index);
    box.innerHTML = media.renderLightbox();
    this.close();
  }

  listenChanges() {
    let next = document.getElementById("lightbox__next");
    let previous = document.getElementById("lightbox__previous");

    next.addEventListener("click", (e) => {
      this.next();
    });
    previous.addEventListener("click", (e) => {
      this.previous();
    });

    document.addEventListener("keydown", (e) => {
      if (e.keyCode == 39) {
        this.next();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.keyCode == 37) {
        this.previous();
      }
    });
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

    lightboxClose.addEventListener("click", (e) => {
      const box = document.getElementById("lightbox-container");
      document.getElementById("box").style.display = "none";
      box.innerHTML = "";
    });
    document.addEventListener("keydown", (e) => {
      if (e.keyCode == 27) {
        document.getElementById("box").style.display = "none";
      }
    });
  }
}
