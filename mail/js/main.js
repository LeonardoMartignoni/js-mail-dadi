// Creo una lista di email accettate
const acceptedEmail = ['123@123.com', '456@456.com', '789@789.com'];

// Chiedo l'email all'utente
const userEmail = prompt('Inserisci la tua email')

// Creo un for che scorra nella lista
for (i = 0; i < acceptedEmail.length; i++) {
    console.log(acceptedEmail[i]);

    // SE l'email dell'utente è nella lista
    if (userEmail == acceptedEmail[i]) {

        //      Stampo un messaggio di esito positivo
        console.log('Accesso consentito');
    }
    // ALTRIMENTI
    else {

        //      Stampo un messaggio di esito negativo
        console.log('Accesso negato');
    }
}
