document.write("Bonjour jeune padaoine que le javascript soit avec toie ! <br/>");


  var titre = "Toto"; // a fair varier ?
  var nom = "Dupond"; // a fair varier ?
  if (!titre) {
    document.write("Le nom doit être renseigné" + "<br/>");
  }
  else if (!nom) {
    document.write("Le nom doit être renseigné");
  }
  else if (titre != "Monsieur" && titre != "Madame") {
    document.write("Je ne connais pas ce titre:" + titre +"<br/>" );
  }
  else {
    document.write("Bonjour"+ " " + titre +" "+ nom  + "! <br/>");
  }

  document.write(typeof titre);
  console.log(typeof titre);
