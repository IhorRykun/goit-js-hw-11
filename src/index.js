import './css/styles.css';
import Notiflix from 'notiflix';

//  ! імпорт  класу  запиту API
import NewsApiGalleryService from "./fetchImg";
//  ! Імпорт  функції рендеру розмітки
import { renderGalery } from './renderGalery';

const div = document.querySelector('.gallery');

let isShow = 0;
const form = document.querySelector('#search-form');
// !    Змінна для того щоб отримати об"єкт 
const GalleryEl = new NewsApiGalleryService();


let pageNumber = 1;

form.addEventListener('submit', submitImgForm);

function submitImgForm(e) {
    e.preventDefault();
    if (e.currentTarget.elements.searchQuery.value === '') {
       return innerHTML = '';
    }
    GalleryEl.query = e.target.elements.searchQuery.value.trim();
let isShow = 0;
    div.innerHTML = '';
    GalleryEl.resetPage();
    fetchImg();
}

function onLoadMore() {
  GalleryEl.incrementPage();
  fetchImg();
}