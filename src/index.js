// //////////////////////
// Rehearsal
// //////////////////////

// // 1. Select an element (button)
// const button = document.querySelector("#click-me");
// // 2. listen to a click on the button
// button.addEventListener("click", (event) => {
//   // 3. change the DOM (disabled and change text)
//   event.currentTarget.innerText = "Loading...";
//   event.currentTarget.disabled = true;
// });


// //////////////////////
// HTTP GET request
// //////////////////////
// 1. Select elements (submit button, keyword input, ul)
const keyword = document.querySelector("#keyword");
const submit = document.querySelector("#submit");
const results = document.querySelector("#results");

// 2. listen to a click on the submit button
submit.addEventListener("click", (event) => {
  // 2.5 Fetch the omdb API
  event.preventDefault();
  const url = `https://www.omdbapi.com/?s=${keyword.value}&apikey=adf1f2d7`;
  fetch(url)
    .then(response => response.json()) // parse JSON to JavaScript
    .then((data) => {
      console.log(data);
      const movies = data.Search;
      results.innerHTML = "";
      // 3. Change the DOM ( display the movies)
      movies.forEach((movie) => {
        results.insertAdjacentHTML(
          "beforeend",
          `<li class='list-inline-item'>
            <img src=${movie.Poster} alt="movie">
            <p>${movie.Title}</p>
          </li>`
        );
      });
    });
  console.log("I am in a different timeline!");
});



// //////////////////////
// HTTP POST request
// //////////////////////
const searchAlgoliaPlaces = (event) => {
  fetch("https://places-dsn.algolia.net/1/places/query", {
    method: "POST",
    body: JSON.stringify({ query: event.currentTarget.value })
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data.hits); // Look at local_names.default
    });
};

// 1. Select search input
const input = document.querySelector("#search");
// 2. Listening to a keyup on the search
input.addEventListener("keyup", searchAlgoliaPlaces);