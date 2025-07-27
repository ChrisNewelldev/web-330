"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Chris Newell
      Date: 27/07/2025
      Filename: script.js
*/

$(document).ready(function () {
  $("article > h2").click(function () {
    const heading = $(this); // the clicked h2
    const list = heading.next(); // the next sibling element (ul or ol)
    const headingImage = heading.children("img"); // the img inside the heading

    list.slideToggle(500); // slide open/closed the list

    const imageSrc = headingImage.attr("src");
    headingImage.attr(
      "src",
      imageSrc === "plus.png" ? "minus.png" : "plus.png"
    );
  });
});
