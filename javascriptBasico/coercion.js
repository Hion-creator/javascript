// Description: Ejemplo de coerción de tipos en JavaScript
//coercion explicita
a =4 + "7";//47
console.log(`tipo ${typeof a} ${a}`);

b=4 * "7";//28
console.log(`tipo ${typeof b} ${b}`);

c = 2+ true;//3
console.log(`tipo ${typeof c} ${c}`);

d = false - 3;//-3
console.log(`tipo ${typeof d} ${d}`);

e = !3;//false
console.log(`tipo ${typeof e} ${e}`);

//coercion implicita

var a = 20;
//covierten a un valor en string
var b = a + "";//"20"
var c = String(a);//"20"
console.log(`tipo ${typeof b} ${b}`);

//covierten a un valor numerico
var d = Number(c);//20
console.log(`tipo ${typeof d} ${d}`);

