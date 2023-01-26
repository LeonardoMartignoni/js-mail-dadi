const buttonDiceThrow = document.getElementById('button_dice_throw');

buttonDiceThrow.addEventListener(
    'click',

    function () {
        const userDice = Math.floor(Math.random() * 6) + 1;
        document.getElementById('user_dice').innerHTML = `Il tuo dado: ${userDice}`;

        // Genero un numero casuale da 1 a 6 per il computer
        const botDice = Math.floor(Math.random() * 6) + 1;
        document.getElementById('bot_dice').innerHTML = `Il dado del bot: ${botDice}`;

        // SE il numero del giocatore è maggiore di quello del computer
        if (userDice > botDice) {
            //      Stampo un messaggio di vincita da parte del giocatore
            document.getElementById('dice_result').innerHTML = `Hai vinto!`;
        }

        // ALTRIMENTI SE il numero del giocatore e del computer sono uguali
        else if (userDice == botDice) {
            //      Stampo un messaggio di pareggio
            document.getElementById('dice_result').innerHTML = `Pareggio!`;
        }

        // ALTRIMENTI
        else {
            //      Stampo un messaggio di vincita del computer
            document.getElementById('dice_result').innerHTML = `Hai perso, riprova!`;
        }
    }
)