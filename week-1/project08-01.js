"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Chris Newell
      Date:   05/31/2025

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/

let timer = {
  mins: 0,
  secs: 0,
  running: false,
  timerID: null,

  start: function () {
    if (!this.running) {
      this.running = true;
      this.timerID = setInterval(() => this.countdown(), 1000);
    }
  },

  pause: function () {
    clearInterval(this.timerID);
    this.running = false;
  },

  countdown: function () {
    if (this.secs > 0) {
      this.secs--;
    } else if (this.mins > 0) {
      this.mins--;
      this.secs = 59;
    } else {
      this.pause();
    }
    minBox.value = this.mins;
    secBox.value = this.secs;
  },
};

/*--------------- Interface Code -----------------*/

let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

runPauseTimer.onclick = function () {
  if (!timer.running) {
    timer.mins = parseInt(minBox.value, 10);
    timer.secs = parseInt(secBox.value, 10);
    timer.start();
  } else {
    timer.pause();
  }
};
