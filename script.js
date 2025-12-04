/* 
Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota: 
Non è necessario provvedere alla validazione delle email

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */






// LISTA EMAIL DI INVITATI ALLA FESTA

/* const invitati = [
    "anna@gmail.com",
    "luca@gmail.com",
    "mario@gmail.com",
    "gianantonio@gmail.com",
    "maria_antonietta@gmail.com",
    "massimo_decimo_meridio@gmail.com",
];

const emailInvitati = prompt("inserisci la tua email");

let inLista = false

for (let i = 0; i < invitati.length; i++) {
    if (invitati[i] === emailInvitati) {
        console.log(true);
    }
    if (inLista) {
        console.log("Buongiorno stelle del cielo, la terra vi saluta");
    } else {
        console.log("Spiacente, non hai trovato il biglietto");
    }
} */




// GIOCO DEI DATI

const userNumber = Number(prompt("Inserisci un numero da 1 a 6"));
const computerNumber = Math.floor(Math.random() * 6) + 1;

let punteggioUser = userNumber
let punteggioComputer = computerNumber

if (punteggioUser > punteggioComputer) {
    console.log("hai vinto");
} else if (punteggioUser < punteggioComputer) {
    console.log("ha vinto il computer");
} else {
    console.log("hai pareggiato");
}
