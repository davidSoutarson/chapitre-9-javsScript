var maxi =100;
var min =1;
var chiffreM = Math.round( Math.random(min, maxi)*(maxi - min) + 1);
console.log(chiffreM)
var numberTry = 0;
var userSesie = document.getElementById(chiffreSesie);

if(chiffreM > maxi){
  chiffreM = naxi;
}

document.getElementById("maxValue").innerHTML = maxi;
chiffreSesie.value = "";
chiffreSesie.focus();


function trouveLeChiffre(){
  var userSesie = chiffreSesie.value;
  var pattern = /^\d+$/;

  if (patern.test(userSesie)) {
    numberTry++;
    userSesie = parseInt(userSesie);
    console.log(numberTry);

    if (userSesie < chiffreM) {
      document.getElementById("result").innerHTML= "Le nomber mister est plus plus grand!";
      chiffreSesie.value = "";
      chiffreSesie.focus();
    }else if (userSesie > chiffreM) {
      document.getElementById("result").innerHTML= "Le nomber mister est plus plus petit!";
      chiffreSesie.value = "";
      chiffreSesie.focus();
    }else {
      document.getElementById("result").innerHTML= "Vous aver trouver la solution en"+numberTry+" coup!";
    }
  }else {
    document.getElementById("result").innerHTML= "La valeur sesi doit etre un nombre!!";
  }
  return false;
}
