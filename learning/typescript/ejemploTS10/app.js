/**
 Interfaces en TypeScript

 ¿Que són? Sirven para generalizar software común, aporta reusabilidad y da
 capacidades de testing.

 NOTA: NO EXISTEN EN JAVASCRIPT, PERO TYPESCRIPT ES TU AMIGO !!

**/
// Función que envía a algo... 'ANY' que llamamos xmen a 
// una misión
function enviarMision(xmen) {
    // Typescript nos marcará como error xmen.nombre, porque
    // no conoce lo que es un xmen...
    console.log("Enviando a: " + xmen.nombre);
}
// Creamos un xmen y ejecutamos la función pasandole a 
// lobezno
var wolverine = {
    nombre: "Wolverine",
    poder: "Regeneración"
};
// Aparentemente funciona no?
console.log("wolverine: ");
enviarMision(wolverine);
// Y si wolverine no tuviera una propiedad 'nombre'?
var wolverineDiferente = {
    nombreDiferente: "Wolverine",
    poder: "Regeneración"
};
// Aparentemente no da errores pero no funciona... 
console.log("wolverineDiferente: ");
enviarMision(wolverineDiferente);
/*
En éste punto sería cojonudo tener una forma de aplantillar o sacar un
molde... o... INTERFAZ de un xmen no? algo que permitiera a nuestra función
saber como manejar un objeto tipo xmen como lobezno.
*/
// SOLUCION CUTRE (poco dinamica no?)
function enviarMisionCutre(xmen) {
    // Typescript nos marcará como error xmen.nombre, porque
    // no conoce lo que es un xmen...
    console.log("Enviando a: " + xmen.nombre);
}
;
var wolverineDesdeInterface = {
    nombre: "Wolverine",
    poder: "Regeneración"
};
var wolverineSintipo = {
    nombre: "Wolverine",
    poder: "Regeneración"
};
function enviarMisionGuay1(xmen) {
    // Typescript nos marcará como error xmen.nombre, porque
    // no conoce lo que es un xmen...
    console.log("Enviando a: " + xmen.nombre);
}
// Ahora todo rula, porque es dificil equivocarse, porque tenemos una
// interface
console.log("wolverineDesdeInterface: ");
enviarMisionGuay1(wolverineDesdeInterface);
console.log("wolverineSinTipo: ");
enviarMisionGuay1(wolverineSintipo);
