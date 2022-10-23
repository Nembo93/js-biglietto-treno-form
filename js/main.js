// DICHIARAZIONE VARIABILI INIZIALI
// Tariffa a km
const kmPrice=0.21;
console.log(kmPrice);
// Sconto
const minorDiscount = 0.2;
const oldDiscount = 0.4;
let discount="";
console.log(minorDiscount, oldDiscount, discount)

// Bottone per avviare algoritmo
const ticketGenerator = document.getElementById(`generator`);
// ALGORITMO PER GENERARE BIGLIETTO
ticketGenerator.addEventListener(`click`, function (){

    // Funzione per visualizzare biglietto
    ticket = document.getElementById(`box_ticket_generator`).classList;
    ticket.remove(`d_none`);

    // Nome passeggero
    let passengerName = document.getElementById(`passenger`).value;
    console.log(passengerName);
    document.getElementById(`pass_name`).innerHTML = passengerName;

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

    // Generatore biglietto
    if (valueAge < 18){
    price = (kmPrice * tripLenght) - (price * minorDiscount);
    console.log(price);
    document.getElementById(`saleType`).innerHTML=`Sconto junior 20%`;
    document.getElementById(`ticketPrice`).innerHTML= price.toFixed(2) + `€`;
    }
    else if (valueAge >= 65){
    price = (kmPrice * tripLenght) - (price * oldDiscount)
    console.log(price);
    document.getElementById(`saleType`).innerHTML=`Sconto over 40%`;
    document.getElementById(`ticketPrice`).innerHTML= price.toFixed(2) + `€`;
    }
    else {
    price = kmPrice * tripLenght;
    console.log(price);
    document.getElementById(`saleType`).innerHTML=`Offerta standard`;
    document.getElementById(`ticketPrice`).innerHTML= price.toFixed(2) + `€`;
    }

    let wagon = Math.round(Math.random()* 10 + 1);
    console.log(wagon);
    document.getElementById(`wagon`).innerHTML = wagon;

    let cpCode = Math.floor((Math.random() * (90000 - 99999)) + 90000);
    console.log(cpCode);
    document.getElementById(`cpCode`).innerHTML = cpCode;
})

// Funzione annulla
function disp_none() {
    // Nasconde biglietto
    ticket = document.getElementById(`box_ticket_generator`).classList;
    ticket.add(`d_none`);

    // Resetta campi di compilazione
    let passengerName = document.getElementById(`passenger`);
    let tripLenght = document.getElementById(`trip_lenght_km`)
    passengerName.value = ``;
    tripLenght.value = ``;
}





