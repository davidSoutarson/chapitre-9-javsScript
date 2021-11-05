function Vin(marque, annee, prix) { //construteur
  this.marque = marque;
  this.annee = annee;
  this.prix = prix;
  this.quantite = 1;
  this.montant = function() {
    return this.quantite * this.prix;
  }
}
var vin1 = new Vin("Saint Estèphe", "2003", 14 );
vin1.quantite = 6;
var vin2 = new Vin("Saint julient" , "1997", 37);
vin2.quantite = 1;
/*
//Affichage
*/

var total = 0;
var montant;

// vin 1
document.write("Marque: " + vin1.marque +"</br>");
document.write("Annee: " + vin1.annee + "</br>");
document.write("Quantité: " + vin1.quantite + "</br>");
document.write("Prix: " + vin1.prix + "€</br>");
montant = vin1.montant();
document.write("Montant: " + montant + "€</br>");
total +=montant
document.write("</br>");
// vin 2
document.write("Marque: " + vin2.marque +"</br>");
document.write("Annee: " + vin2.annee + "</br>");
document.write("Quantité: " + vin2.quantite + "</br>");
document.write("Prix: " + vin2.prix + "€</br>");
montant = vin2.montant();
document.write("Montant: " + montant + "€</br>");
total +=montant
document.write("</br>");
document.write("Total: " + total + "€</br>");
