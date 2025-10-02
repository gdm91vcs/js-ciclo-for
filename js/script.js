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
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
// cosi facendo abbiamo stampato 5 numeri da 1 a 5 in console ma è una manovra troppo lunga! Immaginiamo di dovere stampare 100 o 1000 numeri!
//Quindi per velocizzare il tutto utilizzaremo il ciclo FOR:
for (let x = 1; x <= 20; x++) {
    console.log(x);
}

