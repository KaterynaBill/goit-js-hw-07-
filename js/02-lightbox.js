import { galleryItems } from './gallery-items.js';

function createGalleryItems() {
    return galleryItems
        .map(item => `
            <li class="gallery__item">
                <a class="gallery__link" href="${item.original}">
                    <img
                        class="gallery__image"
                        src="${item.preview}"
                        alt="${item.description}"
                    />
                </a>
            </li>
        `)
        .join('');
}

const galleryContainer = document.querySelector('.gallery');
galleryContainer.innerHTML = createGalleryItems();


const lightbox = new SimpleLightbox('.gallery a', {
    captions: true, 
    captionsData: 'alt', 
    captionDelay: 250, 
});
