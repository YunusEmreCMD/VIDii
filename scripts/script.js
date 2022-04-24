// JavaScript Document
console.log("Howdy!");



// ITEM BAG 

var tas = document.querySelector("article:nth-child(2) section:nth-child(3) img");
var items = document.querySelector("article:nth-child(2) section ul");

var tasSection = document.querySelector("article:nth-child(2) section:nth-child(3)");

function tasOpenen() {
    console.log("yes");
    tasSection.classList.toggle("openklappen");
    items.classList.toggle("openklappen");
}
tasSection.addEventListener("click", tasOpenen);



// ---------------------------- //
// ----- TEKST VERANDEREN ----- //
// ---------------------------- //


// TEKST VENSTER
var tekstVenster = document.querySelector("article:nth-child(1) section:nth-child(2) p");

// MAIN EEVEE
var mainEevee = document.querySelector("article:nth-child(2) section:nth-child(2) img ");

// EEVEE'S
var eevee1 = document.querySelector("article:nth-child(1) section:nth-child(1) ul li:nth-child(1) img");
var eevee2 = document.querySelector("article:nth-child(1) section:nth-child(1) ul li:nth-child(2) img");
var eevee3 = document.querySelector("article:nth-child(1) section:nth-child(1) ul li:nth-child(3) img");
var eevee4 = document.querySelector("article:nth-child(1) section:nth-child(1) ul li:nth-child(4) img");


// VERWiIJDER CLASSES

var typewriterDuur = "3500";
// var evaluatieDuur  = "9000";

function verwijderTypewriter(){
    tekstVenster.classList.remove("typewriter");
}

// function verwijderEvaluatie(){
//     normaleEeevee.classList.remove("evolve");
//     evaluatieEevee.classList.remove("evolve");
// }



// Intro tekst
function veranderTekst() {
    tekstVenster.innerHTML = "Begin door op de eerste Eevee te klikken.";
    tekstVenster.classList.add("kort");
    tekstVenster.classList.add("typewriter");

    setTimeout(verwijderTypewriter, typewriterDuur);

}
tekstVenster.addEventListener("click", veranderTekst);


// Eevee 1 tekst
function veranderTekstEevee() {
    tekstVenster.classList.remove("kort");
    tekstVenster.classList.add("typewriter");
    eevee1.innerHTML = "Ik hoef niet te evolueren, de andere eevee's wel.";

    setTimeout(verwijderTypewriter, typewriterDuur);

}
eevee1.addEventListener("click", veranderTekstEevee);

function veranderTekstEevee2() {
    eevee1.classList.add("kort");
    tekstVenster.innerHTML = "Klik op de andere eevee's voor meer informatie.";
    tekstVenster.classList.add("typewriter");

    setTimeout(verwijderTypewriter, typewriterDuur);

}
eevee1.addEventListener("click", veranderTekstEevee2);



// Probeersel
var newDiv = document.createElement("p");
var newContent = document.createTextNode("Hi there and greetings!");



// ---------------------------- //
// -------- EVOLUEREN --------- //
// ---------------------------- //

var fireStone = document.querySelector("article:nth-child(2) section:nth-child(2) ul li:nth-child(2)");
var waterStone = document.querySelector("article:nth-child(2) section:nth-child(2) ul li:nth-child(3)");
var thunderStone = document.querySelector("article:nth-child(2) section:nth-child(2) ul li:nth-child(4)");

var normaleEeevee = document.querySelector("article:nth-child(2) section:nth-child(2) section>img:nth-child(1)");
var evaluatieEevee = document.querySelector("article:nth-child(2) section:nth-child(2) section>img:nth-child(2)");


// Fire Stone
function evolveFireStone() {
    console.log("Fire Stone Evolve");
    normaleEeevee.classList.add("evolve");
    evaluatieEevee.classList.add("evolve");

    setInterval(() => {
        eevee2.src = "images/pokemons/flareon.png";
    }, 7800);

    // setTimeout(verwijderEvaluatie, evaluatieDuur);
}
fireStone.addEventListener("dblclick", evolveFireStone);


// Water Stone
function evolveWaterStone() {
    console.log("Water Stone Evolve");
    normaleEeevee.classList.add("evolve");
    evaluatieEevee.src = "images/pokemons/vaporeon2.png";
    evaluatieEevee.classList.add("evolve");

    setInterval(() => {
        eevee3.src = "images/pokemons/vaporeon.png";
    }, 7600);

}
waterStone.addEventListener("dblclick", evolveWaterStone);


// Thunder Stone
function evolveThunderStone() {
    console.log("Thunder Stone Evolve");
    normaleEeevee.classList.add("evolve");
    evaluatieEevee.src = "images/pokemons/jolteon2.png";
    evaluatieEevee.classList.add("evolve");

    setInterval(() => {
        eevee4.src = "images/pokemons/jolteon.png";
    }, 7600);

}
thunderStone.addEventListener("dblclick", evolveThunderStone);




// ---------------------------- //
// ---------- HEADER ---------- //
// ---------------------------- //

var tijdToggle = document.querySelector("header ul li:nth-child(1) label input");
var html = document.querySelector("html");

function veranderTijd() {
    console.log("Tijd is veranderd");
    document.body.classList.toggle("darkmode");
    html.classList.toggle("darkmode");
}
tijdToggle.addEventListener("click", veranderTijd);