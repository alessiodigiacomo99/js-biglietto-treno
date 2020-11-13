/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65*/

var nChilometri = Number(prompt("Quanti chilometri vuoi percorrere?"));
var userAge = Number(prompt("Quanti anni hai?"));
var prezzoBase = nChilometri * 0.21;

if (userAge <= 17){
   var prezzoMinorenni = prezzoBase - (prezzoBase / 5);
   document.getElementById("prezzo").innerHTML = prezzoMinorenni;
}else if (userAge >= 65){
    var prezzoAnziani = prezzoBase - ((prezzoBase / 100) * 40);
    document.getElementById("prezzo").innerHTML = prezzoAnziani;
}else{
    document.getElementById("prezzo").innerHTML = prezzoBase;
}
