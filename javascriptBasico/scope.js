//el scope es cada uno de los entornos donde las variables tiene alcance dentro del codigo de 
//variable global
var miNombre = "Juan";

function nombre() {
    //variable local
    var miApellido = "salazar";
    console.log(`${miNombre} ${miApellido}`)
}

nombre();
//no se puede acceder de afuera hacia adentro a una variable local solo funciona de adentro hacia afuera
//el accesos a las vairbales solo funciona en un sentido del scope mas pequeño(scope de bloque) al mas grande(scope global)
//console.log(miApellido);