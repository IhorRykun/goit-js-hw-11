import './css/styles.css';
import { debounce } from 'lodash';
import Notiflix from 'notiflix';

//  ! імпорт  функції  запиту API
import { fetchImg } from './fetchImg';
//  ! Імпорт  функції рендеру розмітки
import { renderGalery } from './renderGalery';


const form = document.querySelector('#search-form');

let pageNumber = 1;

form.addEventListener('submit', submitImg);

function submitImg(e) {
 e.preventDefault();
  const inputEl = e.currentTarget.searchQuery.value;
    fetchImg();
    pageNumber += 1;
    renderGalery();
}
