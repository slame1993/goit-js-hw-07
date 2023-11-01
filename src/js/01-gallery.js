import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const listImage = document.querySelector(".gallery");
const itemImage = galleryItems.map(({preview, original, description}) => `  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>
`)
    .join("");
listImage.insertAdjacentHTML("afterbegin", itemImage)
listImage.addEventListener("click", bigImage)
const instance = basicLightbox.create(`<img src="">`, {
  onShow: () => { document.addEventListener("keydown", closeImage) },
  onClose: () => { document.removeEventListener("keydown", closeImage) }
});

function bigImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") return;
    instance.element().querySelector("img").src = event.target.dataset.source;
  instance.show()
  }
function closeImage(event) {
  if (event.code === "Escape") {
    instance.close();
  }
}
console.log(galleryItems);

