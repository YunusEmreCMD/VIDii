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
var eevee1 = document.querySelector("article:nth-child(1) section:nth-child(1) ul li:nth-child(1) img");
var eevee2 = document.querySelector("article:nth-child(1) section:nth-child(1) ul li:nth-child(2) img");
var eevee3 = document.querySelector("article:nth-child(1) section:nth-child(1) ul li:nth-child(3) img");
var eevee4 = document.querySelector("article:nth-child(1) section:nth-child(1) ul li:nth-child(4) img");
var eevee5 = document.querySelector("article:nth-child(1) section:nth-child(1) ul li:nth-child(5) img");
var eevee6 = document.querySelector("article:nth-child(1) section:nth-child(1) ul li:nth-child(6) img");
var eevee7 = document.querySelector("article:nth-child(1) section:nth-child(1) ul li:nth-child(7) img");
var eevee8 = document.querySelector("article:nth-child(1) section:nth-child(1) ul li:nth-child(8) img");
var eevee9 = document.querySelector("article:nth-child(1) section:nth-child(1) ul li:nth-child(9) img");


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
// function veranderTekst(typewriterDuur) {
//     tekstVenster.innerHTML = "Begin door op de eerste Eevee te klikken.";
//     // tekstVenster.classList.add("kort");
//     tekstVenster.classList.add("typewriter");
//     tekstVenster.style.pointerEvents = "none";

//     setTimeout(verwijderTypewriter, 3000);

// }
// tekstVenster.addEventListener("click", veranderTekst);


function resetEvoluatie() {
  normaleEevee.classList.remove("evolve", "geevolueerd");
  evaluatieEevee.classList.remove("evolve");
}


// Eevee 1 tekst
function veranderTekstEevee(typewriterDuur) {
    // tekstVenster.classList.add("kort");
    tekstVenster.classList.add("typewriter");
    tekstVenster.innerHTML = "Ik hoef niet te evolueren, de andere eevee's wel.";

    setTimeout(verwijderTypewriter, 4000);

}
eevee1.addEventListener("click", veranderTekstEevee);


// Eevee 2 tekst
function veranderTekstEevee2(typewriterDuur) {
    // eevee2.classList.add("kort");
    tekstVenster.innerHTML = "Ik moet evolueren naar Flareon, gebruik hiervoor de 'Fire Stone' uit je rugtas!";
    tekstVenster.classList.add("typewriter")

    setTimeout(verwijderTypewriter, 5500);

}
eevee2.addEventListener("click", veranderTekstEevee2);


// Eevee 3 tekst
function veranderTekstEevee3(typewriterDuur) {
  // eevee3.classList.add("kort");
  tekstVenster.innerHTML = "Ik moet evolueren naar Vaporeon, gebruik hiervoor de 'Water Stone' uit je rugtas!";
  tekstVenster.classList.add("typewriter");

  resetEvoluatie()

  setTimeout(verwijderTypewriter, 5500);

}
eevee3.addEventListener("click", veranderTekstEevee3);


// Eevee 4 tekst
function veranderTekstEevee4(typewriterDuur) {
  // eeve4.classList.add("kort");
  tekstVenster.innerHTML = "Ik moet evolueren naar Jolteon, gebruik hiervoor de 'Thunder Stone' uit je rugtas!";
  tekstVenster.classList.add("typewriter");

  // evaluatieEevee.src = "images/pokemons/eevee2.png";

  resetEvoluatie()

  setTimeout(verwijderTypewriter, 5500);

}
eevee4.addEventListener("click", veranderTekstEevee4);


// Eevee 5 tekst
function veranderTekstEevee5(typewriterDuur) {
  // eevee5.classList.add("kort");

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    tekstVenster.innerHTML = "Het is nacht, ik kan evolueren naar Umbreon!";
  }
  else {
    tekstVenster.innerHTML = "Ik moet evolueren naar Umbreon, dit kan ik alleen in de nacht. Zorg dat het nacht wordt!";
  }

  tekstVenster.classList.add("typewriter");

  resetEvoluatie()

  setTimeout(verwijderTypewriter, 4500);

}
eevee5.addEventListener("click", veranderTekstEevee5);


// Eevee 6 tekst
function veranderTekstEevee6(typewriterDuur) {
  // eevee6.classList.add("kort");
  tekstVenster.innerHTML = "Ik moet evolueren naar Espeon, dit kan ik alleen overdag.";
  tekstVenster.classList.add("typewriter");

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    tekstVenster.innerHTML = "Het is overdag, ik kan evolueren naar Espeon!";

    var knopTekst = document.createElement("p");
    var umbreonKnop = document.createElement("BUTTON");

    knopTekst.innerHTML = "Komt ergens anders, krijgt class, moet gelinkt gestijled worden";
    umbreonKnop.innerHTML = "Umbreon evalueren";

    knopTekst.style.color = "white";
    knopTekst.style.margin = 0;
    knopTekst.style.fontSize = "10px";
    umbreonKnop.style.backgroundColor = "white";
    umbreonKnop.style.padding = "2em";

    document.body.appendChild(knopTekst);
    document.body.appendChild(umbreonKnop);

  }
  else {
    tekstVenster.innerHTML = "Ik moet evolueren naar Espeon, dit kan ik alleen overdag. Zorg dat het overdag wordt!";
  }

  resetEvoluatie()

  setTimeout(verwijderTypewriter, 4000);

}
eevee6.addEventListener("click", veranderTekstEevee6);


// Eevee 7 tekst
function veranderTekstEevee7(typewriterDuur) {
  // eevee7.classList.add("kort");
  normaleEevee.classList.remove("evolve");
  evaluatieEevee.classList.remove("evolve");
  
  tekstVenster.innerHTML = "Ik moet evolueren naar Leafeon, hiervoor moet ik in een gras-omgeving zijn.";
  tekstVenster.classList.add("typewriter");

  resetEvoluatie()

  setTimeout(verwijderTypewriter, 5000);

}
eevee7.addEventListener("click", veranderTekstEevee7);


// Eevee 8 tekst
function veranderTekstEevee8(typewriterDuur) {
  // eevee8.classList.add("kort");
  tekstVenster.innerHTML = "Ik moet evolueren naar Glaceon, hiervoor moet ik in een ijs-omgeving zijn.";
  tekstVenster.classList.add("typewriter");

  resetEvoluatie()

  setTimeout(verwijderTypewriter, 5000);

}
eevee8.addEventListener("click", veranderTekstEevee8);


// Eevee 9 tekst
function veranderTekstEevee9(typewriterDuur) {
  // eevee8.classList.add("kort");
  tekstVenster.innerHTML = "Ik moet evolueren naar Sylveon, eerst moet ik een snoepje hebben.";
  tekstVenster.classList.add("typewriter");

  resetEvoluatie()

  setTimeout(verwijderTypewriter, 4000);

}
eevee9.addEventListener("click", veranderTekstEevee9);



// ---------------------------- //
// -------- EVOLUEREN --------- //
// ---------------------------- //

var fireStone = document.querySelector("article:nth-child(2) section:nth-child(2) ul li:nth-child(2) button");
var waterStone = document.querySelector("article:nth-child(2) section:nth-child(2) ul li:nth-child(3) button");
var thunderStone = document.querySelector("article:nth-child(2) section:nth-child(2) ul li:nth-child(4) button");

var normaleEevee = document.querySelector("article:nth-child(2) section:nth-child(2) section>img:nth-child(1)");
var evaluatieEevee = document.querySelector("article:nth-child(2) section:nth-child(2) section>img:nth-child(2)");


// Fire Stone
function evolveFireStone() {
    console.log("Fire Stone Evolve - bezig");
    normaleEevee.classList.add("evolve");
    evaluatieEevee.classList.add("evolve");

    evaluatieEevee.src = "images/pokemons/flareon2.png";

    tekstVenster.classList.add("typewriter");
    tekstVenster.innerHTML = "Bezig met evolueren...";

    setTimeout(() => {
      tekstVenster.innerHTML = "EEVEE is geevolueerd in FLAREON!";
      console.log("Gevolueerd naar FLAREON!");

      eevee2.src = "images/pokemons/flareon.png";
      tekstVenster.classList.remove("typewriter");

      evaluatieEevee.src = "images/pokemons/flareon2.png";

      eevee2.classList.add("geevolueerd");
  }, 7800);
}
// fireStone.addEventListener("dblclick", evolveFireStone);







// Water Stone
function evolveWaterStone() {
    console.log("Water Stone Evolve - bezig");
    normaleEevee.classList.add("evolve");
    evaluatieEevee.classList.add("evolve");

    evaluatieEevee.src = "images/pokemons/vaporeon2.png";

    tekstVenster.innerHTML = "Bezig met evolueren...";

    setTimeout(() => {
        tekstVenster.innerHTML = "EEVEE is geevolueerd in VAPOREON!";
        console.log("Gevolueerd naar VAPOREON!");

        eevee3.src = "images/pokemons/vaporeon.png";
        tekstVenster.classList.remove("typewriter");

        // normaleEevee.classList.remove("evolve");
        // evaluatieEevee.classList.remove("evolve");

        eevee3.classList.add("geevolueerd");
    }, 7600);
}
// waterStone.addEventListener("dblclick", evolveWaterStone);



// Thunder Stone
function evolveThunderStone() {
    console.log("Thunder Stone Evolve");
    normaleEevee.classList.add("evolve");
    evaluatieEevee.classList.add("evolve");

    evaluatieEevee.src = "images/pokemons/jolteon2.png";

    setTimeout(() => {
        tekstVenster.innerHTML = "EEVEE is geevolueerd in JOLTEON!";
        console.log("Gevolueerd naar JOLTEON!");

        eevee4.src = "images/pokemons/jolteon.png";
        tekstVenster.classList.remove("typewriter");
    }, 7600);

}
// thunderStone.addEventListener("dblclick", evolveThunderStone);



// Leafeon

var eevee7Gras = document.querySelector("article:nth-child(1) section:nth-child(1) ul li:nth-child(7) img.cool");

function evolveLeafeon() {
  console.log("Evolve Leafeon");
  normaleEevee.classList.add("evolve");
  evaluatieEevee.classList.add("evolve");

  evaluatieEevee.src = "images/pokemons/leafeon2.png";

  setTimeout(() => {
      tekstVenster.innerHTML = "EEVEE is geevolueerd in LEAFEON!";
      console.log("Gevolueerd naar LEAFEON!");

      eevee7.src = "images/pokemons/leafeon.png";
      tekstVenster.classList.remove("typewriter");
  }, 7600);

}
eevee7.addEventListener("dblclick", evolveLeafeon);









// ---------------------------- //
// ---------- HEADER ---------- //
// ---------------------------- //

// var tijdToggle = document.querySelector("header ul li:nth-child(1) label input");
// var html = document.querySelector("html");

// function veranderTijd() {
//     console.log("Tijd is veranderd");
//     document.body.classList.toggle("darkmode");
//     html.classList.toggle("darkmode");
// }
// tijdToggle.addEventListener("click", veranderTijd);












// ---------------------------- //
// ---------- DRAG ---------- //
// ---------------------------- //

// Er wordt niet gesleept
var slepen = false;

// De container van de sleep-items
const stenenContainer = document.querySelector("div");
var steen = document.querySelector(".testimg");
// const stenenContainer = document.querySelector("article:nth-child(2) section ul li button");

// sortable aanmaken
new Sortable(stenenContainer, {
  forceFallback: true,

  onStart: function (evt) {
    // als er wordt gesleept (beginnen met slepen)
    document.body.classList.add("slepen");
    
    // testImg.classList.remove("steenStyling");

    slepen = "true";
  },
  onEnd: function (evt) {
    // als er niet meer wordt gesleept, of wordt losgelaten (einde van slepen)
    document.body.classList.remove("slepen");
    steen.classList.add("wegsteen");

    slepen = false;
  }
});


// if(testImg.src == "../images/items/waterstone.png") {
//   normaleEevee.addEventListener("mouseenter", geefSteen);
// }


normaleEevee.addEventListener("mouseenter", geefSteen);


function geefSteen(e) {

  // als er wordt gesleept & de eevee heeft GEEN "geevolueerd" class, voer het volgende uit
  if(slepen && !this.classList.contains("geevolueerd")) {

    // clone de sleepbare steen
    var clone = document.querySelector(".sortable-fallback");
    clone.remove();

    // voeg class toe, als de steen wordt gebruikt, en verwijder de sleep-cursor
    this.classList.add("geevolueerd");

    // evolveFireStone();
    checkImg();

    document.body.classList.remove("slepen");
  }
}


var testImg = document.querySelector("body .testimg");


function testImgFuncVuur() {
  console.log("fireestonee");

  testImg.src = "../images/items/firestone.png";
  // testImg.classList.add("steenStyling");

  steen.classList.remove("wegsteen");
}
fireStone.addEventListener("dblclick", testImgFuncVuur);


function testImgFuncWater() {
  console.log("waterrstonee");
  testImg.src = "../images/items/waterstone.png";

  steen.classList.remove("wegsteen");
}
waterStone.addEventListener("dblclick", testImgFuncWater);


function testImgFuncThunder() {
  console.log("thunderrstonee");
  testImg.src = "../images/items/thunderstone.png";

  steen.classList.remove("wegsteen");
}
thunderStone.addEventListener("dblclick", testImgFuncThunder);



// Check welke steen wordt aangeklikt, voer op basis daarvan de bijhorende evoluatie-functie uit
function checkImg() {

  const source = testImg.getAttribute('src');

  if(source == "../images/items/firestone.png") {
    evolveFireStone();
    eevee2.classList.add("geevolueerd-klein");
    console.log("fire evolve");
  }
  if(source == "../images/items/waterstone.png") {
    evolveWaterStone();
    eevee3.classList.add("geevolueerd-klein");
    console.log("water evolve");
  }
  if(source == "../images/items/thunderstone.png") {
    evolveThunderStone();
    eevee4.classList.add("geevolueerd-klein");
    console.log("thunder evolve");
  }
}


// var imgGevolueerd = document.querySelector("img.gevolueerd")
// document.querySelector("article:nth-child(1) section:nth-child(1) ul li:nth-child(1) img")

// var alleEevees = document.querySelectorAll("article:nth-child(1) section:nth-child(1) ul li img");

// for (let i = 0; i < alleEevees.length; i++) {
//   console.log(alleEevees.length);
// }



function alGeevolueerd(){
  if(eevee2.classList.contains("geevolueerd-klein")) {
    console.log("Deze is al geevolueerd");
    tekstVenster.innerHTML = "Sanne deze is al geevolueerd!";
  }
  else {
    console.log("nog niet geevolueerd");
  }
}
eevee2.addEventListener("click", alGeevolueerd);

function alGeevolueerdBoos(){
  if(eevee2.classList.contains("geevolueerd-klein")) {
    tekstVenster.innerHTML = "Nu wordt de Eevee Boos!!!";
  }
}
eevee2.addEventListener("dblclick", alGeevolueerdBoos);







// function tekst() {
//   console.log ("hoi");
// }
// sleepbareStenen.addEventListener("click", tekst);




// 

var normaalbg = document.querySelector("header ul li:nth-child(2) button");
var radioNormaal = document.querySelector("header ul li:nth-child(2) button input[type='radio']");
var radioGroen = document.querySelector("header ul li:nth-child(3) button input[type='radio']");
var radioIjs = document.querySelector("header ul li:nth-child(4) button input[type='radio']");

var boxBg = document.querySelector("article:nth-child(1) section:nth-child(1)");
// background-image: url("../images/achtergronden/gras.png");


// if (radio.checked = true) {
//   console.log("nice");
//   // tekstVenster.innerHTML = "Sanne deze is al geevolueerd!";
// }


// OMGEVING VERANDEREN

// Normale omgeving
var tekstVeldBorder = document.querySelector("article:nth-child(1) section:nth-child(2)");
var boxBorder = document.querySelector("article:nth-child(1) section:nth-child(1)");

function veranderOmgevingNormaal() {
  console.log("normaal");

  boxBg.style.backgroundImage = "url('../images/achtergronden/aarde2.png')";

  tekstVeldBorder.classList.remove("gras-omgeving");
  boxBorder.classList.remove("gras-omgeving");

  tekstVeldBorder.classList.remove("ijs-omgeving");
  boxBorder.classList.remove("ijs-omgeving");

  tekstVeldBorder.classList.remove('gras-omgeving');
  boxBorder.classList.remove('gras-omgeving');
}
radioNormaal.addEventListener("change",veranderOmgevingNormaal);


// Gras omgeving
function veranderOmgevingGras() {
  console.log("gras");

  boxBg.style.backgroundImage = "url('../images/achtergronden/gras4.png')";

  tekstVeldBorder.classList.remove("ijs-omgeving");
  boxBorder.classList.remove("ijs-omgeving");

  tekstVeldBorder.classList.add("gras-omgeving");
  boxBorder.classList.add("gras-omgeving");

}
radioGroen.addEventListener("change",veranderOmgevingGras);


// Ijs omgeving
function veranderOmgevingIjs() {
  console.log("Ijs");

  boxBg.style.backgroundImage = "url('../images/achtergronden/sneeuw2.png')";

  tekstVeldBorder.classList.remove("gras-omgeving");
  boxBorder.classList.remove("gras-omgeving");

  tekstVeldBorder.classList.add("ijs-omgeving");
  boxBorder.classList.add("ijs-omgeving");
}
radioIjs.addEventListener("change",veranderOmgevingIjs);


if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
  console.log("dark");
}