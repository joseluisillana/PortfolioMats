/**
 DESTRUTURACION DE OBJETOS
 Y
 DESTRUTURACION DE ARREGLOS
**/
// ##################### DESTRUTURACION DE OBJETOS
var avenger = {
    nombre: "Steve",
    clave: "Capitán America",
    poder: "Droga"
};
// Como estraemos la información del vengador para 
// usarla por ahi?
// Opción 1 (cutre)
var nombre1 = avenger.nombre;
var clave1 = avenger.clave;
var poder1 = avenger.poder;
console.log(nombre1, clave1, poder1);
// Opción 2 (destructuración)
var nombre = avenger.nombre, clave = avenger.clave, poder = avenger.poder;
console.log(nombre, clave, poder);
// Opción 3 (destructuración con alias)
var elnombre = avenger.nombre, laclave = avenger.clave, elpoder = avenger.poder;
console.log(elnombre, laclave, elpoder);
// ##################### DESTRUTURACION DE ARREGLOS
var avengers = ["Thor", "Captain America", "Iron Man", "Hulk"];
// Ésto no es más que una definición de variables y asignación de 
// valores usando el contenido de las posiciones de la lista (Array strings)
var thor = avengers[0], camerica = avengers[1], ironman = avengers[2], hulk = avengers[3];
console.log(thor, camerica, ironman, hulk);
// OJO, si solo quisieramos sacar a Iron Man sería así
var ironmansolo = avengers[2];
console.log(ironmansolo);
