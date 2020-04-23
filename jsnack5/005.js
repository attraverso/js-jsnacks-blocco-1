/*Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente*/

/*mi faccio dare un numero dall'utente*/
var numberUpTo = prompt('Voglio vedere il cubo dei numeri fino a')

/*stampo i numeri fino a x indicato dall'utente*/
for (var i = 1; i <= numberUpTo; i++) {

  /*calcolo il cubo di quei numeri*/
  var cubeNum = Math.pow(i, 3)
  console.log(cubeNum);
}
