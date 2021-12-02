'use strict';

//DATA
const bookings = [];
const createBooking = function (
  flightNum = -1,
  numPassengers = 0,
  price = 999
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking(312);
//EXPRESSIONS

//EXECUTIONS
