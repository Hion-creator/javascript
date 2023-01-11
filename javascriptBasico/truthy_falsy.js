// Truthy e Falsy
//Falsy
console.log(`valor 0 = ${Boolean(0)}`);
console.log(`valor null = ${Boolean(null)}`);
console.log(`valor NaN = ${Boolean(NaN)}`);
console.log(`valor undefined = ${Boolean(undefined)}`);
console.log(`valor false = ${Boolean(false)}`);
console.log(`valor "" = ${Boolean("")}`);

//Truthy
console.log("Truthy");
console.log(`valor " " = ${Boolean(" ")}`);
console.log(`valor 1 = ${Boolean(1)}`);
console.log(`valor [] = ${Boolean([])}`);
console.log(`valor {} = ${Boolean({})}`);
console.log(`valor function = ${Boolean(function(){})}`);
console.log(`valor true = ${Boolean(true)}`);