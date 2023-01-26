// Creo una lista di email accettate
const acceptedEmail = ['123@123.com', '456@456.com', '789@789.com'];

// Prendo il bottone per l'invio
const sendButton = document.getElementById('send_button');

// Prendo il paragrafo per i risultati
const resultMessage = document.getElementById('result_message');

sendButton.addEventListener(
    'click',

    function () {
        // Prendo l'email dell'utente
        const userEmail = document.getElementById('user_email').value;

        // Imposto una variabile per sapere se l'email è registrata
        let userHasPermission = false;

        // Creo un for che scorra nella lista
        for (i = 0; i < acceptedEmail.length; i++) {

            // SE l'email dell'utente è nella lista
            if (userEmail == acceptedEmail[i]) {

                //      Modifico lo stato della variabile
                userHasPermission = true;
            }
        }

        // SE l'utente ha i permessi
        if (userHasPermission == true) {
            //      Stampo un messaggio di esito positivo
            resultMessage.innerHTML = 'Accesso consentito'
        }

        // ALTRIMENTI
        else {
            //      Stampo un messaggio di esito negativo
            resultMessage.innerHTML = 'Accesso negato'
        }
    }
)
