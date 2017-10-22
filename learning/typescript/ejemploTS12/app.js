"use strict";
/**
 Módulos
**/
Object.defineProperty(exports, "__esModule", { value: true });
// Importamos 'algo' de 'algun sitio'
// Para exportar una clase, se especifica 'export' delante
var index_1 = require("./clases/index");
var wolverine = new index_1.Xmen("Logan", "Wolverine");
var lex = new index_1.Villano("Lex Luthor", "Conquistar el mundo!");
wolverine.imprimir();
lex.imprimirPlan();
