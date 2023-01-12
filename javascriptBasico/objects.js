var miAuto = {
// Propiedades
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function () {
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
}; // Objeto literal

// Acceder a las propiedades del objeto
miAuto.marca; // Toyota
miAuto.modelo; // Corolla
miAuto.annio; // 2020
miAuto.detalleDelAuto(); // Auto Corolla 2020