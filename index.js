/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
let result = [];

if (movies.length === 0){
  return result;
}

for (movie of movies){
  result.push(movie.title);
//console.log(movie.title);

}




return result;
}

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {
let result = 0;
let highestScore =  0;

if (movies.length === 0){
  return result;
}

for (let i = 0; i < movies.length; i++){
  //console.log(movie.ratings[2].value);
  //console.log(parseInt(movie.ratings[2].value));
  if (parseInt(movies[i].ratings[2].value) > highestScore){
    highestScore = parseInt(movies[i].ratings[2].value);
    result = parseInt(highestScore);
  }
}

//console.log(typeof result);


return result;
}

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(movies) {
let result = 0;

if (movies.length === 0){
  return result;
}
//console.log(movies.length);

for (let i = 0; i < movies.length; i++){//loops through movies array 
  //console.log(typeof movies[i].imdbRating);
  result+= Number(movies[i].imdbRating);//parseInt did not work so change to Number 
  //console.log(result);
}


//console.log(result);


return result/movies.length;//total of the movies IMDB rating  /by the the amount of the movies
}

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies) {
let result = {};

if (movies.length === 0){
  return result;
}

for (let i = 0;i < movies.length; i++){
  if (result[movies[i].rated]){
    result[movies[i].rated]++;
  } else {
    result[movies[i].rated] = 1;
  }

}


return result;
}

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies,id) {
let result = null;

if (movies.length === 0){
  return result;
}


for (i = 0; i < movies.length; i++){
  if (movies[i].imdbID === id){
    result = movies[i];
  }


}


return result;
}

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) {
let result = [];
if (movies.length === 0){
  return result;
}


for (i = 0; i < movies.length; i++){
  //console.log(movies[i].genre.toLowerCase());
  if (movies[i].genre.toLowerCase().includes(genre.toLowerCase())  ){
    result.push(movies[i])
  }
}



return result;
}

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies,year) {
let result = [];
if (movies.length === 0){
  return result;
}

for (i = 0; i < movies.length; i++){
  let movieYear = movies[i].released;//get the string of the movie release date
  let newYear = movieYear.substr(movieYear.length-4,movieYear.length);//cut the string so I can get the year part only
  //console.log( newYear);
 if (parseInt(newYear) <= year){
result.push(movies[i]);
 }


}


return result;
}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie(movies) {
let result = "";
let biggestProfit = 0;

if (movies.length === 0){
  return null;
}

for (i = 0; i < movies.length; i++){
//  let boxOfficeString = movies[i].boxOffice.substr(1,movies[i].boxOffice.length);
let boxOfficeString = movies[i].boxOffice.replace(/[.,$]/g,"")//replace $ period and comma to whitespace so i can convert to number
//console.log(boxOfficeString);
  
  //console.log(typeof (movies[i].boxOffice));
  if (parseInt(boxOfficeString) > biggestProfit){
    biggestProfit = parseInt(boxOfficeString);
    result = movies[i].title;
  }
}



return result;
}

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
