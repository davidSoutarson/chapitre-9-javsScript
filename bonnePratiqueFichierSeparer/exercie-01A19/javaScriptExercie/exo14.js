var nom;
var redo;

do {
  nom = prompt("Saisiser votre non", "Votre nom ici");
  document.write(nom+ " : titi.</br>");
  switch (nom) {
    case null:
    redo = comfirm("voulez vous réessayer?");
    break;
    case "" :
    alert("Le nom et peut être vide");
    redo = true;
    break;
    case "Votre nom ici":
    alert("Le nom ne peut etre vide");
    redo = true;
    break
    default:
    alert("Votre non est: " + nom);
  }
}
while (redo);
