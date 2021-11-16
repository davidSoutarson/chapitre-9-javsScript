//3a)
var userTentatives = prompt("Nouvelle partie\ncombien de tentatives vouler vous ?\nEntre un chiffre < 1 > 100");
if (userTentatives< 1 ||userTentatives > 100 ) {
  userTentatives = 20;
  alert("Nous vous avons choisie 20 tentatives par défaut")
}
alert("vous alert tenter de trouver le chiffre en:"+ userTentatives +" coups!");

//2a)
var maxi =100;
var min =1;
//genration de chifreMister
var chiffreM = Math.round( Math.random(min, maxi)*(maxi - min) + 1);
var chiffreSesie ="";
var coup=0;
var coupRestant= userTentatives ;
document.getElementById("maxValue").innerHTML = maxi;
document.getElementById("userTentatives").innerHTML = userTentatives;

if (coupRestant >= 0 ) {

  function testeChiffre()
  {
    var chiffreSesie = document.forms["chifreMister"]["chiffreSesie"].value;
//2b)
    if (chiffreSesie == null || chiffreSesie == ""){
      alert("Saisiez un chifre \n Vous aver "+userTentatives +" coup \n Pour deviner se chiffre miseter")
      return false;
    }
    else {
      coup= coup+1;
      coupRestant = userTentatives -coup;
      //afichage par coup jouer
      document.getElementById("aficheSesie").innerHTML = chiffreSesie;
      document.getElementById("coup").innerHTML = coup;
      document.getElementById("coupRestant").innerHTML = coupRestant;

      if (coup <= userTentatives)
        {
          //2c)
          if (chiffreSesie < chiffreM ) {
            alert("Perdue!\nChiffre saisie "+chiffreSesie +
            "\nCe chrifre saisie et top Petit.\nIl vous restte "
            + coupRestant + "coups pour touvez le chifre mystère");
            document.getElementById("resulta").innerHTML = "Trop petit";
            return false;
          }
          //2d)
          if (chiffreSesie > chiffreM ) {
            alert("Perdue!\nChiffre saisie "+chiffreSesie +
            "\nCe chrifre saisie et top Grand.\nIl vous restte "
            + coupRestant + "coups pour touvez le chifre mystère");
            document.getElementById("resulta").innerHTML = "Trop grand";
            return false;
          }
          //2e)
          if (chiffreSesie == chiffreM ) {
            alert("Ganier \n vous avez deviné en: " +coup + " sur "+ userTentatives+"." );
            return true;
          }
        }else {
          confirm("Vous avez atin la limite de "+userTentatives+" coups !!!")
        }

    }

  }

}
