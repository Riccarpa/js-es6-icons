/*
 Milestone 1
Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
Milestone 2
Coloriamo le icone per tipo
Milestone 3
Creiamo una select con i tipi di icone e usiamola per filtrare le icone
:avviso:IMPORTANTE: non è obbligatorio usare la sintassi ES6, se non vi sentite a vostro agio partite dalla sintassi 
con cui vi trovate meglio e cercate di migliorarla in un secondo momento.
BONUS: Provare ad aggiungere una casella di testo che renda possibile filtrare anche per nome dell'icona
SUPER INCREDIBLE MEGA BONUS: effettuare la ricerca dalla casella di testo in "tempo reale", cioè man mano che l'utente digita.

*/
let card = '';

icons.forEach(element => {

    card +=
        `<div class="col-md-2">
            <div class="card ">
                <div class="card-body text-center ">
                    <span class = "${element.family} ${element.prefix}${element.name} ${element.type} fa-2x"> </span>
                     <h2 class = "h6 ">  ${element.name} <h2>
                </div>
            </div> 
        </div>`;


});

const cardSection = document.querySelector('#cards .row');

cardSection.innerHTML = card;

//${element.prefix}${element.type}