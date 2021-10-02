import { API_KEY } from "./config/config";
import {link} from "./view/view"

// For storing and fetching any data
async function fetchPopularMovies(url=link) {
  let result = await fetch(
    `${url}`
    
  );
  let data = await result.json();
    console.log(data)
  return data;
}

async function fetchSearchResult(query) {
  let result = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  let data = await result.json();

  return data;
}

export { fetchPopularMovies, fetchSearchResult };
