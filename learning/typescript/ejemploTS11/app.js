/**
 Definición de clases
**/
var Vengador = /** @class */ (function () {
    function Vengador() {
    }
    return Vengador;
}());
;
var hombreHormiga = new Vengador();
// No se ve nada, ¿porque?
console.log(hombreHormiga);
// Porque no tiene propiedades ningunas, solo lo hemos
// inicializado, y nuestra clase no tiene ningun constructor por defecto
// Creamos otra clase igual pero con un nombre por defecto... 
var VengadorPorDefecto = /** @class */ (function () {
    function VengadorPorDefecto() {
        this.nombre = "Hombre Hormiga";
    }
    return VengadorPorDefecto;
}());
;
var hombreHormiga2 = new VengadorPorDefecto();
// Aparece el nombre, ya sabes meter 'constantes'  o valores por defecto
// en las clases !!
// Aunque esto no es muy util ¿no?
console.log(hombreHormiga2);
// Creamos otra clase igual pero con un constructor y valores por 
// defecto 
var VengadorConstructor = /** @class */ (function () {
    function VengadorConstructor(nombre, equipo, nombreReal) {
        this.nombre = undefined; //Undefined es un tipo de valor, que es 'nulo'
        this.equipo = undefined;
        this.nombreReal = undefined;
        this.puedePelear = false;
        this.peleasGanadas = 0;
        console.log("Construyendo el Vengador");
        // This hace referencia a la clase contenedora.
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    ;
    return VengadorConstructor;
}());
;
var hombreHormiga3 = new VengadorConstructor("antman", "cap", "Scott Lang");
console.log(hombreHormiga3);
