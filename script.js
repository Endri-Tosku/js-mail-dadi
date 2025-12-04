/* Mail
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
Stabilire il vincitore, in base a chi fa il punteggio più alto.

Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?

Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano" */


// LISTA EMAIL DI INVITATI ALLA FESTA

const invitati = [
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
}