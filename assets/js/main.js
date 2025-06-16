/*
Descrizione
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Steps:
apri postman e crea una nuova collection black (vuota)
nella collection crea una nuova request cliccando sui tre pallini affianco al nome
copia il link del campo della request
clicca save e send per inviare la chiamata http tramite postman
Ora implementa la richiesta usando l'esempio nelle slide tramite javascript fetch
Stampa il risultato della singola mail in console per confermare che la chiamata sia andata a buon fine e siano presenti i risultati
Adesso PENSA: devo fare la stessa cosa per 10 volte :faccia_pensosa: che strumento mi permette di ripetere qualcosa usando un contatore?
Aggiorna la DOM inserendo gli indirizzi generati in una lista
Bonus (opzionale)
Abbellire con CSS o Bootstrap
Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)
*/

//Recupero il nodo della DOM ulEL
const ulEl = document.getElementById('list');
const loadingEl = document.getElementById('loading');
const generateButtonEl = document.getElementById('generateEmail')
//creo una costante per l'API che dovrò usare
const randomEmailApiUrl = 'https://flynn.boolean.careers/exercises/api/random/mail';
//inizializzo la chiamata AJAX all'interno del ciclo for per creare 10 email diverse
for (let i = 0; i <= 10; i++) {
    fetch(randomEmailApiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const liEl = document.createElement('li');
            liEl.classList.add('text-primary');
            liEl.classList.add('mt-2');
            ulEl.appendChild(liEl);
            liEl.innerHTML = data.response;
            console.log(ulEl.innerText);
        });
};
loadingEl.classList.toggle('d-block');
loadingEl.classList.toggle('d-none');
ulEl.classList.toggle('d-none');
ulEl.classList.toggle('d-block');






