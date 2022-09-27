//  !   функція запиту API
import axios from 'axios';
export { fetchImg };

const url = `https://pixabay.com/api`;
const key = '30187143-4d7f5699d03729238b163605a';
async function fetchImg(name, page) {
  const response = await axios
    .get(
      `${url}?key=${key}&q=${name}&image_type=photo&orientation=horizontal&page=${page}`
    )
    .then(response => response.data)
    .catch(error => console.log(error));

  return response.json();
}
