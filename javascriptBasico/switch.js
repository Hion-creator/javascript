/* 
Description: Switch
estructura
switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/
//bandera
var numero = 1;

switch (numero) {
    case 1:
        console.log("soy 1");    
        break;

    case 2:
        console.log("soy 2");
        break;
    
    case 3:
        console.log("soy 3");
        break;
    default:
        console.log("no soy nada");
        break;
}

var pregunta = prompt("Ingresa tu opción: piedra, papel o tijera "); 
var user = pregunta.toLowerCase();
var options = ["piedra", "papel", "tijera"];
var machine = options[Math.floor(Math.random() * 3)];


// let numero = 'a';
//con true los casos van a pasar 
switch (true) {
    case (user === machine):
        console.log('es un empate');
        break;
    case (machine === 'piedra' && user === 'papel'):
        console.log('Ganaste')
        break;
    case (machine === 'papel'  && user === 'tijera'):
        console.log('Ganaste')
        break;
    case (machine === 'tijera' && user === 'piedra'):
        console.log('Ganaste')
        break;
    default:
        console.log('¡Perdiste!');       
}
