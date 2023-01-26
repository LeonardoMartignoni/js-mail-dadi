// Genero un numero casuale da 1 a 6 per il giocatore
const userDice = Math.floor(Math.random() * 6) + 1;
console.log(userDice);

// Genero un numero casuale da 1 a 6 per il computer
const botDice = Math.floor(Math.random() * 6) + 1;
console.log(botDice);

// SE il numero del giocatore è maggiore di quello del computer
if (userDice > botDice) {
    //      Stampo un messaggio di vincita da parte del giocatore
    console.log('Hai vinto!');
}

// ALTRIMENTI SE il numero del giocatore e del computer sono uguali
else if (userDice == botDice) {
    //      Stampo un messaggio di pareggio
    console.log('Pareggio!');
}

// ALTRIMENTI
else {
    //      Stampo un messaggio di vincita del computer
    console.log('Hai perso, riprova!');
}