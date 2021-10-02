import { elements } from "./base";
import {API_KEY} from "../config/config"
function renderCards(arr) {
  let str = "";
  arr
    .filter((item, idx) => idx <= 3)
    .forEach((item) => {
      str += `<div class="movie-card">
        <div class="movie-image"></div>
        <h4 class="movie-title">${item.title || item.name}</h4>
        <h6>Sep 12, 2013</h6>
        <div class="movie-rating">83%</div>
      </div>`;
    });
  elements.cardContainer.innerHTML = str;
}
let link=`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`

function swapPage(e){
  let textContent=e.target.textContent.trim();
  if(textContent==="On TV"){
    link=`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1
    `
    console.log("HELLO1")
  }else if(textContent==="For Rent"){
    link=`  https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1
    `
  }else if(textContent==="In Theaters"){
    link=`  https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1
    `
  }else if(textContent==="Streaming")
  link=`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  return link
}
function showSpinner() {
  elements.spinner.classList.remove("hide");
}

function clearSpinner() {
  elements.spinner.classList.add("hide");
}

let value = "";
function takeInput(e) {
  value = e.target.value;
}

function submitValue(e) {
  e.preventDefault();
  return value;
}

function clearFields() {
  value = "";
  elements.input.value = "";
}

export {
  renderCards,
  showSpinner,
  clearSpinner,
  takeInput,
  submitValue,
  clearFields,
  swapPage,
  link,
};
