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


import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
