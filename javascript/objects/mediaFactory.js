import { Video } from "./video.js";
import { Image } from "./image.js";

export class MediaFactory {
  create(data) {
    if (data.hasOwnProperty("image")) {
      data.src = data.image;
      return new Image(data);
    } else {
      data.src = data.video;

      return new Video(data);
    }
  }
}
