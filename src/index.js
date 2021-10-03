// Controller
import { fetchPopularMovies, fetchSearchResult,fetchLatestData,fetchTrendingData,swapPage} from "./models";
import {
  renderCards,
  showSpinner,
  clearSpinner,
  submitValue,
  takeInput,
  clearFields,
  
  renderLatest,
  renderTrending,
  
} from "./view/view";
import { elements } from "./view/base";

async function loadPopularData() {
  showSpinner();
  let { results } = await fetchPopularMovies();
  clearSpinner();
  renderCards(results);
}

loadPopularData();
async function loadlatestData(){
  showSpinner();
  let { results } = await fetchLatestData();
  console.log(results)
  clearSpinner();
  renderLatest(results);
}
async function loadtrendingData(){
  showSpinner();
  let { results } = await fetchTrendingData();
  console.log(results)
  clearSpinner();
  renderTrending(results);
}
loadtrendingData()
loadlatestData()
elements.input.addEventListener("change", takeInput);

let searchresult = "";
elements.form.addEventListener("submit", async (e) => {
  searchresult = submitValue(e);
  clearFields();
  let { results } = await fetchSearchResult(searchresult.trim());
  renderCards(results);
});

elements.categories.addEventListener("click",async (e)=>{
  console.log(e)
  let link=  swapPage(e)
  let { results }=await fetchPopularMovies(link.trim())
  console.log(results)
  renderCards(results)
  console.log(link.trim())
})
