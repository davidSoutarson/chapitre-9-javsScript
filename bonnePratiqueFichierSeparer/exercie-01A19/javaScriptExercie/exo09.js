var titre = "Mademoiselle"; // a fair varier avec => Madame Monsieur Mademoiselle Toto null
var resutat;
resutat =(!titre || (titre!= "Mademoiselle" && titre!= "Monsieur" && titre != "Madame")) ?"noK":"oK";

document.write(titre + " " + resutat + "</br>" );
