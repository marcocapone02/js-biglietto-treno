/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

1. Definire le costanti
2. Definire le variabili
3. Calcolare il prezzo totale
4. Calcolare lo sconto
5. Stampare il messaggio di output

*/

const priceKm = 0.21,
      discountUnder18 = 20,
      discountOver65 = 40,
      kmTot = prompt('Quanti kilometri devi percorrere?'),
      age = prompt('Quanti anni hai?');

let message,
    standardPrice,
    totalPrice,
    discountPrice = 0;

standardPrice = kmTot +  priceKm;

if(age >= 65){
  discountPrice = standardPrice * discountOver65/100;

}else if(age < 18){
  discountPrice = standardPrice * discountUnder18/100;
}

totalPrice = standardPrice - discountPrice;

message = `
  Il prezzo del tuo biglietto è di &euro; ${standardPrice}
  `

if(age >= 65){
  discountPrice = standardPrice * discountOver65/100;
  message = `
    Hai usufruito del nostro sconto Over! <br>
    Con uno sconte del ${discountOver65}% invece di ${standardPrice} il totale è <strong>&euro; ${totalPrice. toFixed(2)}</strong>
    `
}else if(age < 18){
  discountPrice = standardPrice * discountUnder18/100;
  message = `
  Hai usufruito del nostro sconto Under! <br>
  Con uno sconte del ${discountUnder18}& invece di ${standardPrice} il totale è <strong>&euro; ${totalPrice. toFixed(2)}</strong>
  `
}

console.log(priceKm, discountUnder18, discountOver65, kmTot, age)
console.log('standardPrice',standardPrice)
console.log('discountPrice',discountPrice)
console.log('totalPrice',totalPrice)
console.log('message',message)

document.getElementById('output').innerHTML = message;
