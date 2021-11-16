

  var chiffre = Math.random(1, 100)*(100 - 1) + 1;

  document.write(Math.round(chiffre));

  function chiffreRandom(min, max){
    return Math.round(Math.random() * (max - min) + min);
  }

  document.write("<br>"+ chiffreRandom(1, 100));
