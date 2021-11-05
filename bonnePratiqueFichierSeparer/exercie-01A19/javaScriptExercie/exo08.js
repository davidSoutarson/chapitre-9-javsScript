var titre = "Madame"; // a fair varier ?
var nom = "Dupond"; // a fair varier ?
var resutat;
switch (titre) {
  case null:
    document.write("Le titre doit être renseigné<br/>");
    break;
    case "Madame" :
    case "Monsieur" :
    case "Mademoiselle" :
    if (!nom) {
      document.write("Le nom doit être renseigné<br/>");
    }
    else {
      document.write("Bonjour"+ " " + titre +" "+ nom  + "<br/>");
    }
  break;
  default: document.write("Je ne connais pas ce titre:" + titre +"<br/>");
}
