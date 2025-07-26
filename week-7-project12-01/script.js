console.log("Script is running");
/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author: Chris Newell
  Date: 2025-07-27
  Filename: chefs.js
*/

("use strict");

// Array of chef objects
let chefs = [
  {
    name: "Gordon Ramsay",
    specialty: "British Cuisine",
    weakness: "Short temper",
    restaurantLocation: "London, UK",
  },
  {
    name: "Massimo Bottura",
    specialty: "Italian Fine Dining",
    weakness: "Perfectionism",
    restaurantLocation: "Modena, Italy",
  },
  {
    name: "Dominique Crenn",
    specialty: "French Modernist",
    weakness: "Overworking",
    restaurantLocation: "San Francisco, CA",
  },
];

// Helper to simulate delay and random failure
function simulateFetch(chef, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.7) {
        resolve(chef);
      } else {
        reject("Failed to load chef data.");
      }
    }, delay);
  });
}

// Chef data retrieval functions
function retrieveChef1() {
  return simulateFetch(chefs[0], 2000);
}

function retrieveChef2() {
  return simulateFetch(chefs[1], 3000);
}

function retrieveChef3() {
  return simulateFetch(chefs[2], 4000);
}

// Display data or error
function displayChef(data, elementId) {
  const el = document.getElementById(elementId);
  el.innerHTML = `
    <h2>${data.name}</h2>
    <p><strong>Specialty:</strong> ${data.specialty}</p>
    <p><strong>Weakness:</strong> ${data.weakness}</p>
    <p><strong>Restaurant Location:</strong> ${data.restaurantLocation}</p>
  `;
}

function displayError(message, elementId) {
  const el = document.getElementById(elementId);
  el.innerHTML = `<p class="error">${message}</p>`;
}

// Use Promise.allSettled to update UI
Promise.allSettled([retrieveChef1(), retrieveChef2(), retrieveChef3()]).then(
  (results) => {
    results.forEach((result, index) => {
      const elId = `chef${index + 1}`;
      if (result.status === "fulfilled") {
        displayChef(result.value, elId);
      } else {
        displayError(result.reason, elId);
      }
    });
  }
);
