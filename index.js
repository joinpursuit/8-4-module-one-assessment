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
  //if there is no movie return empty array
  if (movies.length === 0){
    return [];
  }
  //creates a variable to hold all movie titles
  let movieTitles = [];
  //loop through the movies array 
  for(let i = 0; i < movies.length; i++){
    //push movie titles at iteration to the empty array 
    movieTitles.push(movies[i].title)
  }
  //return array after all the movie titles have been pushed in
    return movieTitles;
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
  //if there is no movie return 0
  if(movies.length === 0){
    return 0;
  }
  //variable to hold the highest meta to equal 0 for comparison 
  let highestMeta = 0; 

  //loop through movies array 
  for(let i = 0; i < movies.length; i++){
    //conditional statement if movie at iteration metascore is greater than highestMeta  
    if(movies[i].metascore > highestMeta){
      //now that iteration of metascore is not the highest
      highestMeta = movies[i].metascore
    }

  }
  //return the highest meta score as a number instead of string 
    return Number(highestMeta);
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

  //if there are no movies return 0
  if(movies.length === 0){
    return 0; 
  }
  //create a variable to hole the average rating equal to 0
  let averageRating = 0;
  //loop through the movies array
  for(let i = 0; i < movies.length; i++){
    //create a variable called num to represent movies iteration imdbRating as a number 
    let num = Numbers(movies[i].imdbRating);
           //console.log(movies[i].imdbRating ) 
           console.log(num)
        averageRating += num 

        //console.log(averageRating.toFixed(2))
        //console.log(Math.floor(averageRating))
  }
    return Math.floor((averageRating / movies.length)); 
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
  if(movies.length === 0){
    return {};
  }

  movieRatingCount = {}

  for(let i = 0; i < movies.length; i++){
    console.log(movies[i].rated)


    movieRatingCount[movies[i].rated] = movieRatingCount[movies[i].rated] ? movieRatingCount[movies[i].rated] + 1 : 1;
  }

  return movieRatingCount;
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
  if(movies.length === 0 || id !== id){
    return null;
  }
    for(let i = 0; i <movies.length; i++){
      if(movies[i].imdbID === id){
        return movies[i];
      } else {
        return null;
      }
    }

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
  if(movies.length === 0 || genre !== genre){
    return [];
  }
    let noMatch = [];
    letGenreMatch = [];

    for(let i = 0; i < movies.length;i++ ){
      if(movies[i].genre === genre){
        
        letGenrematch.push(movies[i].title);
    
      } else {
        return noMatch;
      }
    
         
    }
      //return letGenreMatch; 
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

  let movieRelease = [];

  //console.log(year);
  for (let i= 0; i < movies.length; i++){
    //console.log(movies[i].released) - check
    console.log(movies[i])
    if(movies[i].released <= year){
      movieRelease = movies[i]
    }

  }
    return movieRelease
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

//TOY STORY 4 HAD THE BIGGER BOX OFFICE THAN INCREDIBLES 2 I DON'T KNOW WHY THE TEST IS NOT PASSING
function getBiggestBoxOfficeMovie(movies) {

  if (movies.length === 0){
    return null;
  }

  let highesBoxOffice = '';

  for(let i = 0; i < movies.length; i++){
    if(movies[i].boxOffice > highesBoxOffice){
      highesBoxOffice = movies[i].title
      //console.log(movies[i].title)
    }
  }
  //console.log(highesBoxOffice)
  return highesBoxOffice;
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
