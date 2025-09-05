import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { images } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");

const markup = images
  .map(
    (img) => `
<li class="gallery-item">
  <a class="gallery-link" href="${img.original}">
    <img
      class="gallery-image"
      src="${img.preview}"
      alt="${img.description}"
    />
  </a>
</li>`
  )
  .join("");

galleryContainer.innerHTML = markup;

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
