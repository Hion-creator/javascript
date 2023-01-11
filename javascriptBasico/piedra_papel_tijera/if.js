//descripcion: Ejemplo de uso de if

if (false) {
  console.log("Hola");
}else{
  console.log("Adios");
}

var edad = 17;

if (edad == 18){
    console.log("puedes votar, sera tu primera votacion");
}else if (edad > 18){
    console.log("puedes votar de nuevo");
}else{
    console.log("aun no puedes votar");
}

//operador ternario
//condition? true : false;

var numero = 1;
var resultado = numero === "1" ? "Si soy un uno" : "No, no soy un uno";
console.log(resultado);

//juego piedra papel o tijera
var piedra = 0;
var papel = 1;
var tijera = 2;

var opciones = ["Piedra", "Papel", "Tijera"];

var opcionUsuario;
var opcionMaquina = Math.floor(Math.random()*3);

opcionUsuario = prompt("¿Que eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);

alert("Elegiste " + opciones[opcionUsuario]);
alert("Javascript eligio " + opciones[opcionMaquina]);

if(opcionUsuario == piedra){
    if(opcionMaquina == piedra){
        alert("Empate");
    }else if(opcionMaquina == papel){
        alert("Perdiste");
    }else if(opcionMaquina == tijera){
        alert("Ganaste");
    }
    }else if(opcionUsuario == papel){
    if(opcionMaquina == piedra){
        alert("Ganaste");
    }else if(opcionMaquina == papel){
        alert("Empate");
    }else if(opcionMaquina == tijera){
        alert("Perdiste");
    }
    }else if(opcionUsuario == tijera){
    if(opcionMaquina == piedra){
        alert("Perdiste");
    }else if(opcionMaquina == papel){
        alert("Ganaste");
    }else if(opcionMaquina == tijera){
        alert("Empate");
    }
    }else{
    alert("opcion no valida");
    }
