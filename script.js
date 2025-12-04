/* Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota: 
Non è necessario provvedere alla validazione delle email */


/* const mailArr = ['a@gmail.com', 'b@gmail.com', 'c@gmail.com', 'd@gmail.com', 'e@gmail.com']

let userMail = prompt('inserisci la tua mail');

let userFound = false;

for(let i = 0; i < mailArr.length; i++){
    if(userMail === mailArr[i]){
        userFound = true;        
    }
}

if(userFound === true){
    console.log("Congratulazioni, puoi accedere!");    
}
else{
    console.log("purtroppo la tua mail non è presente!");    
} */

/* Gioco dei dadi
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

const userNumber = Math.floor(Math.random() * 6) + 1;
const pcNumber = Math.floor(Math.random() * 6) + 1;

console.log("Tiro del giocatore:", userNumber);
console.log("Tiro del PC:", pcNumber);

if(userNumber < pcNumber){
    console.log("Hai perso!!");
    
}
else if(userNumber > pcNumber){
    console.log("Hai vinto!!");
    
}
else{
    console.log("Pari!");
    
}