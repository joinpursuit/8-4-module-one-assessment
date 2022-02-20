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
  //Return array of all movie titles (movies.title).
  //Return [] if the inputted array is empty.

  let movieTitles = [];

  for(let cinema of movies) {
    movieTitles.push(cinema.title);
  };
  return movieTitles;
};

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
  //Return highest metascore (movies.metascore).
  //Since the value for movies.metascore is a string, convert to number using Number() method.
  //If the pokemon does not exist then the stat score is 0.

  if(!movies || movies.length === 0) {
    return 0;
  };

  let highestMetaScoreSoFar = 0;

  for(let i = 0; i < movies.length; i++) {
    if(Number(movies[i].metascore) > highestMetaScoreSoFar) {
      highestMetaScoreSoFar = Number(movies[i].metascore);
    };
  };
  return highestMetaScoreSoFar;
};

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
  //Return average of IMBD ratings which are strings that need to be converted into a number. Use Number() and add all ratings then divide by movies.length.
  //If the inputted array is empty then return 0.

  if(!movies || movies.length === 0) {
    return 0;
  };

  let sumOfTotalImdbRatings = 0;
  let averageTotalImdbRatings = 0;

  for(let cinema of movies) {
    sumOfTotalImdbRatings += Number(cinema.imdbRating);
    averageTotalImdbRatings = sumOfTotalImdbRatings / movies.length;
  };
  return averageTotalImdbRatings;
};

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
  //Return new object with movies.rated as the key and the number of movies that have that rating as the value.
  //If the inputted array is empty, then return {};.

  let numberOfRated = {};

  for(let cinema of movies) {
    if(cinema.rated) {
      numberOfRated[cinema.rated] = (numberOfRated[cinema.rated] || 0) + 1;
    };
  };
  return numberOfRated;
};

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
function findById(movies, ID) {
  //Return movie object based on the ID param which represents imdbID.
  //If the inputted array or the ID param doesn't match, then return 'null'.

  if(!movies || movies.length === 0) {
    return null;
  };

  for(let cinema of movies) {
    if(cinema.imdbID === ID) {
      return cinema;
    };
  }
  return null;
};

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
  //Return movie objects matching given genre.
  //Case-insensitive. Use either .toLowerCase() or .toUpperCase().
  //If the inputted array is empty or no movies match the inputted genre, then return [].

  let matchingGenre = [];

  for(let cinema of movies) {
    let caseInsensitive = cinema.genre.toLowerCase();
    if(caseInsensitive.includes(genre.toLowerCase())) {
      matchingGenre.push(cinema)
    };
  };
  return matchingGenre
};

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
  //Return movie array of objects with a movies.released year <= inputted year.
  //Need to split movies.released to get the year, then convert that into a number.

  let moviesReleased = [];

  for(let cinema of movies) {
    let releasedArr = cinema.released.split(' ')
    if(Number(releasedArr[2]) <= year) {
      moviesReleased.push(cinema);
    };
  };
  return moviesReleased;
};

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
//Return movies.title of the movie with the highest movies.boxOffice amount.
//Convert movies.boxOffice into a number to compare to others.

  let biggestMovie = 0;


  for(let i = 0; i < movies.length; i++) {
    let boxOfficeNumber = parseFloat(movies[i].boxOffice.replace (/\$|,/g, ''));
    if(Number(boxOfficeNumber) > biggestMovie) {
      biggestMovie = Number(boxOfficeNumber)
      console.log(biggestMovie)
      return movies[i].title
    }
  }
  return null;
};

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
