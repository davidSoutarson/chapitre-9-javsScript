function Vin(marque, annee, prix) { //construteur
  this.marque = marque;
  this.annee = annee;
  this.prix = prix;
  this.quantite = 0;
  this.montant = function() {
    return this.quantite * this.prix;
  }
}
var vins = new Array();
var vin1 = new Vin("Saint Estèphe", "2003", 14 );
vin1.quantite += 5;
vins.push(vin1);
var vin2 = new Vin("Saint julient" , "1997", 37);
vin2.quantite += 25;
vins.push(vin2);
var total = 0;
var montant;

vins.forEach(function(vin){
  document.write("Marque: " + vin.marque +"</br>");
  document.write("Annee: " + vin.annee + "</br>");
  document.write("Quantité: " + vin.quantite + "</br>");
  document.write("Prix: " + vin.prix + "€</br>");
  montant = vin.montant();
  document.write("Montant: " + montant + "€</br>");
  total += montant;
  document.write("</br>");
})
/*
//Affichage
*/
document.write("Total:" + total + "€</br>")
