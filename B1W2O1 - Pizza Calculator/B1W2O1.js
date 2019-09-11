//© Michael Karssen 99038898
//Applicatie en media ontwikkelaar
// Pizza Calculator

var formaatsmall = prompt("Hoeveel small pizza's wilt u bestellen ?");
var formaatmedium = prompt("Hoeveel medium pizza's wilt u bestellen ?");
var formaatlarge = prompt("Hoeveel large pizza's wilt u bestellen ?");
document.write(formaatsmall, " Small pizza's " + "<br>");
document.write(formaatmedium, " Medium pizza's " + "<br>");
document.write(formaatlarge, " Large pizza's " + "<br>");

document.write("<br>");

const prijssmall = 3;
const prijsmedium = 5;
const prijslarge = 7;
document.write("Prijs small €", formaatsmall * prijssmall + "<br>");
document.write("Prijs medium €", formaatmedium * prijsmedium + "<br>");
document.write("Prijs large €", formaatlarge * prijslarge + "<br>");

document.write("<br>");

var totaalbedrag = (formaatsmall * prijssmall + formaatmedium * prijsmedium + formaatlarge * prijslarge);
document.write("Totaalbedrag €", totaalbedrag);
