"use strict";

// VARIABILI
// Nome passeggero
let passengerName = document.getElementById(`passenger`).value;
console.log(passengerName);
// Km da percorrere
let tripLenght = document.getElementById(`trip_lenght_km`).value;
console.log(tripLenght);
// Tariffa a km
const kmPrice=0.21;
console.log(kmPrice);
// Sconto
const minorDiscount = 0.2;
const oldDiscount = 0.4;
let discount="";
// Bottone
const ticketGenerator = document.getElementById(generator);

// Prezzo iniziale biglietto


// ALGORITMO



ticketGenerator.addEventListener(`click`, function(){
    let passengerAge = document.querySelector(`.passenger_age`).value;
    console.log(minorDiscount, oldDiscount, discount, passengerAge);   
    let price = kmPrice * tripLenght;
    console.log(price);

    if (passengerAge < 18){
    price = kmPrice * tripLenght;
    price -= price * minorDiscount;
    console.log(price);
    }
    else if (passengerAge >= 65){
    price = kmPrice * tripLenght;
    price -= price * oldDiscount;
    console.log(price);
    }
})







