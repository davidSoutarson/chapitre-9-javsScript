
    var x=0;
    var i = 8; // tour de boucle repte i x le Calcule.

     document.write( "valeur de x = " + x + "</br>");
     document.write( "valeur de i = " + i + "</br> </br>");

    while (x <= i){
      if (x == 7) {
        document.write("</br>cacule encour " + 1 + " / " +( x -7 )+"</br>  Calcule impossible </br> </br>")
      } else {
        document.write( "</br>cacule encour " + 1 + " / " +( x -7 )+"</br>");

        document.write((1 / (x - 7)) + "</br>");
      }
    x++;
    }
    document.write("Fin de boucle </br>");
