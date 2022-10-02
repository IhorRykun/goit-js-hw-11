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

let isShow = 0;

// !    Змінна для того щоб отримати об"єкт
const GalleryEl = new NewsApiGalleryService();


form.addEventListener('submit',submitImgForm);

// !    Функція самбіту форми запитів 

function submitImgForm(e) {
  e.preventDefault();
    if (e.currentTarget.elements.searchQuery.value === '') {
        addClasslist();
           Notiflix.Notify.failure(
             'Sorry, there are no images matching your search query. Please try again.'
           );
        return (innerHTML = '');
    
  }
  GalleryEl.query = e.target.elements.searchQuery.value.trim();
    gallery.innerHTML = '';
    isShow = 0;
  GalleryEl.resetPage();
    fetchImg();
    // registerIntersetObserv(); // функція безкінечного скролу
}

async function fetchImg() {
      removeClasslist();
    const response = await GalleryEl.fetchImg();
  const { hits, total } = response;

    if (!hits.length) {
         Notiflix.Notify.failure(
           'Sorry, there are no images matching your search query. Please try again.'
         );
  }
    renderGalery(hits);
    isShow += hits.length;
    if (isShow < total) {
        
    }
    if (isShow >= total) {
        addClasslist();
        Notiflix.Notify.info(
            'We re sorry, but you have reached the end of search results.'
            
        );
    }
}

// ! Функція яка добавляє картинки оп кліці на кнопку

buttonAddImg.addEventListener('click', onLoadMore);

function onLoadMore() {
  GalleryEl.incrementPage();
  fetchImg();
}


buttonSubmitClickIshiden.addEventListener('click', removeClasslist);


function removeClasslist() {
    divContainer.classList.remove("is_hiden");
}
function addClasslist() {
  divContainer.classList.add('is_hiden');
}










// !    Функція безкінечного скролу

// function registerIntersetObserv() {
//     const onEntry = entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting && GalleryEl.query !== "") {
//                 GalleryEl.incrementPage();
//                 fetchImg();
//             }
//         });
//     };
//     const options = {
//       rootMargin: '200px',
//     };


//     const observe = new IntersectionObserver(onEntry, options);
//     observe.observe(divContainer);
// }












