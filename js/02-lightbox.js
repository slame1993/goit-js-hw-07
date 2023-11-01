import { galleryItems } from './gallery-items.js';
// Change code below this line
const listImage = document.querySelector(".gallery")
const itemImage = galleryItems.map(({preview, original, description}) => 
`<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`)
    .join("");
listImage.insertAdjacentHTML("afterbegin", itemImage)

const litebox = new SimpleLightbox('.gallery a',
    {
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
    });
