const MARVEL_API_URL = 'http://gateway.marvel.com/v1/public';
const MARVEL_API_KEY = '219d3ff5277080d1b3c2f8f43c751f9b';

export function fetchFromMarvel(resource, params = {}) {
  let queryString = '?apikey=' + MARVEL_API_KEY;

  if (Object.keys(params).length > 0) {
      queryString = Object.keys(params).reduce((memo, param) => {
        memo += `&${param}=${params[param]}`;
        return memo;
      }, queryString);
  }

  if (resource.indexOf('http://') === -1) {
    resource = MARVEL_API_URL + '/' + resource;
  }

  // const cachedResponse = window.localStorage.getItem(resource);
  //
  // if (cachedResponse) {
  //   return Promise.resolve(JSON.parse(cachedResponse));
  // }

  return fetch(resource + queryString)
    .then(response => response.json())
    .then(json => {
      window.localStorage.setItem(resource, JSON.stringify(json));
      return json;
    });
}

export function getImageUrl({ path, extension }, size = 'portrait_small') {
  return `${path}/${size}.${extension}`;
}
