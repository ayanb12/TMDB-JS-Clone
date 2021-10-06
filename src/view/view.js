import { elements } from "./base";
function renderCards(arr) {
  let month = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  let str = "";
  arr
    .filter((item, idx) => idx <= 6)
    .forEach((item) => {
      str += `<div class="movie-card">
        <div class="movie-image">
        <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" alt="" crossorigin="anonymous">

        </div>
        <h4 class="movie-title">${item.title || item.name}</h4>
        <h6>27 aug,2020</h6>
        <div class="movie-rating">${parseInt(
          Number(item.vote_average / 10) * 100
        )}</div>
      </div>`;
    });
  elements.cardContainer.innerHTML = str;
}
function renderTrending(arr) {
  let month = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  let str = "";
  arr
    .filter((item, idx) => idx <= 6)
    .forEach((item) => {
      str += `<div class="movie-card">
            <div class="movie-image">
            <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" alt="" crossorigin="anonymous">
            
            </div>
            <h4 class="movie-title">${item.title || item.name}</h4>
            <h6>${
              month[Number(item.release_date.substring(5, 7)) - 1]
            }, ${item.release_date.substring(0, 4)}</h6>
            <div class="movie-rating">${parseInt(
              Number(item.vote_average / 10) * 100
            )}</div>
            </div>`;
    });
  elements.trendingCardContainer.innerHTML = str;
}
function changepage(e){
  e.preventDefault()
  elements.page1.classList.add("hide")
  elements.search.classList.remove("hide")
}

function renderLatest(arr, x) {
  let str = "";
  arr
    .filter((item, idx) => idx >= 4 && idx <= 7)
    .forEach((item) => {
      console.log(item.poster_path)

      str += `<div class="movie-card">
      <div class="movie-image">
      
      <img src="https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}" alt="" crossorigin="anonymous">

      </div>
      <h4 class="movie-title">${item.title || item.name}</h4>
      <h6>${item.first_air_date || item.release_date || ""} </h6>
    </div>`;
    });
  elements.latestCardContainer.innerHTML = str;
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
function renderSearch(arr){
  let month = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  let str = "";
  arr
    .filter((item, idx) => idx <= 6)
    .forEach((item) => {
      str +=`            <div class="movie-info">
      <div class="movie-image">
      <img src="https://www.themoviedb.org/t/p/w94_and_h141_bestv2${item.poster_path }" alt="" crossorigin="anonymous">
  </div>
  <div class="movie-details">
      <h3>${item.original_name || item.original_title}</h3>
      <h3>${item.first_air_date || item.release_date || ""}</h3>
      <p>${item.overview}</p>
  </div>
  </div>`
});
elements.movieinfo.innerHTML=str;
}
function clearFields() {
  value = "";
  elements.input.value = "";
}
function renderFreeToWatchCards(arr){
    let month = [
      "Jan",
      "Feb",
      "March",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
  
    let str = "";
    let date="";
    arr
      .filter((item, idx) => idx <= 6)
      .forEach((item) => {
        date=item.release_date||(item.first_air_date);
        console.log(date);
        console.log(item.backdrop_paths)
        str += `<div class="movie-card">
              <div class="movie-image">
              <img src="https://image.tmdb.org/t/p/w500/${item.poster_path} "  alt="" crossorigin="anonymous">
              </div>
              <h4 class="movie-title">${item.title || item.name}</h4>
              <h6>
              ${date.substring(8,10)}
              ${
               
                month[Number(date.substring(5, 7)) - 1]
              }, ${
               
                date.substring(0, 4)}</h6>
              <div class="movie-rating">${parseInt(
                Number(item.vote_average / 10) * 100
              )}</div>
              </div>`;
      });
    elements.freetowatchCards.innerHTML = str;
  }
  function backtomain(e){
    elements.page1.classList.remove("hide")
    elements.search.classList.add("hide")
  
  }

export {
  renderCards,
  showSpinner,
  clearSpinner,
  takeInput,
  submitValue,
  clearFields,
  renderLatest,
  renderTrending,
  renderFreeToWatchCards,
  changepage,
  backtomain,
  renderSearch,
};
