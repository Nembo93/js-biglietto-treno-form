

// VARIABILI
// Nome passeggero
let passengerName = document.getElementById(`passenger`).value;
console.log(passengerName);

// Tariffa a km
const kmPrice=0.21;
console.log(kmPrice);
// Sconto
const minorDiscount = 0.2;
const oldDiscount = 0.4;
let discount="";
console.log(minorDiscount, oldDiscount, discount)
// Bottone
const ticketGenerator = document.getElementById(`generator`);

// Dichiarazione di variabili fuori dall'agloritmo per riutilizzo successivo

// ALGORITMO
// function select_option(){
//     let passengerAge = document.getElementById(`passenger_age`);
//     let valueAge = passengerAge.options [passengerAge.selectedIndex].value;
// }
//     console.log(typeof passengerAge);
//     console.log(typeof valueAge);



ticketGenerator.addEventListener(`click`, function(){

    // Estrae valori da select
    let passenger_age = document.getElementById(`passenger_age`);
    let age_choice = passenger_age.selectedIndex;
    let value_choice = passenger_age.options[age_choice];
    let valueAge = value_choice.value;
    let textAge = value_choice.text;
    console.log(valueAge, typeof valueAge);
    console.log(textAge);

    // Km da percorrere
    let tripLenght = document.getElementById(`trip_lenght_km`).value;
    console.log(tripLenght, typeof tripLenght);
    
    let price = kmPrice * tripLenght;
    console.log(price);

    if (valueAge < 18){
    price = (kmPrice * tripLenght) - (price * minorDiscount);
    console.log(price);
    }
    else if (valueAge >= 65){
    price = (kmPrice * tripLenght) - (price * oldDiscount)
    console.log(price);
    }
    else {
        price = kmPrice * tripLenght;
        console.log(price);
    }
})







