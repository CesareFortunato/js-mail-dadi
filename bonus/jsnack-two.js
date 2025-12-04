/* JSnack 2
L’utente inserisce due parole in successione, con due prompt. 
Il software stampa prima la parola più corta, poi la parola più lunga; */

const firstWord = prompt('scrivi la prima parola');
const secondWord = prompt('scrivi la seconda parola');

const firstLength = parseInt(firstWord.length);
const secondLength = parseInt(secondWord.length);

if(firstLength > secondLength){
    console.log('Questa è la seconda parola', secondWord);
    console.log('Questa è la prima parola', firstWord);    
}
else{
    console.log('Questa è la prima parola', firstWord);
    console.log('Questa è la seconda parola', secondWord);  
    
}