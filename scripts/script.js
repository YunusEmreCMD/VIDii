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


// uitzondering knop voor eevee's
var uitzonderingEeveeKnop = document.querySelector("article:nth-child(2) section>button");

function uitzonderingEeveeKnopVullen(tekstInKnop, classToevoegen, achtergrondKleurKnop) {
  uitzonderingEeveeKnop.style.transition = "1s";
  uitzonderingEeveeKnop.style.opacity = "1";
  uitzonderingEeveeKnop.innerHTML = tekstInKnop;
  uitzonderingEeveeKnop.classList.add(classToevoegen);
  uitzonderingEeveeKnop.style.backgroundColor = achtergrondKleurKnop;
}


function verwijderTypewriter(){
    tekstVenster.classList.remove("typewriter");
}

// Intro tekst
function veranderTekst(typewriterDuur) {
    tekstVenster.classList.add("typewriter");
    tekstVenster.style.pointerEvents = "none";

    setTimeout(verwijderTypewriter, 3000);

}
tekstVenster.addEventListener("click", veranderTekst);


function resetEvaluatie() {
  normaleEevee.classList.remove("evolve", "geevolueerd");
  evaluatieEevee.classList.remove("evolve");
}


// Eevee 1 tekst
function veranderTekstEevee(typewriterDuur) {
    tekstVenster.classList.add("typewriter");
    tekstVenster.innerHTML = "Een tip voor straks, dubbelklik op een item en sleep de item naar de eevee in de 2e venster om deze te gebruiken.";

    setTimeout(verwijderTypewriter, 5500);

}
eevee1.addEventListener("click", veranderTekstEevee);


// Eevee 2 tekst
function veranderTekstEevee2(typewriterDuur) {
    // eevee2.classList.add("kort");
    tekstVenster.innerHTML = "Ik moet evolueren naar Flareon, gebruik hiervoor de 'Fire Stone' uit je rugtas!";
    tekstVenster.classList.add("typewriter")

    setTimeout(verwijderTypewriter, 5500);

    resetEvaluatie()

}
eevee2.addEventListener("click", veranderTekstEevee2);


// Eevee 3 tekst
function veranderTekstEevee3(typewriterDuur) {
  // eevee3.classList.add("kort");
  tekstVenster.innerHTML = "Ik moet evolueren naar Vaporeon, gebruik hiervoor de 'Water Stone' uit je rugtas!";
  tekstVenster.classList.add("typewriter");

  resetEvaluatie()

  setTimeout(verwijderTypewriter, 5500);

}
eevee3.addEventListener("click", veranderTekstEevee3);


// Eevee 4 tekst
function veranderTekstEevee4(typewriterDuur) {
  // eeve4.classList.add("kort");
  tekstVenster.innerHTML = "Ik moet evolueren naar Jolteon, gebruik hiervoor de 'Thunder Stone' uit je rugtas!";
  tekstVenster.classList.add("typewriter");

  // evaluatieEevee.src = "images/pokemons/eevee2.png";

  resetEvaluatie()

  setTimeout(verwijderTypewriter, 5500);

}
eevee4.addEventListener("click", veranderTekstEevee4);


// Eevee 5 tekst - Umbreon
function veranderTekstEevee5(typewriterDuur) {
  // eevee5.classList.add("kort");

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    tekstVenster.innerHTML = "Het is nacht, ik kan evolueren naar Umbreon!";

    uitzonderingEeveeKnopVullen("Evolueer naar Umbreon", "umbreon-knop", "white");
  }
  else {
    tekstVenster.innerHTML = "Ik moet evolueren naar Umbreon, dit kan ik alleen in de nacht. Zorg dat het nacht wordt!";
  }

  tekstVenster.classList.add("typewriter");

  resetEvaluatie()

  setTimeout(verwijderTypewriter, 4500);

}
eevee5.addEventListener("click", veranderTekstEevee5);


// Eevee 6 tekst - Espeon
function veranderTekstEevee6(typewriterDuur) {
  // eevee6.classList.add("kort");
  tekstVenster.innerHTML = "Ik moet evolueren naar Espeon, dit kan ik alleen overdag.";
  tekstVenster.classList.add("typewriter");

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    tekstVenster.innerHTML = "Het is overdag, ik kan evolueren naar Espeon!";

    uitzonderingEeveeKnopVullen("Evolueer naar Espeon", "espeon-knop", "#F7C7FC");

  }
  else {
    tekstVenster.innerHTML = "Ik moet evolueren naar Espeon, dit kan ik alleen overdag. Zorg dat het overdag wordt!";
  }

  resetEvaluatie()

  setTimeout(verwijderTypewriter, 4000);

}
eevee6.addEventListener("click", veranderTekstEevee6);


// Eevee 7 tekst
function veranderTekstEevee7(typewriterDuur) {
  
  tekstVenster.innerHTML = "Ik moet evolueren naar Leafeon, hiervoor moet ik in een gras-gebied zijn.";
  tekstVenster.classList.add("typewriter");

  if (document.body.classList.contains("gras-gebied")) {

    tekstVenster.innerHTML = "Ik zit in een gras-gebied, ik ben klaar om te evolueren!";
    uitzonderingEeveeKnopVullen("Evolueer naar Leafeon", "leafeon-knop", "#78A068");
  }
  else {
    tekstVenster.innerHTML = "Ik moet evolueren naar Leafeon, hiervoor moet ik in een gras-gebied zijn.";
  }

  resetEvaluatie()

  setTimeout(verwijderTypewriter, 5000);

}
eevee7.addEventListener("click", veranderTekstEevee7);


// Eevee 8 tekst
function veranderTekstEevee8(typewriterDuur) {
  // eevee8.classList.add("kort");
  tekstVenster.classList.add("typewriter");

  if (document.body.classList.contains("ijs-gebied")) {

    tekstVenster.innerHTML = "Perfect! een ijsgebied, nu kan ik evolueren!";
    uitzonderingEeveeKnopVullen("Evolueer naar Glaceon", "glaceon-knop", "#BAEAFF");
  }
  else {
    tekstVenster.innerHTML = "Ik moet evolueren naar Glaceon, hiervoor moet ik in een ijs-gebied zijn.";
  }

  resetEvaluatie()

  setTimeout(verwijderTypewriter, 5000);

}
eevee8.addEventListener("click", veranderTekstEevee8);


// Eevee 9 tekst
function veranderTekstEevee9(typewriterDuur) {
  // eevee8.classList.add("kort");
  tekstVenster.innerHTML = "Ik moet evolueren naar Sylveon, eerst moet ik een snoepje hebben. Kijk in je rugtas!";
  tekstVenster.classList.add("typewriter");

  resetEvaluatie()

  setTimeout(verwijderTypewriter, 4000);

}
eevee9.addEventListener("click", veranderTekstEevee9);



// ---------------------------- //
// -------- EVOLUEREN --------- //
// ---------------------------- //

var fireStone = document.querySelector("article:nth-child(2) section:nth-child(2) ul li:nth-child(2) button");
var waterStone = document.querySelector("article:nth-child(2) section:nth-child(2) ul li:nth-child(3) button");
var thunderStone = document.querySelector("article:nth-child(2) section:nth-child(2) ul li:nth-child(4) button");
var rareCandy = document.querySelector("article:nth-child(2) section:nth-child(2) ul li:nth-child(10) button");

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

        eevee3.classList.add("geevolueerd");
    }, 7600);
}



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


// Rare Candy
function evolveRareCandy() {
  console.log("Rare Candy Evolve");
  normaleEevee.classList.add("evolve");
  evaluatieEevee.classList.add("evolve");

  evaluatieEevee.src = "images/pokemons/sylveon2.png";

  setTimeout(() => {
      tekstVenster.innerHTML = "EEVEE is geevolueerd in SYLVEON!";
      console.log("Gevolueerd naar SYLVEON!");

      eevee9.src = "images/pokemons/sylveon.png";
      tekstVenster.classList.remove("typewriter");
  }, 7600);

}


// Umbreon
function evolveUmbreonNacht() {
  console.log("Umbreon Nacht Evolve");
  normaleEevee.classList.add("evolve");
  evaluatieEevee.classList.add("evolve");

  evaluatieEevee.src = "images/pokemons/umbreon2.png";

  setTimeout(() => {
      tekstVenster.innerHTML = "EEVEE is geevolueerd in Umbreon!";
      console.log("Gevolueerd naar Umbreon!");

      eevee5.src = "images/pokemons/umbreon.png";
      tekstVenster.classList.remove("typewriter");

      uitzonderingEeveeKnop.classList.remove("umbreonKnop");
  }, 7600);
}


// Espeon
function evolveEspeonDag() {
  console.log("Espeon Dag Evolve");
  normaleEevee.classList.add("evolve");
  evaluatieEevee.classList.add("evolve");

  evaluatieEevee.src = "images/pokemons/espeon2.png";

  setTimeout(() => {
      tekstVenster.innerHTML = "EEVEE is geevolueerd in Espeon!";
      console.log("Gevolueerd naar Espeon!");

      eevee6.src = "images/pokemons/espeon.png";
      tekstVenster.classList.remove("typewriter");

      uitzonderingEeveeKnop.classList.remove("espeonKnop");
  }, 7600);
}


// Knoppen weghalen
function evolveUitzonderingEevee() {
  if (uitzonderingEeveeKnop.classList.contains("espeon-knop")) {
    evolveEspeonDag();
    uitzonderingEeveeKnop.style.opacity = "0";
  }
  if (uitzonderingEeveeKnop.classList.contains("umbreon-knop")) {
    evolveUmbreonNacht();
    uitzonderingEeveeKnop.style.opacity = "0";
  }
  if (uitzonderingEeveeKnop.classList.contains("leafeon-knop")) {
    evolveLeafeonGras();
    uitzonderingEeveeKnop.style.opacity = "0";
  }
  if (uitzonderingEeveeKnop.classList.contains("glaceon-knop")) {
    evolveGlaceonIjs();
    uitzonderingEeveeKnop.style.opacity = "0";
  }
}
uitzonderingEeveeKnop.addEventListener("click", evolveUitzonderingEevee);


// Leafeon
function evolveLeafeonGras() {
  console.log("Evolve Leafeon");
  normaleEevee.classList.add("evolve");
  evaluatieEevee.classList.add("evolve");

  evaluatieEevee.src = "images/pokemons/leafeon2.png";

  setTimeout(() => {
      tekstVenster.innerHTML = "EEVEE is geevolueerd in LEAFEON!";
      console.log("Gevolueerd naar LEAFEON!");

      eevee7.src = "images/pokemons/leafeon.png";
      tekstVenster.classList.remove("typewriter");

      uitzonderingEeveeKnop.classList.remove("leafeonKnop");
  }, 7600);

}


// Glaceon
function evolveGlaceonIjs() {
  console.log("Evolve Glaceon");
  normaleEevee.classList.add("evolve");
  evaluatieEevee.classList.add("evolve");

  evaluatieEevee.src = "images/pokemons/glaceon2.png";

  setTimeout(() => {
      tekstVenster.innerHTML = "EEVEE is geevolueerd in GLACEON!";
      console.log("Gevolueerd naar GLACEON!");

      eevee8.src = "images/pokemons/glaceon.png";
      tekstVenster.classList.remove("typewriter");

      uitzonderingEeveeKnop.classList.remove("glaceonKnop");
  }, 7600);

}



// ---------------------------- //
// ---------- DRAG ---------- //
// ---------------------------- //

// https://sortablejs.github.io/Sortable/

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


// drag & drop item

var testImg = document.querySelector("body .testimg");


function testImgFuncVuur() {
  console.log("fireestonee");

  testImg.src = "images/items/firestone.png";

  steen.classList.remove("wegsteen");
}
fireStone.addEventListener("dblclick", testImgFuncVuur);


function testImgFuncWater() {
  console.log("waterrstonee");
  testImg.src = "images/items/waterstone.png";

  steen.classList.remove("wegsteen");
}
waterStone.addEventListener("dblclick", testImgFuncWater);


function testImgFuncThunder() {
  console.log("thunderrstonee");
  testImg.src = "images/items/thunderstone.png";

  steen.classList.remove("wegsteen");
}
thunderStone.addEventListener("dblclick", testImgFuncThunder);


function testImgFuncCandy() {
  console.log("raree canddyy");
  testImg.src = "images/items/rare-candy.png";

  steen.classList.remove("wegsteen");
}
rareCandy.addEventListener("dblclick", testImgFuncCandy);



// Check welke steen wordt aangeklikt, voer op basis daarvan de bijhorende evaluatie-functie uit
function checkImg() {

  const source = testImg.getAttribute('src');

  if(source == "images/items/firestone.png") {
    evolveFireStone();
    eevee2.classList.add("geevolueerd-klein");
    console.log("fire evolve");
  }
  if(source == "images/items/waterstone.png") {
    evolveWaterStone();
    eevee3.classList.add("geevolueerd-klein");
    console.log("water evolve");
  }
  if(source == "images/items/thunderstone.png") {
    evolveThunderStone();
    eevee4.classList.add("geevolueerd-klein");
    console.log("thunder evolve");
  }
  if(source == "images/items/rare-candy.png") {
    evolveRareCandy();
    eevee9.classList.add("geevolueerd-klein");
    console.log("rare-candy sylveon evolve");
  }
}


// PROBEREN ALLE EEVEES OP TE HALEN


// var imgGevolueerd = document.querySelector("img.gevolueerd")
// document.querySelector("article:nth-child(1) section:nth-child(1) ul li:nth-child(1) img")

// var alleEevees = document.querySelectorAll("article:nth-child(1) section:nth-child(1) ul li img");

// for (let i = 0; i < alleEevees.length; i++) {
//   console.log(alleEevees.length);
// }


// var alleImages = document.querySelectorAll("article:nth-child(1) section:nth-child(1) ul li img");


// const alleGevolueerdeEevees = document.querySelectorAll('article:nth-child(1) section:nth-child(1) ul li img');

// [].forEach.call(alleGevolueerdeEevees, (e)=>{
//  console.log(e);
// });

// function testEvolve() {

  // const alleGevolueerdeEevees = document.querySelectorAll('article:nth-child(1) section:nth-child(1) ul li img');

  // [].forEach.call(alleGevolueerdeEevees, (e)=>{
  //  console.log(e);
  // });

//   if(eevee2.classList.contains("geevolueerd-klein")) {
//       console.log("Deze is al geevolueerd");
//       tekstVenster.innerHTML = "Sanne deze is al geevolueerd!";
//     }
//   else {
//       console.log("nog niet geevolueerd");
//   };
// }
// eevee2.addEventListener("click", testEvolve);

// function lalaFunc() {
//   testVar.style.backgroundColor = "red";
// }
// testVar.addEventListener("click", lalaFunc);


// var images = document.querySelectorAll("article:nth-child(1) section:nth-child(1) ul li img"); 
// var srcList = [];
// for(var i = 0; i < images.length; i++) {
//     srcList.push(images[i].src);
//     console.log(images[i].src);
// }

// var allePlaatjes = document.images;


// function alGeevolueerd(){
//   if(allePlaatjes.classList.contains("geevolueerd-klein")) {
//     console.log("Deze is al geevolueerd");
//     tekstVenster.innerHTML = "Sanne deze is al geevolueerd!";
//   }
//   else {
//     console.log("nog niet geevolueerd");
//   }
// }
// document.images.addEventListener("click", alGeevolueerd);


// function alGeevolueerdBoos(){
//   if(images.classList.contains("geevolueerd-klein")) {
//     tekstVenster.innerHTML = "Nu wordt de Eevee Boos!!!";
//   }
// }
// eevee2.addEventListener("dblclick", alGeevolueerdBoos);


var normaalbg = document.querySelector("header ul li:nth-child(1) button");
var radioNormaal = document.querySelector("header ul li:nth-child(1) button input[type='radio']");
var radioGras = document.querySelector("header ul li:nth-child(2) button input[type='radio']");
var radioIjs = document.querySelector("header ul li:nth-child(3) button input[type='radio']");

var boxBg = document.querySelector("article:nth-child(1) section:nth-child(1)");


// Normale Gebied
var tekstVeldBorder = document.querySelector("article:nth-child(1) section:nth-child(2)");
var boxBorder = document.querySelector("article:nth-child(1) section:nth-child(1)");

function veranderGebiedNormaal() {
  console.log("normaal");

  boxBg.style.backgroundImage = "url('images/achtergronden/aarde2.png')";
  
  document.body.style.backgroundColor = "var(--normale-gebied-bg)";

  document.body.classList.remove("gras-gebied");
  document.body.classList.remove("ijs-gebied");
}
radioNormaal.addEventListener("change",veranderGebiedNormaal);


// Gras gebied
function veranderGebiedGras() {
  console.log("gras");

  boxBg.style.backgroundImage = "url('images/achtergronden/gras4.png')";

  document.body.style.backgroundColor = "var(--gras-gebied-bg)";

  document.body.classList.remove("ijs-gebied");
  document.body.classList.add("gras-gebied");
}
radioGras.addEventListener("change",veranderGebiedGras);



// Ijs gebied
function veranderGebiedIjs() {
  console.log("Ijs");

  boxBg.style.backgroundImage = "url('images/achtergronden/sneeuw3.png')";

  document.body.style.backgroundColor = "var(--ijs-gebied-bg)";
  
  document.body.classList.remove("gras-gebied");
  document.body.classList.add("ijs-gebied");
}
radioIjs.addEventListener("change",veranderGebiedIjs);


if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
  console.log("dark");
}