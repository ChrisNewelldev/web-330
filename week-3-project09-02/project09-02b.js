"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-02

      Project to read field values from session storage
      Author: Chris Newell
      Date: July 26, 2025

      Filename: project09-02b.js
*/

document.addEventListener("DOMContentLoaded", () => {
  console.log("Loading values from sessionStorage...");

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
    const el = document.getElementById(field);
    const value = sessionStorage.getItem(field);
    if (el && value !== null) {
      el.textContent = value;
      console.log(`${field}: ${value}`);
    } else {
      console.warn(`Missing element or value for ${field}`);
    }
  });
});
