//  !   функція запиту API

const url = `https://pixabay.com/api/?`;
 const keyApi = '30187143-4d7f5699d03729238b163605a';
function fetchCountries(name) {
  return fetch(`${url}${name}/${keyApi}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
}

export { fetchCountries };
