"use strict";
/*    JavaScript 7th Edition
      Chapter 10
      Project 10-01

      Project to create a drag and drop jigsaw puzzle
      Author: Chris Newell
      Date: July 27, 2025

      Filename: project10-01.js
*/

// Reference to the puzzle board
let puzzleBoard = document.getElementById("puzzleBoard");

// Counter for the zIndex style of each puzzle piece
let zCounter = 1;

// Array of integers from 1 to 48
let intList = new Array(48);
for (let i = 0; i < 48; i++) intList[i] = i + 1;
intList.sort(() => 0.5 - Math.random());

// Create puzzle pieces
for (let i = 0; i < 48; i++) {
  let piece = document.createElement("img");
  piece.src = `piece${intList[i]}.png`;
  piece.style.top = `${Math.floor(i / 8) * 98 + 7}px`;
  piece.style.left = `${(i % 8) * 98 + 7}px`;
  piece.draggable = false;
  puzzleBoard.appendChild(piece);
}

// Grab all pieces
let pieces = document.querySelectorAll("div#puzzleBoard img");

// Add event listeners for drag and drop
pieces.forEach((piece) => {
  piece.addEventListener("pointerdown", grabPiece);
});

let pointerX, pointerY, pieceX, pieceY;

function grabPiece(e) {
  pointerX = e.clientX;
  pointerY = e.clientY;
  e.target.style.touchAction = "none";
  zCounter++;
  e.target.style.zIndex = zCounter;
  pieceX = e.target.offsetLeft;
  pieceY = e.target.offsetTop;

  e.target.addEventListener("pointermove", movePiece);
  e.target.addEventListener("pointerup", dropPiece);
}

function movePiece(e) {
  let diffX = e.clientX - pointerX;
  let diffY = e.clientY - pointerY;
  e.target.style.left = `${pieceX + diffX}px`;
  e.target.style.top = `${pieceY + diffY}px`;
}

function dropPiece(e) {
  e.target.removeEventListener("pointermove", movePiece);
  e.target.removeEventListener("pointerup", dropPiece);
}
