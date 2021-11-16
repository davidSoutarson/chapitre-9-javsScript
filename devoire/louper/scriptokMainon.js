var alea=Math.round(Math.random()*99)+1;//genere un nombre aleatoire
var coup=0;
function test(valeur)
{

coup=coup+1;
if (coup > 6)
	{
	partie=confirm("T'as perdu !\nIl fallait trouver : " + alea + "\nNouvelle partie ?");
	if (partie)
		{
		document.form1.commentaire.value="Nouvelle partie...";
		coup=0;
		alea=Math.round(Math.random()*99)+1;
		document.form1.coup.value=0;
		valeur.value="";
		}
		else
		{
		window.close();
		}
	}
	else
	{
	if (valeur.value < alea)
		document.form1.commentaire.value="Trop petit !";

	if (valeur.value > alea)
		document.form1.commentaire.value="Trop grand !" ;

	if (valeur.value == alea)
		document.form1.commentaire.value="Gagné !!!";

	document.form1.coup.value=coup;
	}
}
