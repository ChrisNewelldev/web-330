"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02
      Author: Chris Newell
      Date: July 27, 2025
      Filename: script.js
*/

let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

postalCode.onblur = function () {
  let zip = postalCode.value.trim();
  let code = country.value;

  if (zip === "") return;

  let url = `https://api.zippopotam.us/${code}/${zip}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error("Invalid postal code");
      return response.json();
    })
    .then((data) => {
      place.value = data.places[0]["place name"];
      region.value = data.places[0]["state"];
    })
    .catch((error) => {
      place.value = "Not found";
      region.value = "Not found";
    });
};
