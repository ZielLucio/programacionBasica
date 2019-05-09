var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
  url:"tile.png",
  cargaOk: false
};

var vaca = {
  url: "vaca.png",
  cargaOk: false,
  cantidad: aleatorio(0,10)
  };

var cerdo = {
  url: "cerdo.png",
  cargaOk: false,
  cantidad: aleatorio(0,6)
};

var pollo = {
  url: "pollo.png",
  cargaOk: false,
  cantidad: aleatorio(0,3)
};


fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

function cargarFondo(){
  fondo.cargaOk = true;
  dibujar();
}

function cargarVacas(){
  vaca.cargaOk = true;
  dibujar();
}

function cargarPollos(){
  pollo.cargaOk = true;
  dibujar();
}

function cargarCerdos(){
  cerdo.cargaOk = true;
  dibujar();
}

function dibujar(){
  if(fondo.cargaOk){
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOk){
    console.log("Cantidad de vacas: "+ vaca.cantidad);
    for(var v = 0; v < vaca.cantidad; v++ ){
      var x = aleatorio(0,7);
      var y = aleatorio(0,7);
      x = x * 60;
      y = y * 60;
      papel.drawImage(vaca.imagen, x,y);
    }
  }
  if(pollo.cargaOk){
    console.log("Cantidad Pollos: "+ pollo.cantidad);
    for(var p=0; p<pollo.cantidad; p++){
      var x = aleatorio(0,7);
      var y = aleatorio(0,7);
      x = x * 60;
      y = y * 60;
      papel.drawImage(pollo.imagen, x,y);
    }
  }
  if(cerdo.cargaOk){
    console.log("Cantidad Cerdos: "+ cerdo.cantidad);
    for(var c=0; c<cerdo.cantidad; c++){
      var x = aleatorio(0,7);
      var y = aleatorio(0,7);
      x = x * 60;
      y = y * 60;
      papel.drawImage(cerdo.imagen, x,y);
    }
  }
}


function aleatorio(min,maxi){
  var resultado;
  resultado = Math.floor (Math.random() *(maxi-min + 1)) + min;
  return resultado;
}
