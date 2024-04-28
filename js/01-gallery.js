import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector('.gallery');

const galleryMarkup = createGalleryMarkup(galleryItems);
galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
          </a>
        </li>
      `;
    })
    .join('');
}

galleryList.addEventListener('click', handleGalleryClick);

function handleGalleryClick(event) {
  event.preventDefault();

  const clickedElement = event.target;
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const largeImageUrl = clickedElement.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${largeImageUrl}" width="800" height="600">
`);

  instance.show();
}
