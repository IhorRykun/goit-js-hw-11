import './css/styles.css';
import Notiflix from 'notiflix';

//  ! імпорт  класу  запиту API
import NewsApiGalleryService from './fetchImg';
//  ! Імпорт  функції рендеру розмітки
import { renderGalery } from './renderGalery';

const gallery = document.querySelector('.gallery');
const buttonAddImg = document.querySelector('.button__add');
const buttonSubmitClickIshiden = document.querySelector('.button__search');
const divContainer = document.querySelector('.container__button');

let isShow = 0;
const form = document.querySelector('#search-form');
// !    Змінна для того щоб отримати об"єкт
const GalleryEl = new NewsApiGalleryService();


form.addEventListener('submit', submitImgForm);

function submitImgForm(e) {
  e.preventDefault();
  if (e.currentTarget.elements.searchQuery.value === '') {
    return (innerHTML = '');
  }
  GalleryEl.query = e.target.elements.searchQuery.value.trim();
  let isShow = 0;
  gallery.innerHTML = '';
  GalleryEl.resetPage();
    fetchImg();
     divContainer.classList.remove('is_hiden');

}

async function fetchImg() {
  const response = await GalleryEl.fetchImg();
  const { hits, total } = response;

  if (!hits.length) {
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }
  renderGalery(hits);

  isShow += hits.length;
}

// ! Функція яка добавляє картинки оп кліці на кнопку

buttonAddImg.addEventListener('click', onLoadMore);

function onLoadMore() {
  GalleryEl.incrementPage();
  fetchImg();
    isShow += 1;
}

// !    Йункцыя яка забираэ клас is_hiden

// buttonSubmitClickIshiden.addEventListener('click', removeClasslist);


// function removeClasslist() {
//     divContainer.classList.remove("is_hiden");
// }