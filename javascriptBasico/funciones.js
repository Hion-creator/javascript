//funcion Declarativa
function miFuncion() {
    return 3;
}

miFuncion();

//funcion de Expresion o anonimas
//se asigna a una variable una funcion
var miFuncion = function(a,b) {
    return a + b;
}

miFuncion();

//ejemplo de funcion
function saludarEstudiantes(estudiante){
    console.log(`hola ${estudiante}`);
}

saludarEstudiantes("andres")

//ejemplo de funcion 2 return

function sumar(a,b){
    var resultado = a + b;
    return resultado;
}
//funcion simplificada
function sumar2(a,b){
    return a+b;
}

console.log(`suma: ${sumar(1,2)}`);
console.log(`suma dos: ${sumar2(1,2)}`);

//ejercicio
 function solution(valor){
    return (typeof valor);
 }

 console.log(solution(1));
 console.log(solution("diego"));
 console.log(solution(true));
