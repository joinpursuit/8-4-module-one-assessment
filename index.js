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
  let movieTitles = [];
  for (let movie of movies){
    movieTitles.push(movie.title)
  }
  return movieTitles;
}
// Line 33 is looping through every movie in the movies array
// Line 34 is accessing each movie's title and is pushing it into the new array created on line 32, returning only/all the titles from each of the movies.

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
  let mostHighMeta = 0;
  for (let movie of movies){
    if (movie.metascore > mostHighMeta){
      mostHighMeta = movie.metascore
    }
  }
  return Number(mostHighMeta);
}
// Lines 55-56 -> while looping through the metascores of each movie in the movies array, whenever a movie's metascore is higher than the current one, it will replace the value within the variable mostHighMeta (which represents the highest metascore out of all of the movies in the movies array).

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
  let averageRating = 0;
  for (let movie of movies){
    averageRating += Number(movie.imdbRating)/movies.length
  }
  return averageRating;
}
// Line 77 -> an accumulation of IMDB ratings. The average rating is: made up of the sum of every movie's imdbRating, divided by the total number of movies in the array.

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
  let movieRating = {};
for (let movie of movies){
  if (!movieRating[movie.rated]){
  movieRating[movie.rated] = 1;
  } else {
    movieRating[movie.rated]++;
  }
}
  return movieRating;
}
// While looping through each movie in the array of movies, anytime a movie has a rating, all other movies with similar ratings will increase the count on the number of ratings.

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
  let movieID = null;
  for (let movie of movies){
    if (movie.imdbID === id){
      return movie;
    }
  }
  return movieID;
}
// Line 124 -> Whenever given the id of a movie, when the loop finds a movie with the exact same id, it will return the name of the movie.

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
  let genreFilter = [];
  for (let movie of movies){
    if (movie.genre.toLowerCase().includes(genre.toLowerCase())){
      genreFilter.push(movie)
    }
  }
  return genreFilter;
}
// Line 155 -> When a movie includes the given genre, the movie (along with all of its properties) will be added to the new array filtered by the specified genre.

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
  let releasedMovies = [];
  for (let movie of movies){
    if(movie.released.split(' ')[2] <= year){
      releasedMovies.push(movie)
    }
  }
  return releasedMovies;
}
// Lines 188-189 -> All movies where the `released` date is equal to or less than the year given will be added to the new ordered list/array. The second indice within movie.released refers to the year in which the movie was released, and compared to the given year (parameter).

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
  let biggestMovie = 0;
  let movieTitle = null;
for (let movie of movies){
  boxOfficeTotal = Number(movie.boxOffice.slice(1).split(",").join(""));
  if (boxOfficeTotal > biggestMovie){
    biggestMovie = boxOfficeTotal;
    movieTitle = movie.title;
  }
}
  return movieTitle;
}
// Line 211 -> Takes the amount ($) made in the boxOffice and removes the commas, making it one amount with no separate between each digit. 
// Lines 212-214 -> While looping through the movies array, every time the boxOffice amount is greater than the current amount (boxOfficeTotal), it will replace boxOfficeTotal with the new highest boxOffice amount. Using the dot notation, it is accessing the title of the movie with the highest boxOffice amount and placing that value inside of the created object, giving us the movie title.

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
