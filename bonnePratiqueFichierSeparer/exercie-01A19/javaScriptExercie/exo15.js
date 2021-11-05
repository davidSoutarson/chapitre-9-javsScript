var x;
for( x = 5 ; x >= 0; x--){
  document.write("valeur de x ="+ x +"</br>");
  try {
    document.write((2/(y - x)) + "</br>");
  }
catch(err) {
   document.write(err +"</br>");
  }
}
