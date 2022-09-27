//  !   функція запиту API

const url = `https://pixabay.com/api`;
 const key = '30187143-4d7f5699d03729238b163605a';
function fetchCountries() {
  return fetch(
    `${url}?key=${key}&image_type=photo&orientation=horizontal`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
}

export { fetchCountries };
