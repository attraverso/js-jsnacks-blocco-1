/*Stampa le potenze di 2 fino a 1000*/

/*VERSIONE 1: stampo fino a 2 elevato alla 1000*/

// var numberUpTo = prompt('Voglio vedere le potenze di 2 fino a potenza...')
// var numberUpTo = 1000;
//
// /*ciclo for che mi dà le potenze fino a quella indicata*/
// for (var i = 1; i <= numberUpTo; i++) {
//   var toThePowerOfN = Math.pow(2, i);
//   console.log(toThePowerOfN);
// }

/*VERSIONE 2: stampo le potenze di due finché una non arriva ad avere valore 1000*/

/*Versione 2.A: definisco già io i limiti*/

/*variabili di modifica rapida*/
var base = 2;
var numberUpTo = 1000;

/* assegno un valore in modo che la variabile esista prima dell'inizio del ciclo for */
var toThePowerOfN = 0;

/*ciclo for che mi dà le potenze fino a quella indicata e si ferma quando si raggiunge il numero scelto*/
for (var i = 1; i > 0 && toThePowerOfN <= numberUpTo; i++) {
  var toThePowerOfN = Math.pow(base, i);

  if (toThePowerOfN <= numberUpTo) {
  console.log(toThePowerOfN);
  }
}

/*Versione 2.B: i limiti sono definiti dall'utente*/

// var givenBase = prompt('voglio vedere le potenze di...')
// var numberUpTo = prompt('Voglio vedere le potenze di ' + givenBase + ' fino a potenza...')
//
// var toThePowerOfN = 0;
//
// /*ciclo for che mi dà le potenze fino a quella indicata*/
// for (var i = 1; i > 0 && toThePowerOfN <= numberUpTo; i++) {
//   var toThePowerOfN = Math.pow(givenBase, i);
//
//   if (toThePowerOfN <= numberUpTo) {
//   console.log(toThePowerOfN);
//   }
// }
