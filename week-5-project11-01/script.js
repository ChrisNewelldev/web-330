/*
  Author: Chris Newell
  Date: 2025-07-27
  Filename: script.js
  Description: JS Callbacks for Table Reservation
*/

// 1. Create an in-memory object array for tables
let tables = [
  { number: 1, capacity: 4, isReserved: false },
  { number: 2, capacity: 2, isReserved: false },
  { number: 3, capacity: 6, isReserved: false },
  { number: 4, capacity: 4, isReserved: false },
  { number: 5, capacity: 2, isReserved: false },
];

// 2. Reserve table function
function reserveTable(tableNumber, callback, time) {
  let table = tables.find((t) => t.number === tableNumber);
  if (!table) {
    callback(`Table ${tableNumber} does not exist.`);
    return;
  }

  if (!table.isReserved) {
    table.isReserved = true;
    setTimeout(() => {
      callback(`Success! Table ${tableNumber} has been reserved.`);
    }, time);
  } else {
    callback(`Sorry, table ${tableNumber} is already reserved.`);
  }
}

// 3. Form submit handler
document
  .getElementById("reservationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let tableNumber = parseInt(document.getElementById("tableNumber").value);

    let messageEl = document.getElementById("message");

    if (!name || isNaN(tableNumber)) {
      messageEl.textContent =
        "Please enter your name and a valid table number.";
      return;
    }

    reserveTable(
      tableNumber,
      function (message) {
        messageEl.textContent = `${name}, ${message}`;
      },
      1000
    );
  });
