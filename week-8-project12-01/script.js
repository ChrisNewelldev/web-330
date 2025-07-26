/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author: Chris Newell
  Date: 2025-07-27
  Filename: script.js
*/

"use strict";

const movies = [
  {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    synopsis:
      "A skilled thief is offered a chance to have his past crimes forgiven if he can plant an idea into a target's subconscious.",
  },
  {
    title: "The Matrix",
    director: "Lana and Lilly Wachowski",
    year: 1999,
    synopsis:
      "A hacker discovers reality is a simulation and joins a rebellion against the machines controlling it.",
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    synopsis:
      "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.",
  },
];

function fetchMovie(title) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const movie = movies.find(
        (movie) => movie.title.toLowerCase() === title.toLowerCase()
      );
      if (movie) {
        resolve(movie);
      } else {
        reject("Movie not found.");
      }
    }, 1000);
  });
}

document
  .getElementById("movie-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const titleInput = document.getElementById("title-input").value.trim();
    const errorMessage = document.getElementById("error-message");
    const title = document.getElementById("movie-title");
    const director = document.getElementById("movie-director");
    const year = document.getElementById("movie-year");
    const synopsis = document.getElementById("movie-synopsis");

    errorMessage.textContent = "";
    title.textContent = "";
    director.textContent = "";
    year.textContent = "";
    synopsis.textContent = "";

    try {
      const movie = await fetchMovie(titleInput);
      title.textContent = movie.title;
      director.textContent = `Director: ${movie.director}`;
      year.textContent = `Year: ${movie.year}`;
      synopsis.textContent = `Synopsis: ${movie.synopsis}`;
    } catch (error) {
      errorMessage.textContent = error;
    }
  });
