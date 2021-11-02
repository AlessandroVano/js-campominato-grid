/**
 * JS-CAMPOMINATO-GRID
 * 
 * L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.


  lista cose da fare in sequenza:

  1. inserimento costante bottone
  2. impostazione evento click del bottone
  3. inserimento costante per eliminare l'h2 e successivamente ci servirà per generare la griglia
  4. inserimento regolina per pulire 
  5. creazione costante per impostare il livello di difficoltà
  6. inserimento costante (all'interno del evento click, quindi andrà a cascata) per definirgli che opzione di difficoltà hai scelto
  7. inserimento di due variabili (let) per definire il numero di celle totali ed il numero di celle per lato
  8. inseritmento di uno switch per settare le due variabili




 */
// 1. inserimento const del bottone 'gioca'
const setBtn = document.getElementById('imposta-difficolta');
console.log(setBtn);
// 3. inserimento costante per eliminare l'h2 e successivamente ci servirà per generare la griglia
const griglia = document.querySelector('.griglia');
console.log(griglia);
// 5. creazione costante per impostare il livello di difficoltà
const difficoltaLivello = document.getElementById('difficolta');
console.log(difficoltaLivello);


// SETTAGGIO GRIGLIA
// 2. impostazione evento bottone click
setBtn.addEventListener('click', () => {
    console.log('click');
    // 4. eliminazione del contenuto dentro 'griglia'
    griglia.innerHTML = '';
    // 6. inserimento costante (all'interno del evento click, quindi andrà a cascata) per definirgli che opzione di difficoltà hai scelto
    const sceltaDifficoltà = difficoltaLivello.value;
    console.log(sceltaDifficoltà);
    // 7. inserimento di due variabili (let) per definire il numero di celle totali ed il numero di celle per lato
    let numeroCelle;
    let cellePerLato;
    //  8. inseritmento di uno switch per settare le due variabili
    /* scelgo (sceltaDifficoltà) perchè è quella dove ho le tre scelte (easy, medium e hard che ho impostato nel punto .6) */
    
    switch ( sceltaDifficoltà) {
        case '1':
            numeroCelle = 100;
            cellePerLato = 10;
            break;
        case '2':
            numeroCelle = 81;
            cellePerLato = 9;
            break;
        case '3':
             numeroCelle = 49;
             cellePerLato = 7;
            break;
    }
    console.log(numeroCelle);
    console.log(cellePerLato);
});




