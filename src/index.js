import './css/styles.css';
import { debounce } from 'lodash';
import Notiflix from 'notiflix';


//  ! Експорт  функції  запиту API
import { fetchCountries } from './fetchCountries';


const form = document.querySelector('#search-form');

form.addEventListener('submit', submitImg);


function submitImg(e) {
    e.preventDefault();
    const inputEl = e.currentTarget.searchQuery.value;
    console.dir(inputEl);
    fetchCountries();

}


