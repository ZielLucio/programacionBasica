var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click",dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick(){

  var lineas = parseInt(texto.value);
  var l = 0;
  var yi, xf;
  var colorcito = "#FAA"
  var espacio = ancho / lineas;

  for(l=0; l<lineas; l=l+0.5){ //Operacion para dibujar el doble de lineas
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(colorcito, 0,yi,xf,300);
    dibujarLinea(colorcito, yi,0,300,xf); //Funcion invertida
  }

  dibujarLinea("red",1,1,1,300);
  dibujarLinea("red",1,299,299,299);
  dibujarLinea("red",299,1,299,299);
  dibujarLinea("red",1,1,299,1);
}
