import './css/styles.css';
import Notiflix from 'notiflix';

//  ! імпорт  класу  запиту API
import NewsApiGalleryService from "./fetchImg";
//  ! Імпорт  функції рендеру розмітки
import { renderGalery } from './renderGalery';


let isShow = 0;
const form = document.querySelector('#search-form');
// !    Змінна для того щоб отримати об"єкт 
const GalleryEl = new NewsApiGalleryService();


let pageNumber = 1;

form.addEventListener('submit', submitImgForm);

function submitImgForm(e) {
  e.preventDefault();
  const inputEl = e.currentTarget.searchQuery.value;
  pageNumber += 1;
  renderGalery();
}
