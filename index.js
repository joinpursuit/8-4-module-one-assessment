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

// default would be an empty arr []
//need to access movies[i].title and push them into an array.
function getAllMovieTitles(movies) {
  let movieTitleArray = [];
  for (let movie of movies){
    movieTitleArray.push(movie.title)
  }
  return movieTitleArray
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
//default value wud be a 0
// need to access movies[i].metascore and compare
function getHighestMetascore(movies) {
  if(movies.length === 0){
    return 0;
  }
let currentMetaScore = movies[0].metascore;
for (let i = 1; i < movies.length; i++){
  if(currentMetaScore < movies[i].metascore){
    currentMetaScore = movies[i].metascore;
  }
}
let integer = parseInt(currentMetaScore);
return integer;
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
// . default would be 0 if movies.length === 0
// would access movies[i].imbd rating and divide by movies.length to get the avg.
// for of loop wud work in this case
// **** also need to use parseint since imbd rating is a string.
function getAverageIMDBRating(movies) {
  if(movies.length === 0){
    return 0;
  }
  let rating = 0;
  for (let movie of movies){
let integer = parseFloat(movie.imdbRating, 1);
rating += integer;
  }
  rating = rating / movies.length; 
  return rating;
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

// the returned object should have the following format: somenewobj[movie.rated] = the number of those ratings. 
// may have to do multiple if statments to test out each rating. --> there are 3 ratings: 'G', 'PG', "PG-13" by simply consoling logging movie.rated and pushing into an empty array.
// the default will return an empty obj,

function countByRating(movies) {
let objOfRatings = { };
  if(movies.length === 0){
  return objOfRatings;
}
let stringpg13 = 'PG-13';
let numOfTimes = 0;
for (let movie of movies){
  if(movie.rated = 'G'){
    numOfTimes += 1;
    objOfRatings.G = numOfTimes;
  }
  if(movie.rated = 'PG'){
    numOfTimes += 1;
    objOfRatings.PG = numOfTimes;
  }
  if(movie.rated = 'PG-13'){
    numOfTimes += 1;
    objOfRatings[stringpg13] = numOfTimes;
  }
}
return objOfRatings;
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
function findById(movies, id) {
if(movies.length === 0){
  return null;
}
let movieObj = [];
for (let movie of movies){
  if(movie.imdbID === id){
    movieObj.push(movie.imdbID);
  } else{
movieObj = null;
  }
  
}
return movieObj;
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
if(movies.length === 0){
  return [];
}

let genreObject = [];
for (let movie of movies){
  if(movie.genre === genre){
    genreObject.push(movie.title)
  }
  return genreObject;
}
return [];
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
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
  if(movies.length === 0){
    return [];
  }

  let movieObject = [];
  for (let movie of movies){
    if(movie.released[2] >= year){
      movieObject.push(movie.title);
    }
    return movieObject;
  }
  return [];
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
  if(movies.length === 0){
    return null;
  }
  let moviename = '';
  let biggestBoxOffice = (movies[0].boxOffice).substring(1);
  biggestBoxOffice = parseInt(biggestBoxOffice) * 1000000;
  for(let i = 1; i < movies.length; i++){
    let boxoffices = (movies[i].boxOffice).substring(1);
    boxoffices = parseInt(boxoffices) * 1000000;
    if(boxoffices > biggestBoxOffice){
      moviename = movies[i].title;
    }
  }
  return moviename;
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
