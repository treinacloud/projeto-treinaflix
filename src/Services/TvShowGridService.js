import { API_URL, API_KEY } from "../Config/config";

const urls = [
  `${API_URL}search/tv?api_key=${API_KEY}&language=pt-BR&query=stranger`,
  `${API_URL}search/tv?api_key=${API_KEY}&language=pt-BR&query=breaking`,
  `${API_URL}search/tv?api_key=${API_KEY}&language=pt-BR&query=13`
];

export function fetchTvShowsGrid() {
  return Promise.all(
    urls.map(items => {
      return fetch(items).then(response => response.json());
    })
  );
}
