// Description: Arrays
//push agrega un elemento al final del array
[1,2,3].push(4);//[1,2,3,4]
//pop elimina el ultimo elemento del array
[1,2,3].pop();//[1,2]
//unshift agrega un elemento al inicio del array
[1,2,3].unshift(0);//[0,1,2,3]
//shift elimina el primer elemento del array
[1,2,3].shift();//[2,3]
//splice agrega o elimina elementos en cualquier posicion del array
[1,2,3].splice(1,1);//[1,3]
[1,2,3].splice(1,0,1.5);//[1,1.5,2,3]
//slice crea un nuevo array a partir de una posicion inicial y final
[1,2,3].slice(1,2);//[2]
[1,2,3].slice(1);//[2,3]
//concat concatena dos arrays
[1,2,3].concat([4,5,6]);//[1,2,3,4,5,6]
//join une los elementos de un array en un string
[1,2,3].join("-");//"1-2-3"
//indexOf busca un elemento en un array y devuelve su posicion
[1,2,3].indexOf(2);//1
//lastIndexOf busca un elemento en un array y devuelve su ultima posicion
[1,2,3,2].lastIndexOf(2);//3
//reverse invierte el orden de los elementos de un array
[1,2,3].reverse();//[3,2,1]
//sort ordena los elementos de un array
[3,2,1].sort();//[1,2,3]
//forEach recorre un array
[1,2,3].forEach(function(elemento,indice,array){
    console.log(elemento,indice);
});
//map crea un nuevo array con los resultados de la llamada a la funcion indicada aplicados a cada uno de sus elementos
[1,2,3].map(function(elemento){
    return elemento * 2;
});//[2,4,6]
//filter crea un nuevo array con todos los elementos que cumplan la condicion implementada por la funcion dada
[1,2,3].filter(function(elemento){
    return elemento > 1;
});[2,3]
//every determina si todos los elementos del array cumplen con la condicion implementada por la funcion dada
[1,2,3].every(function(elemento){
    return elemento > 0;
});//true
//some determina si al menos un elemento del array cumple con la condicion implementada por la funcion dada
[1,2,3].some(function(elemento){
    return elemento < 0;
});//false
//reduce ejecuta una funcion reductora sobre cada elemento de un array, devolviendo como resultado un unico valor
[1,2,3].reduce(function(acumulador,elemento){
    return acumulador + elemento;
});//6

