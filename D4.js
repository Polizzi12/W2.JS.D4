/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.*/

  function area (l1,l2) {
let area = l1*l2
return area;
}
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
function crazySum(n1,n2) {
let somma = n1+n2
    console.log("somma")
if (n1===n2) {
    somma=somma*3;
    console.log("questa è la somma moltiplicata per 3",somma)
}
else{
    console.log("somma",somma)
}
return somma;
}

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(n1){
let differenza=Math.abs(n1-19);
if (n1>19){
    differenza=differenza*3
    console.log("la differenza assoluta moltiplicata per 3 è:",differenza)
}
else{
    differenza=n1-19;
    console.log("la differenza assoluta è:",differenza)

}
return differenza; 
}

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n){
    if((20 >=n && n <=100) || n===400){
        console.log("true")
        return true
    }
    else{
        console.log("false")
        return false
    }
}
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(string){
    
    if (string.StartsWith("EPICODE")){
        console.log("parola originale:",string)
        return string
    }
    else{
        string= "EPICODE"+string;
        console.log("parola con aggiunta:",string)
        return string
    }
}

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(num){
    if(num % 3===0){
        console.log("il numero inserito è multiplo di 3")
        return true
    }
    else if (num % 7=== 0){
        console.log("il numero inserito è multiplo di 7 ")
        return true
     }
     else{
        console.log("il numero inserito non è multiplo ne di 3 ne di 7")
     }
     return false
    }



/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(string){
let stringadivisa=string.split(" ")
let stringainvertita=stringadivisa.reverse ()
let stringa_finale=stringainvertita.join(" ")
return stringa_finale;
}
console.log("la parola invertita è:",stringa_finale)

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.

Non ci sono riuscito 

 */



/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
function cutString(stringa){
return stringa.slice(1,-1)
}
console.log("la stringa modificata sarà:",stringa)

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
function giveMeRandom(n){
let contenitore=[];
for (let i=0; i<=10; i++){
    let numcas= Math.floor(Math.random ( ) *11);
    contenitore.push(numcas)
}
}
return contenitore;



 /*l'ho visto su internet non lo ricordavo */