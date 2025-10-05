// Esempio di variabile globale esterna:

/* const x = 5;

if(true) {
    console.log("dentro if", x);
}
console.log("fuori dall'if", x); */
//In questo caso la variabile è perfettamente globale perchè è stata creta sia dentro che fuori ed è visibile sia dentro ogni annidamento e sia fuori dal codice

//Altro esempio di variabile globale interna:

/* if (true) {
    const x = 5;
    console.log("dentro if", x);
}
console.log("fuori dall'if", x); */

//qui la const è interna e viene letta solo questa andando ad escludere quella esterna che in console ci verrà segnalata come errore! Basta quindi cancellare quella esterna che risulta inutile.
//versione corretta senza variabili esterne:

/* if (true) {
    const x = 5;
    console.log("dentro if", x);
} */

//Se utilizzassi VAR la variabile verrebbe letta correttamente anche all interno del blocco ma creerebbe problemi (Var obsoleto) :

/* if (true) {
    var x = 5;
    console.log("dentro if", x);
}
console.log("fuori dall'if", x); */

//JS CICLO - FOR:
//Esempio:
/* let x = 5;
x = x + 1;
console.log(x); */

//Altro metodo con somma e assegnamento:
/* let x = 5;
x++;
console.log(x); */

//Altro metodo con differenza e assegnamento:
/* let x = 5;
x--;
console.log(x); */

//Altro metodo con aggiunta di un +1 e assegnamento:
/* let x = 5;
x++;
x++;
x++;
console.log(x); */
//avremo 5 + 1 + 1 = 7 e così via stessa cosa con la differenza

// Immaginiamo che mi serva scrivere i numeri e contarli da 1 a 5:
//normalmente scriveremmo:
/* console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5); */
// cosi facendo abbiamo stampato 5 numeri da 1 a 5 in console ma è una manovra troppo lunga! Immaginiamo di dovere stampare 100 o 1000 numeri!
//Quindi per velocizzare il tutto utilizzaremo il ciclo FOR:
/* for (let x = 1; x <= 10; x++) {
    console.log(x);
} */
//Qui abbiamo stampato i numeri da 1 a 10!

//Ora voglio stampare i numeri da 10 a 1!
/* for (let i = 10; i >= 1; i--) {
    console.log(i);
}
 */

//esercizio in classe: quante volte sarà stampata la parola CIAO?
/* for(let i = 0; i < 3; i++) {
    console.log("Ciao");
} */
//Il risultato sarà "0, 1, 2 Ciao" che stampato sarà uguale a "3 Ciao" con lo zero compreso ed il 3 escluso perchè non abbiamo messo nell intervallo =

//Altro esercizio:
/* for (let i = 0; i < 10; i = i + 2) {
    console.log(i);
} */
// il risultato sarà 0,2,4,6,8 si avanza di +2 (con 0 compreso) fino a fermarci prima del 10 che non è compreso nell intervallo definito.

//Altro esercizio:
/* for (let i = 1; i <= 6; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
} */
//Il risultato sarà 2,4,6 perchè la condizione dice che SE la variabile i è divisibile per 2 ed il suo resto sarà uguale a zero, il tutto verrà stampato in console.

//Altro esercizio:
/* let somma = 0;
for (let i = 1; i <=4; i++) {
    somma = somma + i;
}
console.log(somma); */
//in questo caso dobbiamoo sommare tutti i numeri da 1 a 4 ed il risultato verrà stampato in console(10)

//possiamo anche rendere il codice interattivo e far scrivere all utente i numeri che vuole sommare, ovvero:

/* const userLimit = parseInt(prompt("Quanti numeri vorresti sommare?"));
console.log(userLimit);

let somma = 0;
for (let i = 1; i <= userLimit; i++) {
    somma = somma + i;
}
console.log(somma) */

//Altro esercizio:
//Scrivere tutti i numeri da 0 a 1000 specificando se sono pari o dispari:
/* for (let i = 0; i <= 1000; i++) {
    if (i % 2 === 0) {
        console.log(i, "è pari");
    } else {
        console.log(i, "è dispari");
    }
} */
//Qui abbiamo creato un a sequenza di numeri da 0 a 1000 e li abbiamo definito se pari o dispari grazie all utilizzo del modulo %

//Possiamo ancora rendere questo codice meno ripetitivo usando magari meno conosole.log e quindi faremo: 
/* for (let i = 0; i <= 1000; i++) {
    let result = "";
    if (i % 2 === 0) {
        result = "è pari";
    } else {
        result = "è dispari";
    }
    console.log(i, result);
} */
//In questo caso quindi avremo lo stesso risultato ma usando un solo console.log per tutto il blocco del codice.

//differenze tra x++ e ++x:
/* let x = 1;
let y = ++x + 5;
console.log(x);
console.log(y); */

//Altro esercizio: "Il software deve chiedere per 10 volte all utente di inserire un numero."
//Il programma poi stampa la somma di tutti i numeri inseriti.


/* let somma = 0;
for (let i = 0; i < 3; i++) {
    const userNumber = parseInt(prompt("Dimmi un numero da sommare"))
    console.log(userNumber);
    somma = somma + userNumber;
}
console.log(somma); */
//In questo caso avremo un a sequenza formata da 3 numeri i quali verranno sommati tra di loro per generare un nuovo numero unico (la somma dei 3)

//IL NUMERO RANDOMICO:
/* const randomNumber = Math.random();
console.log(randomNumber); */
//così facendo avremmo creato un ipotetico dado che genererà numeri randomici compresi tra 0 e 0.9
//se volessi abbattere questa barriere e avere numeri interi tipo lancio del dado devo utilizzare Math.floor(Math.random()) * il numero limite massimo di randomici tiri) + 1 per comprendere anch eil numero della moltiplicazione da me scelto creando un sistema che andrà a generae numeri da 0 a 10:

/* const randomNumber = Math.floor(Math.random() * 5) + 1;
console.log(randomNumber); */

//Un altro metodo è usare Math.floor(Math.random() * (max - min + 1) + min; dove aggiungeremo i valori numeri relativi dove ci sono max e min:

/* const randomNumber = Math.floor(Math.random() * (15 - 5 + 1) + 5);
console.log(randomNumber); */

//questa formula mi darà quindi la possibilità di poter generare un numero randomico tra tutti quei numeri specificati tra min e max estremi compresi!

//Esercizio: provare a creare un piccolo gioco del lancio del dado tra due utenti. il valore generato più alto avrà vinto. aggiungere anche la parità come variabile.

/* const userOne = Math.floor(Math.random() * (6 - 1 + 1) + 1);
const userTwo = Math.floor(Math.random() * (6 - 1 + 1) + 1);
console.log(userOne, userTwo);

let message = "";
if (userOne > userTwo) {
    message = "L'utente 1 ha vinto!";
} else if (userOne < userTwo) {
    message = "L'utente 2 ha vinto!"
} else {
    message = "Parità!"
}
console.log(message); */
//Così facendo avremo creato un lacio del dado fatto da due utenti i quali avranno poi le conferme delle loro vittorie o parità in base ai dati random generati dal codice.l