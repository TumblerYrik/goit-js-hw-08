import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
<li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
</li>
      `;
    })
    .join("");
}

// galleryList.addEventListener("click", handleGalleryClick);

// function handleGalleryClick(event) {
//   event.preventDefault();

//   const clickedElement = event.target;

//   if (!clickedElement.classList.contains("gallery__image")) {
//     return;
//   }

//   const largeImageUrl = clickedElement.parentElement.href;
//   const imageAlt = clickedElement.alt;

//   const lightbox = new SimpleLightbox(".gallery a", {
//     captionsData: "alt", 
//     captionDelay: 250, 
//   });

// }

// document
//   .querySelector(".gallery")
//   .addEventListener("click", handleGalleryClick);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});