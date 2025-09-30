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