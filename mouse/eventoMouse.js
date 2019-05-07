document.addEventListener("click", dibujarMouse);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var positionx = 400;
var positiony = 400;

dibujarLinea("red", positionx - 1, positiony -1, positionx + 1, positiony + 1, papel);
//dibujar marcos
dibujarLinea("red", 1, 1, 1, 799, papel);
dibujarLinea("red", 1, 1, 799, 1, papel);
dibujarLinea("red", 799, 799, 1, 799, papel);
dibujarLinea("red", 799, 799, 799, 1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 4;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}


function dibujarMouse(evento){
  var colorcito = "green";
  //console.log(evento); //ver elementos de click
  if(evento.isTrusted == true){
    //console.log("presiono el mouse");
    dibujarLinea(colorcito, positionx, positiony, evento.layerX, evento.layerY, papel);
    positionx = evento.layerX;
    positiony = evento.layerY;
  }
}
