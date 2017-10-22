/**
 FUNCIONES FLECHA
**/
// Declaración de variable como función normal
var miFuncion = function (argument) {
    return argument;
};
var miFuncionFlecha = function (a) { return a; };
// Es lo mismo que:
// let miFuncionFlecha = (a) => a;
console.log(miFuncion("normal"));
console.log(miFuncionFlecha("normal"));
// Declaración de variable como función normal que acepta
// números y los suma
var miFuncion2 = function (argumentA, argumentB) {
    return argumentA + argumentB;
};
var miFuncion2Flecha = function (a, b) { return a + b; };
console.log(miFuncion2(1, 1));
console.log(miFuncion2Flecha(1, 1));
// Declaración de variable como función normal 
// transforma un string a mayusculas
var miFuncion3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var miFuncion3Flecha = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
console.log(miFuncion3("prueba"));
console.log(miFuncion3Flecha("prueba"));
// Para que es útil la función flecha) para esto
var hulk = {
    nombre: "Hulk",
    golpear: function () {
        console.log(this.nombre + " golpea!!");
    }
};
hulk.golpear();
// Aquí queremos que se realize algo más de lógica 
// en el momento de que Hulk golpee.
// Pero Javascript nos dará un error en la línea marcada
var hulkLentoBAD = {
    nombre: "Hulk pausadamente... ",
    golpear: function () {
        setTimeout(function () {
            //Fallará por el scope de la variable nombre.
            // Porque el this apunta a 'window' el objeto global.
            // Aquí es donde entran en juego las funciones
            // 'Flecha'
            console.log(this.nombre + " golpea!!");
        }, 1500);
    }
};
hulkLentoBAD.golpear();
var hulkLento = {
    nombre: "Hulk pausadamente... ",
    golpear: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + " golpea!!"); }, 1500);
    }
};
hulkLento.golpear();
