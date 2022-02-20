const {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
} = require("..");

const movies = require("../movies");
const alternative = require("./fixtures/alternative-movies");

describe("getAllMovieTitles()", () => {
  test("should return all of the movie titles in an array", () => {
    const actual = getAllMovieTitles(movies);
    const expected = [
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
    expect(actual).toEqual(expected);
  });
  test("should dynamically change depending on the movies inputted", () => {
    const actual = getAllMovieTitles(alternative);
    const expected = ["Black Panther", "Wonder Woman", "Jaws", "Skyfall"];
    expect(actual).toEqual(expected);
  });
  test("should return an empty array if there are no movies", () => {
    const actual = getAllMovieTitles([]);
    const expected = [];
    expect(actual).toEqual(expected);
  });
});

describe("getHighestMetascore()", () => {
  test("should return highest Metascore of all movies as a number", () => {
    const actual = getHighestMetascore(movies);
    const expected = 96;
    expect(actual).toEqual(expected);
  });
  test("should dynamically change depending on the movies inputted", () => {
    const actual = getHighestMetascore(alternative);
    const expected = 88;
    expect(actual).toEqual(expected);
  });
  test("should return `0` if there are no movies", () => {
    const actual = getHighestMetascore([]);
    const expected = 0;
    expect(actual).toEqual(expected);
  });
});

describe("getAverageIMDBRating()", () => {
  test("should return the average IMDB rating across all movies", () => {
    const actual = getAverageIMDBRating(movies);
    const expected = 7.76;
    expect(actual).toBeCloseTo(expected, 2);
  });
  test("should dynamically change depending on the movies inputted", () => {
    const actual = getAverageIMDBRating(alternative);
    const expected = 7.6;
    expect(actual).toBeCloseTo(expected, 2);
  });
  test("should return `0` if there are no movies", () => {
    const actual = getAverageIMDBRating([]);
    const expected = 0;
    expect(actual).toBeCloseTo(expected, 2);
  });
});

describe("countByRating()", () => {
  test("should return an object where the keys are ratings and the values are the number of movies with that rating", () => {
    const actual = countByRating(movies);
    const expected = { G: 3, PG: 7 };
    expect(actual).toEqual(expected);
  });
  test("should dynamically change depending on the movies inputted", () => {
    const actual = countByRating(alternative);
    const expected = { PG: 1, "PG-13": 3 };
    expect(actual).toEqual(expected);
  });
  test("should return an empty object if there are no movies", () => {
    const actual = countByRating([]);
    const expected = {};
    expect(actual).toEqual(expected);
  });
});

describe("findById()", () => {
  test("should return the entire movie based on the IMDB ID", () => {
    const id = "tt0892769";
    const actual = findById(movies, id);
    expect(actual.imdbID).toEqual("tt0892769");
    expect(actual.title).toEqual("How to Train Your Dragon");
    expect(actual.poster).toEqual(
      "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_SX300.jpg"
    );
  });
  test("should dynamically change depending on the IMDB ID inputted", () => {
    const id = "tt1979376";
    const actual = findById(movies, id);
    expect(actual.imdbID).toEqual("tt1979376");
    expect(actual.title).toEqual("Toy Story 4");
    expect(actual.poster).toEqual(
      "https://m.media-amazon.com/images/M/MV5BMTYzMDM4NzkxOV5BMl5BanBnXkFtZTgwNzM1Mzg2NzM@._V1_SX300.jpg"
    );
  });
  test("should dynamically change depending on the movies inputted", () => {
    const id = "tt1074638";
    const actual = findById(alternative, id);
    expect(actual.imdbID).toEqual("tt1074638");
    expect(actual.title).toEqual("Skyfall");
    expect(actual.poster).toEqual(
      "https://m.media-amazon.com/images/M/MV5BMWZiNjE2OWItMTkwNy00ZWQzLWI0NTgtMWE0NjNiYTljN2Q1XkEyXkFqcGdeQXVyNzAwMjYxMzA@._V1_SX300.jpg"
    );
  });
  test("should return `null` if the movie cannot be found", () => {
    const id = "tt1074638";
    const actual = findById(movies, id);
    const expected = null;
    expect(actual).toEqual(expected);
  });
  test("should return `null` if there are no movies", () => {
    const id = "tt1074638";
    const actual = findById([], id);
    const expected = null;
    expect(actual).toEqual(expected);
  });
});

describe("filterByGenre()", () => {
  test("should return all movies that include the specified genre", () => {
    const genre = "Mystery";
    const actual = filterByGenre(movies, genre);
    const expected = [
      movies[2], // Coco
    ];
    expect(actual).toEqual(expected);
  });
  test("should dynamically change depending on the genre inputted", () => {
    const genre = "Fantasy";
    const actual = filterByGenre(movies, genre);
    const expected = [
      movies[0], // Toy Story 4
      movies[1], // Inside Out
      movies[2], // Coco
      movies[5], // How to Train Your Dragon
      movies[8], // Fantasia
      movies[9], // James and the Giant Peach
    ];
    expect(actual).toEqual(expected);
  });
  test("should dynamically change depending on the movies inputted", () => {
    const genre = "Action";
    const actual = filterByGenre(alternative, genre);
    const expected = [
      alternative[0], // Black Panther
      alternative[1], // Wonder Woman
      alternative[3], // Skyfall
    ];
    expect(actual).toEqual(expected);
  });
  test("should be case-insensitive", () => {
    const genre = "FANTASY";
    const actual = filterByGenre(movies, genre);
    const expected = [
      movies[0], // Toy Story 4
      movies[1], // Inside Out
      movies[2], // Coco
      movies[5], // How to Train Your Dragon
      movies[8], // Fantasia
      movies[9], // James and the Giant Peach
    ];
    expect(actual).toEqual(expected);
  });
  test("should return an empty array if no movies match the genre", () => {
    const genre = "Horror";
    const actual = filterByGenre(movies, genre);
    const expected = [];
    expect(actual).toEqual(expected);
  });
  test("should return an empty array if there are no movies", () => {
    const genre = "Action";
    const actual = filterByGenre([], genre);
    const expected = [];
    expect(actual).toEqual(expected);
  });
});

describe("getAllMoviesReleasedAtOrBeforeYear()", () => {
  test("should return all movies where the `released` date is equal to or less than the year given", () => {
    const year = 2000;
    const actual = getAllMoviesReleasedAtOrBeforeYear(movies, year);
    const expected = [
      movies[7], // The Lion King
      movies[8], // Fantasia
      movies[9], // James and the Giant Peach
    ];
    expect(actual).toEqual(expected);
  });
  test("should dynamically change depending on the year inputted", () => {
    const year = 1950;
    const actual = getAllMoviesReleasedAtOrBeforeYear(movies, year);
    const expected = [
      movies[8], // Fantasia
    ];
    expect(actual).toEqual(expected);
  });
  test("should dynamically change depending on the movies inputted", () => {
    const year = 2017;
    const actual = getAllMoviesReleasedAtOrBeforeYear(alternative, year);
    const expected = [
      alternative[1], // Wonder Woman
      alternative[2], // Jaws
      alternative[3], // Skyfall
    ];
    expect(actual).toEqual(expected);
  });
  test("should return an empty array if no movies were released at or before the given year", () => {
    const year = 1940;
    const actual = getAllMoviesReleasedAtOrBeforeYear(movies, year);
    const expected = [];
    expect(actual).toEqual(expected);
  });
  test("should return an empty array if there are no movies", () => {
    const year = 2000;
    const actual = getAllMoviesReleasedAtOrBeforeYear([], year);
    const expected = [];
    expect(actual).toEqual(expected);
  });
});

describe("getBiggestBoxOfficeMovie()", () => {
  test("should return the name of the movie with the highest box office", () => {
    const actual = getBiggestBoxOfficeMovie(movies);
    const expected = "Incredibles 2";
    expect(actual).toEqual(expected);
  });
  test("should dynamically change depending on the movies inputted", () => {
    const actual = getBiggestBoxOfficeMovie(alternative);
    const expected = "Black Panther";
    expect(actual).toEqual(expected);
  });
  test("should return `null` if there are no movies", () => {
    const actual = getBiggestBoxOfficeMovie([]);
    const expected = null;
    expect(actual).toEqual(expected);
  });
});
