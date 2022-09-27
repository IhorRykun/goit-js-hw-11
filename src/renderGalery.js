import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export { renderGalery };

// ! Функція яка рендерить нашу розмітку картинок
const gallery = document.querySelector('.gallery');
function renderGalery(images) {
  const markup = images
    .map(img => {
      const {
        id,
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = img;
      return `<a href="${largeImageURL}">   
        <div class="gallery-item" id="${id}">
            <img class="gallery-item__img" src="${webformatURL}" alt="${tags}" loading="lazy" />
            <div class="info">
              <p class="info-item"><b>Likes</b></br>${likes}</p>
              <p class="info-item"><b>Views</b></br>${views}</p>
              <p class="info-item"><b>Comments</b></br>${comments}</p>
              <p class="info-item"><b>Downloads</b></br>${downloads}</p>
            </div>
          </div>
           </a>`;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);

  new simpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}
