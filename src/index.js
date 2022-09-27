import './css/styles.css';
import { debounce } from 'lodash';
import Notiflix from 'notiflix';

//  ! Експорт  функції  запиту API
import { fetchImg } from './fetchImg';

const form = document.querySelector('#search-form');

let pageNumber = 1;
let name = "";

form.addEventListener('submit', submitImg);

function submitImg(e) {
  e.preventDefault();
  name = e.currentTarget.searchQuery.value;
    fetchImg();
    pageNumber += 1;
}
