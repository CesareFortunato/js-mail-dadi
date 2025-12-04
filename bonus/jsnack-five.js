/* 
Snack 5
 Crea un array vuoto. 
 Chiedi per 6 volte all’utente di inserire un numero, 
 se è dispari inseriscilo nell’array */

const emptyArray = [];

for (let i = 0; i < 6; i++) {
    let chosenNum = parseInt(prompt("inserisci un numero"))
    if (chosenNum % 2 === 1) {
        emptyArray.push(chosenNum);
    }
}

console.log(emptyArray);

