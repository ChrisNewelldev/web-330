/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Chris Newell
  Date: July 26, 2025
  Filename: script.js
*/

"use strict";

// Closure-based character generator
function createCharacter(name, gender, characterClass) {
  return (function () {
    return {
      name,
      gender,
      characterClass,
      describe: function () {
        return `${this.name} is a ${this.gender} ${this.characterClass}.`;
      },
    };
  })();
}

document.getElementById("generateHero").addEventListener("click", function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("heroName").value;
  const gender = document.getElementById("heroGender").value;
  const characterClass = document.getElementById("heroClass").value;

  // Create character
  const character = createCharacter(name, gender, characterClass);

  // Display character information
  const outputDiv = document.getElementById("characterOutput");
  outputDiv.textContent = character.describe();
});
