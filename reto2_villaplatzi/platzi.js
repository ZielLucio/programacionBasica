var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
var x = 250;
var y = 250;

var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
document.addEventListener("keyup", dibujarCerdo);

var fondo = {
  url:"tile.png",
  cargaOk: false
};


var cerdo = {
  url: "cerdo.png",
  cargaOk: false,
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);


cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

function cargarFondo(){
  fondo.cargaOk = true;
  dibujar();
}


function cargarCerdos(){
  cerdo.cargaOk = true;
  dibujar(x,y);
}

function dibujar(x,y){
  if(fondo.cargaOk){
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(cerdo.cargaOk){
    papel.drawImage(cerdo.imagen, x,y);
  }
}

function dibujarCerdo(evento){
  var movimiento = 20;
  switch (evento.keyCode) {
    case teclas.UP:
      cargarCerdos();
      y = y - movimiento;
      break;
    case teclas.DOWN:
      cargarCerdos();
      y = y + movimiento;
    break;
    case teclas.LEFT:
      cargarCerdos();
      x = x - movimiento;
    break;
    case teclas.RIGHT:
      cargarCerdos();
      x = x + movimiento;
    break;
  }
}
