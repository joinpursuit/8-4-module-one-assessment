# End-Module Assessment

This challenge is designed to assess the JavaScript skills you have gained so far.

## Assessment Setup

### Getting started

1. Fork and clone this repository.

1. Navigate to the cloned repository's directory on your command line. Then, run the following command:

   ```
   npm install
   ```

   This will install the libraries needed to run the tests.

1. Open up the repository in VSCode. Follow the instructions below to complete the Lab.

### Tests

To run the tests, you can run the following command from the command line. You will need to be in the root directory of your local directory.

```
npm test
```

This will run the test output once.

### Test watcher

If you'd like, you can have the tests run constantly. This means that each time you save your file, your tests will re-run. To do so, you can run the following:

```
npm run watch
```

Follow the on-screen prompts to exit out of the constant runner.

### Run file

If you want to manually test out your file, you can do so by running the following command.

```
node index.js
```

The output will be printed to your terminal.

## Assessment instructions

### Existing files

This repository contains the following files that you may need to edit or want to take a look at:

- `movies.js`: This is the data that you can expect to be inserted into your function.
- `index.js`: This is where you will write your code. This is the only file you should need to edit. This file contains a variable, `exampleMovies`, that contains all of the movies from the `movies.js` file. You may use this variable if you'd like to run the `index.js` file from your command line.
- `__tests__/index.test.js`: All of the tests for the functions.
- `__tests__/fixtures/alternate-movies.js`: Another array of movies that the tests will make use of, in addition to those movies from the `movies.js` file.

### Tasks

After getting this repository running on your current machine, you will then need to do the following for each function:

- [ ] Complete the function so that the tests pass.
- [ ] Add and commit your changes.
- [ ] Push your code up to GitHub.

Please add and commit regularly. You _should not_ end up with a single additional commit for this assessment.

### Function descriptions

You will find examples and descriptions in both the `index.js` file and in the `__tests__/index.test.js` file.

## Learning Objectives Assessed

The following learning objectives will be assessed in this assessment:

- Create and assign values to variables.
- Use arithmetic operators to build simple mathematical equations.
- Represent logical assertions using `===`, `&&`, `||`, and `!`.
- Conditionally run code based on values and expressions.
- Create functions with parameters using the function declaration syntax.
- Return values from functions.
- Interpret JSDoc function comments.
- Interpret test output in order to take actionable steps in code.
- Access elements in an array through bracket notation.
- Access values in an object through bracket and dot notation.
- Update values in an object with bracket and dot notation.
- Differentiate between arrays and objects.
- Write a `for` loop with a variable number of iterations.
- Write `for...of` loops to iterate over arrays.
- Use the command line to navigate via absolute and relative paths.
- Install and use the `code` command to open VSCode.
- Stage files with `git add`.
- Commit files with a sensible commit message using `git commit -m`.
- Fork and clone a repository.
- Create a pull request using a forked repository.
- Run JavaScript files with the `node` command.
- Apply the accumulator pattern to problems that return strings, numbers, or booleans.
- Apply the accumulator pattern to problems that return arrays.
