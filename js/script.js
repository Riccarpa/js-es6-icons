/*
BONUS: Provare ad aggiungere una casella di testo che renda possibile filtrare anche per nome dell'icona
SUPER INCREDIBLE MEGA BONUS: effettuare la ricerca dalla casella di testo in "tempo reale", cioè man mano che l'utente digita.

*/

//funzioni********************************************

function printCards(iconsArray) {
    let card = '';
    iconsArray.forEach(element => {
        card +=
            `<div class="col-md-2">
                <div class="card ">
                    <div class="card-body d-flex justify-content-center align-items-center">
                        <div class = "text-center">
                            <span class = "${element.family} ${element.prefix}${element.name} ${element.type} fa-2x"> </span>
                            <h2 class = "h6 ">  ${element.name} <h2>
                        </div>
                    </div>
                </div> 
            </div>`;

    });
    const cardSection = document.querySelector('#cards .row');
    cardSection.innerHTML = card;
}










// esercizio************************************************


// stampo le carte 
printCards(icons);

//filto per tipo e stampo
const selectLink = document.getElementById('select-type');


selectLink.addEventListener('change', () => {
    // raccolgo il valore dell'input
    let cardValue = selectLink.value;

    // stampo il valore 'all'
    if (cardValue == 'all') {
        return printCards(icons);
    }

    //filtro in base al tipo e stampo
    const filteredCards = icons.filter((item) => item.type === cardValue);
    return printCards(filteredCards);


})




const search = document.getElementById('search-by-word');



search.addEventListener('change', () => {

    let searchValue = search.value;

    const filteredCards = icons.filter((item) => item.name === searchValue);

    printCards(filteredCards);

})