//© Michael Karssen 99038898
//Applicatie en media ontwikkelaar

alert("We hebben een aantal gegevens van u nodig");

function Functie1(){ // deze functie zorgt ervoor dat je een popupvenster krijgt waar je je voornaam kunt invullen
  var voornaam = prompt("Vul hier uw voornaam in", "Jan ");
  if (voornaam != null){
    document.getElementById("demo1").innerHTML =
    "Hallo " + voornaam + "! Hoe gaat het met u?"
  }
}

function Functie2(){ // deze functie zorgt ervoor dat je een popupvenster krijgt waar je je achternaam kunt invullen
  var achternaam = prompt("Vul hier uw achternaam in", "Alleman");
  if (achternaam != null){
    document.getElementById("demo2").innerHTML =
    achternaam + " wat een leuke naam!"
  }
}

function Functie3(){ // deze functie zorgt ervoor dat je een popupvenster krijgt waar je je leeftijd kunt invullen
  var leeftijd = prompt("Vul hier uw leeftijd in", "24");
  if (leeftijd != null){
    document.getElementById("demo3").innerHTML =
    leeftijd + " jaar? wat een mooie leeftijd!"
  }
}

function testFunktie(){ // dit is een test functie waar je in 1 keer je voor en achternaam en leeftijd in kunt vullen
  var voornaam = prompt("Vul hier uw voornaam in");
  var achternaam = prompt("vul hier uw achternaam in");
  var leeftijd = prompt("vul hier uw leeftijd in");
  if (leeftijd != null){
    document.getElementById("demo4").innerHTML =
      "Hallo" + " " + voornaam + " " + achternaam + " " + leeftijd + " " + "welkom op deze site"
  }
}
