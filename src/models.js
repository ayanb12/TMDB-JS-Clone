import { API_KEY } from "./config/config";
import {elements} from "./view/base"
// For storing and fetching any data
let link=`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`

function swapPage(e){
  let textContent=e.target.textContent.trim();
  for(let i=0;i<elements.categories.children.length;i++){
    if(elements.categories.children[i].classList.contains("active")){
      elements.categories.children[i].classList.remove("active")
    }
  }
  if(textContent==="On TV"){
    link=`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1
    `
    e.target.classList.add("active")
    console.log("HELLO1")
  }else if(textContent==="For Rent"){
    link=`  https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1
    `
    e.target.classList.add("active")

  }else if(textContent==="In Theaters"){
    link=`  https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1
    `
    e.target.classList.add("active")

  }else if(textContent==="Streaming"){
  link=`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  e.target.classList.add("active")
  }

  return link
}
let linktrending=`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`

function swapTrending(e){
  for(let i=0;i<elements.trendingCategories.children.length;i++){
    if(elements.trendingCategories.children[i].classList.contains("active")){
      elements.trendingCategories.children[i].classList.remove("active")
    }
  }

let text=e.target.textContent.trim();

if(text==="Today"){
  linktrending=`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}` 
  e.target.classList.add("active")

}else if(text==="This Week"){
  linktrending=`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
  e.target.classList.add("active")

}
return linktrending;
}

async function fetchPopularMovies(url=link) {
  let result = await fetch(
    `${url}`
    
  );
  let data = await result.json();
    console.log(data)
  return data;
}
let linkLatest=`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
async function fetchLatestData(url=linkLatest){
  let result = await fetch(
    `${url}`
    
  );
  let data = await result.json();
    return data
}
async function fetchTrendingData(url=linktrending){
  let result = await fetch(
    `${url}`
    
  );
  let data = await result.json();
    return data
}


fetchLatestData()
async function fetchSearchResult(query) {
  let result = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  let data = await result.json();

  return data;
}
export { fetchPopularMovies, fetchSearchResult,fetchLatestData ,fetchTrendingData,swapPage,swapTrending};
