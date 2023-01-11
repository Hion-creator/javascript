// Descripción: Ejemplo de array en JavaScript
var frutas = ["manzana", "pera", "uva", "sandia"];
//tipo de datos
console.log(typeof frutas);
console.log(frutas);
//cantidad de obejtos
console.log(frutas.length);
//agregar elementios al final del array
var masFrutas = frutas.push("cereza");
console.log(frutas);
//eliminar el ultimo elemento del array
var ultimo = frutas.pop("cereza");
console.log(frutas);
//agregar un elemento al inicio del array
var nuevaLongitud = frutas.unshift("mango");
console.log(frutas);
//eliminar el primer elemento del array
var borrarFruta = frutas.shift("mango");
console.log(frutas);

//ejercicio
function solution(arraySecreto) {
    // Tu código aquí 👈
    var a = (typeof arraySecreto[0]) === "string";
    return a;
  }
  function solution2(arraySecreto) {
    return(typeof arraySecreto[0] === "string"? true: false)
  }

  console.log(solution(["hola", "mundo", "soy", "un", "array"])); // true
  console.log(solution([2, "mundo", "soy", "un", "array"])); // false

  console.log(solution2(["hola", "mundo", "soy", "un", "array"])); // true
  console.log(solution2([2, "mundo", "soy", "un", "array"])); // false
//elementos principales de un array
