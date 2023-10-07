import { galleryItems } from './gallery-items.js';
// Change code below this line
let currentInstance = null;


function createGalleryItems() {
    return galleryItems
        .map(item => `
            <li class="gallery__item">
                <a class="gallery__link" href="${item.original}">
                    <img
                        class="gallery__image"
                        src="${item.preview}"
                        data-source="${item.original}"
                        alt="${item.description}"
                    />
                </a>
            </li>
        `)
        .join('');
}


const galleryContainer = document.querySelector('.gallery');
galleryContainer.innerHTML = createGalleryItems();


galleryContainer.addEventListener('click', (event) => {
    event.preventDefault();
    
    if (event.target.nodeName === 'IMG') {
        const imageUrl = event.target.getAttribute('data-source');
        openModal(imageUrl);
    }
});


function openModal(imageUrl) {
    currentInstance = basicLightbox.create(`
        <img src="${imageUrl}" width="800" height="600">
    `);

 
    currentInstance.show();

    document.addEventListener('keydown', onEscapePress);
}

function onEscapePress(event) {
    if (event.key === 'Escape' && currentInstance) {
        currentInstance.close();
        document.removeEventListener('keydown', onEscapePress);
    }
}
console.log(galleryItems);

