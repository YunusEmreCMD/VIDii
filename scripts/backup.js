// JavaScript Document
console.log("Howdy!");



// ITEM BAG 

// var tas = document.querySelector("article:nth-child(2)>button");
var items = document.querySelector("article:nth-child(2) section ul");

var tasSection = document.querySelector("article:nth-child(2)>button");

function tasOpenen() {
    console.log("yes");
    tasSection.classList.toggle("openklappen");
    items.classList.toggle("openklappen");
}
// tasSection.addEventListener("focus", tasOpenen);
tasSection.addEventListener("click", tasOpenen);



// ---------------------------- //
// ----- TEKST VERANDEREN ----- //
// ---------------------------- //


// TEKST VENSTER
var tekstVenster = document.querySelector("article:nth-child(1) section:nth-child(2) p");

// MAIN EEVEE
var mainEevee = document.querySelector("article:nth-child(2) section:nth-child(2) img ");

// EEVEE'S
var alleEevees = document.querySelector("article:nth-child(1) section:nth-child(1) ul li");
var eevee1 = document.querySelector("article:nth-child(1) section:nth-child(1) ul li:nth-child(1) img");
var eevee2 = document.querySelector("article:nth-child(1) section:nth-child(1) ul li:nth-child(2) img");
var eevee3 = document.querySelector("article:nth-child(1) section:nth-child(1) ul li:nth-child(3) img");
var eevee4 = document.querySelector("article:nth-child(1) section:nth-child(1) ul li:nth-child(4) img");


// VERWiIJDER CLASSES

// var typewriterDuur = "3500";
// var evaluatieDuur  = "9000";

function verwijderTypewriter(){
    tekstVenster.classList.remove("typewriter");
}

// function verwijderEvaluatie(){
//     normaleEeevee.classList.remove("evolve");
//     evaluatieEevee.classList.remove("evolve");
// }



// Intro tekst
function veranderTekst(typewriterDuur) {
    tekstVenster.innerHTML = "Begin door op de eerste Eevee te klikken.";
    tekstVenster.classList.add("kort");
    tekstVenster.classList.add("typewriter");
    tekstVenster.style.pointerEvents = "none";

    setTimeout(verwijderTypewriter, 3000);

}
tekstVenster.addEventListener("click", veranderTekst);


// Eevee 1 tekst
function veranderTekstEevee(typewriterDuur) {
    tekstVenster.classList.add("kort");
    tekstVenster.classList.add("typewriter");
    tekstVenster.innerHTML = "Ik hoef niet te evolueren, de andere eevee's wel.";

    setTimeout(verwijderTypewriter, 4000);

}
eevee1.addEventListener("click", veranderTekstEevee);


// Eevee 2 tekst
function veranderTekstEevee2(typewriterDuur) {
    eevee2.classList.add("kort");
    tekstVenster.innerHTML = "Ik moet evolueren naar Flareon, gebruik hiervoor de 'Fire Stone' in je rugtas!";
    tekstVenster.classList.add("typewriter")

    setTimeout(verwijderTypewriter, 5500);

}
eevee2.addEventListener("click", veranderTekstEevee2);



// Eevee 3 tekst
function veranderTekstEevee3(typewriterDuur) {
  eevee3.classList.add("kort");
  tekstVenster.innerHTML = "Ik moet evolueren naar Vaporeon, gebruik hiervoor de 'Water Stone' in je rugtas!";
  tekstVenster.classList.add("typewriter");

  setTimeout(verwijderTypewriter, 5500);

}
eevee3.addEventListener("click", veranderTekstEevee3);




// ---------------------------- //
// -------- EVOLUEREN --------- //
// ---------------------------- //

var fireStone = document.querySelector("article:nth-child(2) section:nth-child(2) ul li:nth-child(2)");
var waterStone = document.querySelector("article:nth-child(2) section:nth-child(2) ul li:nth-child(3)");
var thunderStone = document.querySelector("article:nth-child(2) section:nth-child(2) ul li:nth-child(4)");

var normaleEevee = document.querySelector("article:nth-child(2) section:nth-child(2) section>img:nth-child(1)");
var evaluatieEevee = document.querySelector("article:nth-child(2) section:nth-child(2) section>img:nth-child(2)");


// Fire Stone
function evolveFireStone() {
    console.log("Fire Stone Evolve");
    normaleEevee.classList.add("evolve");
    evaluatieEevee.classList.add("evolve");

    setInterval(() => {
        eevee2.src = "images/pokemons/flareon.png";
        eevee2.classList.add("evolved");
    }, 7800);

    // setTimeout(verwijderEvaluatie, evaluatieDuur);
}
fireStone.addEventListener("dblclick", evolveFireStone);




var eevee2Evolved = document.querySelector("article:nth-child(1) section:nth-child(1) ul li button img.geevolueerd");


function testEvolve() {

setInterval((typewriterDuur) => {
  if (eevee2.classList.contains("evolved")) {
    tekstVenster.classList.add("kort");
    tekstVenster.innerHTML = "EEVEE is geevolueerd in FLAREON!";
    tekstVenster.classList.add("typewriter");
  }
  else {
    tekstVenster.classList.add("kort");
    tekstVenster.innerHTML = "Bezig met evolueren...";
    tekstVenster.classList.add("typewriter");

    // setTimeout(verwijderTypewriter, 100);
  }   
}, 0);
}
fireStone.addEventListener("dblclick", testEvolve);


function terugEeevee() {
  mainEevee.src = "images/pokemons/eevee2.png";
  console.log("terug naar normale eevee");
}
eevee2Evolved.addEventListener("click", terugEeevee);





  // console.log("evolved");
  // tekstVenster.classList.add("kort");
  // tekstVenster.innerHTML = "dsdsdsdsd dsd sd sd sd sddsdsadad s dsd sd ";
  // tekstVenster.classList.add("typewriter");

  // setTimeout(verwijderTypewriter, 3000);

// eevee2Evolved.addEventListener("click", veranderTekstEeveeEvolved);






















// Water Stone
function evolveWaterStone() {
    console.log("Water Stone Evolve");
    normaleEevee.classList.add("evolve");
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
    normaleEevee.classList.add("evolve");
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





// TEST 

function changeAllEevees() {
    normaleEevee.src = ("../images/pokemons/eevee2.png");
}
alleEevees.addEventListener("click", changeAllEevees);














function evolveFireStone() {
  console.log("Fire Stone Evolve");
  normaleEevee.classList.add("evolve");
  evaluatieEevee.classList.add("evolve");

  tekstVenster.classList.add("typewriter");
  tekstVenster.innerHTML = "Bezig met evolueren...";

  setInterval(() => {
      eevee2.src = "images/pokemons/flareon.png";
      eevee2.classList.add("evolved");

      console.log("gevolueerd");

      tekstVenster.classList.add("typewriter");
      tekstVenster.innerHTML = "EEVEE is geevolueerd in FLAREON!";

  }, 7800);

}
fireStone.addEventListener("dblclick", evolveFireStone);









// ---------------------------- //
// ---------- DRAG ---------- //
// ---------------------------- //


// draggable droppable
const draggable = document.querySelector('.draggable');
const droppables = document.querySelectorAll('.droppable');

// draggable
draggable.addEventListener('dragstart', dragStart);
draggable.addEventListener('dragend', dragEnd);

function dragStart() {
  this.className += ' dragging';
  setTimeout(() => {
    this.className = 'invisible';
  }, 0);
}

function dragEnd() {
  this.className = 'draggable';
}

// droppable
for (const droppable of droppables) {
  droppable.addEventListener('dragover', dragOver);
  droppable.addEventListener('dragleave', dragLeave);
  droppable.addEventListener('dragenter', dragEnter);
  droppable.addEventListener('drop', dragDrop);
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' drag-over';
}

function dragLeave(e) {
  this.className = 'droppable';
}

function dragDrop(e) {
  this.className = 'droppable';
  this.append(draggable);
}