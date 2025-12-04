/* Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota: 
Non è necessario provvedere alla validazione delle email */


const mailArr = ['a@gmail.com', 'b@gmail.com', 'c@gmail.com', 'd@gmail.com', 'e@gmail.com']

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
}