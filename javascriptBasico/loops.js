var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}
// Forma tradicional de hacerlo
for (var i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);
}
// Otra forma de hacerlo
for (var estudiante of estudiantes) {
    saludarEstudiantes(estudiante);
}

//while

var estudiantes2 = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes2(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

while (estudiantes2.length > 0) {
    console.log(estudiantes2);    
    var estudiante = estudiantes2.shift();//shift() elimina el primer elemento del array
    saludarEstudiantes2(estudiante);
}

