/**
 PROMESAS

 ¿Que són? Permiten ejecutar codigo cuando una tarea asíncrona termina.
**/
// resolve es la funcion callback ok
// reject es la funcion callback ko
let promesa1 = new Promise( function (resolve, reject) {
	setTimeout(()=>{
		console.log("Promesa terminada");

		// Termina bien
		resolve();

		// Termina mal
		reject();
	},1500);
});

promesa1.then(
	function(){console.log("Ejecutarme cuando termine bien");}, 
	function(){console.error("Ejecutar cuando algo sale mal");}
);