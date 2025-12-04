/* Crea un array vuoto. 
 Chiedi per 6 volte all’utente di inserire un numero, 
 se è dispari inseriscilo nell’array */

const numeriDispari = [];

for (let i = 1; i <= 6; i++) {

    const number = Number(prompt("Inserisci un numero"))
    if (number % 2 !== 0) {
        numeriDispari.push(number)
    }
}
console.log(numeriDispari);

/* L’utente inserisce due parole in successione, con due prompt. 
 Il software stampa prima la parola più corta, poi la parola più lunga. */

