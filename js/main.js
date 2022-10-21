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
const ticketGenerator = document.getElementById(`generator`);

// Dichiarazione di variabili fuori dall'agloritmo per riutilizzo successivo
let valueAge = "";
let passengerAge ="";
let price="";

// ALGORITMO
function selectOption(){
    let passengerAge = document.getElementById(`passenger_age`);
    let valueAge = passengerAge.option[passengerAge.selectedIndex].value;
}
console.log(typeof passengerAge);
console.log(typeof valueAge);

ticketGenerator.addEventListener(`click`, function(){
    
    let price = kmPrice * tripLenght;
    console.log(price);

    if (valueAge < 18){
    price = kmPrice * tripLenght;
    price -= price * minorDiscount;
    console.log(price);
    }
    else if (valueAge >= 65){
    price = kmPrice * tripLenght;
    price -= price * oldDiscount;
    console.log(price);
    }
})







