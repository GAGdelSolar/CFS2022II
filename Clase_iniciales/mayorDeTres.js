var readlineSync = require('readline-sync');
var cantidad = readlineSync.questionInt('Ingrese la cantidad: ');
var precio = readlineSync.questionInt('Ingrese el precio: ');
var descuento = 0.10;
var montoMinimo = 1000;
var total = cantidad * precio;
console.log("Su compra total fue de $" + total);
if (total > montoMinimo) {
    total = total * (1 - descuento);
    console.log("Como supera los $" + montoMinimo + ", obtiene un descuento del " +
        descuento * 100 + "%.\nEl precio final es de $" + total);
}
/*
//Desarrolle un algoritmo que dados tres n�meros determine cu�l es el mayor de los tres

let nro1 = readlineSync.questionFloat('Ingrese el 1er numero: ');
let nro2 = readlineSync.questionFloat('Ingrese el 2do numero: ');
let nro3 = readlineSync.questionFloat('Ingrese el 3er numero: ');

let mayor = nro1;

if (nro2 > mayor) {
    mayor = nro2;
}
if (nro3 > mayor) {
    mayor = nro3;
}

console.log("El numero mas grande ingresado es: " + mayor);
*/ 
