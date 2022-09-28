//  !   клас запиту API
import axios from 'axios';

  export default class NewsApiGalleryService {
        constructor() {
            this.searchQuery = '';
            this.page = 1;
        }

async fetchImg() {
 const url = `https://pixabay.com/api/`;
const key = '30187143-4d7f5699d03729238b163605a';
    const response = await axios
        .get(`${url}?key=${key}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&page=${this.page}`);
    return response.data;
}

  incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }
    get query() {
        return this.searchQuery;
    }
    set query(newQuery) {
        this.searchQuery = newQuery;
    }
  }