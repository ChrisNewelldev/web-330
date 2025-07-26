"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-02

      Project to save field values to session storage
      Author: Chris Newell
      Date: July 26, 2025

      Filename: project09-02a.js
*/

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded");

  const form = document.getElementById("riderForm");
  if (!form) {
    console.error("Form not found");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent default form behavior

    console.log("Form submitted");

    // Grab values
    const fields = [
      "riderName",
      "ageGroup",
      "bikeOption",
      "routeOption",
      "accOption",
      "region",
      "miles",
      "comments",
    ];

    fields.forEach((field) => {
      const element = document.getElementById(field);
      if (element) {
        sessionStorage.setItem(field, element.value);
        console.log(`${field}: ${element.value}`);
      } else {
        console.warn(`Missing field: ${field}`);
      }
    });

    // Go to confirmation page
    location.href = "project09-02b.html";
  });
});
