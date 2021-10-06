// Controller
console.log("hello")
import {
  fetchPopularMovies,
  fetchSearchResult,
  fetchLatestData,
  fetchTrendingData,
  swapPage,
  swapTrending,
  swapLatest,
  swapFreeToWatch,
  fetchTopRated,
} from "./models";
import {
  renderCards,
  showSpinner,
  clearSpinner,
  submitValue,
  takeInput,
  clearFields,
  renderLatest,
  renderTrending,
  renderFreeToWatchCards,
  changepage,
  backtomain,
  renderSearch
} from "./view/view";
import { elements } from "./view/base";

async function loadPopularData() {
  showSpinner();
  let { results } = await fetchPopularMovies();
  clearSpinner();
  renderCards(results);
}

loadPopularData();
async function loadlatestData() {
  showSpinner();
  let { results } = await fetchLatestData();
  console.log(results);
  clearSpinner();
  renderLatest(results);
}
async function loadtrendingData() {
  showSpinner();
  let { results } = await fetchTrendingData();
  console.log(results);
  clearSpinner();
  renderTrending(results);
}
async function loadFreeToWatchData() {
  showSpinner();
  let { results } = await fetchTopRated();
  console.log(results);
  clearSpinner();
  renderFreeToWatchCards(results);
}
loadFreeToWatchData();
loadtrendingData();
loadlatestData();
elements.input.addEventListener("change", takeInput);

// console.log(elements.page1.classList.add("hide"))

elements.form.addEventListener("submit", async (e) => {
  e.preventDefault();
  changepage(e)
  let {results}=await fetchSearchResult(  submitValue(e)
  );
  renderSearch(results)
  console.log(results)
  
});

elements.categories.addEventListener("click", async (e) => {
  console.log(e);
  let link = swapPage(e);
  let { results } = await fetchPopularMovies(link.trim());
  console.log(results);
  renderCards(results);
  console.log(link.trim());
});
elements.trendingCategories.addEventListener("click", async (e) => {
  let link = swapTrending(e);
  let { results } = await fetchTrendingData(link.trim());
  renderTrending(results);
});

elements.latestCategories.addEventListener("click", async (e) => {
  let link = swapLatest(e);
  let { results } = await fetchLatestData(link.trim());
  console.log(results);
  renderLatest(results);
});

elements.freeToWatchCategories.addEventListener("click",async(e)=>{
  let link = swapFreeToWatch(e);
  let { results } = await fetchTopRated(link.trim());
  console.log(results);
  renderFreeToWatchCards(results);
});
elements.faarrowleft.addEventListener("click",backtomain)