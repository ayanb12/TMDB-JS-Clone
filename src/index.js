// Controller
import { fetchPopularMovies, fetchSearchResult } from "./models";
import {
  renderCards,
  showSpinner,
  clearSpinner,
  submitValue,
  takeInput,
  clearFields,
} from "./view/view";
import { elements } from "./view/base";

async function loadPopularData() {
  showSpinner();
  let { results } = await fetchPopularMovies();
  clearSpinner();
  renderCards(results);
}

loadPopularData();

elements.input.addEventListener("change", takeInput);

let searchresult = "";
elements.form.addEventListener("submit", async (e) => {
  searchresult = submitValue(e);
  clearFields();
  let { results } = await fetchSearchResult(searchresult.trim());
  renderCards(results);
});
