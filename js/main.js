/**
 * JS-CAMPOMINATO-GRID
 * 
 * L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.


  lista cose da fare in sequenza
  1. inserimento costante bottone
  2. impostazione evento click del bottone
  3. inserimento costante per eliminare l'h2 e successivamente ci servirà per generare la griglia




 */
// inserimento const del bottone 'gioca'
const btn = document.getElementById('setdimension');
console.log(setdimension);
// inserimento costante per eliminare l'h2 e successivamente ci servirà per generare la griglia
const griglia = document.querySelector('.griglia')

// SETTAGGIO GRIGLIA
//impostazione evento bottone click
btn.addEventListener('click', () => {
    console.log('click');
    //eliminazione del contenuto dentro 'griglia'
    griglia.innerHTML = '';
});




