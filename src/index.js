import './css/styles.css';
import Notiflix from 'notiflix';
import { throttle } from 'lodash';


//  ! імпорт  класу  запиту API
import NewsApiGalleryService from './fetchImg';
//  ! Імпорт  функції рендеру розмітки
import { renderGalery } from './renderGalery';


const gallery = document.querySelector('.gallery');
const buttonAddImg = document.querySelector('.button__add');
const buttonSubmitClickIshiden = document.querySelector('.button__search');
const divContainer = document.querySelector('.container__button');

const form = document.querySelector('#search-form');
// !    Змінна для того щоб отримати об"єкт
const GalleryEl = new NewsApiGalleryService();


form.addEventListener('submit',submitImgForm);

function submitImgForm(e) {
  e.preventDefault();
  if (e.currentTarget.elements.searchQuery.value === '') {
    return;
  }
  GalleryEl.query = e.target.elements.searchQuery.value.trim();
  gallery.innerHTML = '';
  GalleryEl.resetPage();
    fetchImg();
    //  divContainer.classList.remove('is_hiden');
    registerIntersetObserv();
}

async function fetchImg() {
  const response = await GalleryEl.fetchImg();
  const { hits } = response;

  if (!hits.length) {
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
      );
       divContainer.classList.add('is_hiden');
  }
  renderGalery(hits);

}

// !    Функція безкінечного скролу

function registerIntersetObserv() {
    const onEntry = entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && GalleryEl.query !== "") {
                GalleryEl.incrementPage();
                fetchImg();
            }
        });
    };
    const options = {
      rootMargin: '200px',
    };


    const observe = new IntersectionObserver(onEntry, options);
    observe.observe(divContainer);
}











// ! Функція яка добавляє картинки оп кліці на кнопку

// buttonAddImg.addEventListener('click', onLoadMore);

// function onLoadMore() {
//   GalleryEl.incrementPage();
//   fetchImg();
// }

// !    Функція яка забираэ клас is_hiden

// buttonSubmitClickIshiden.addEventListener('click', removeClasslist);


// function removeClasslist() {
//     divContainer.classList.remove("is_hiden");
// }
