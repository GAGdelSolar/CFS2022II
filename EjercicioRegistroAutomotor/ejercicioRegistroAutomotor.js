"use strict";
exports.__esModule = true;
var fs = require("fs");
var readlineSync = require('readline-sync');
var arrayAutos = [];
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, year, km) {
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.km = km;
    }
    Auto.prototype.mostrarPosicion = function () {
        return Auto.length + 1;
    };
    return Auto;
}());
var GestorDeArchivos = /** @class */ (function () {
    function GestorDeArchivos(txtFileLocation) {
        var archivoTxt = fs.readFileSync(txtFileLocation, 'utf-8');
        this.arregloString = archivoTxt.split(';');
    }
    GestorDeArchivos.prototype.mostrarArreglo = function () {
        console.log(this.arregloString);
    };
    GestorDeArchivos.prototype.getArregloString = function () {
        return this.arregloString;
    };
    return GestorDeArchivos;
}());
function crearAuto(auto, arrayAutosFuncion) {
    //transforma el elemento de tipo string en un objeto de tipo Auto
    var datosAuto = auto.split(',');
    var marca = datosAuto[0];
    var modelo = datosAuto[1];
    var year = Number(datosAuto[2]);
    var km = Number(datosAuto[3]);
    var nuevoAuto = new Auto(marca, modelo, year, km);
    arrayAutosFuncion.push(nuevoAuto);
}
function borrarrAuto(arregloAuto, position) {
    delete arregloAuto[position - 1];
}
function editarAuto(arregloAuto, position) {
    //editar un profesor en el arreglo
    // let nombre: string = readlineSync.question("Ingrese el nombre: ")
    // let DNI: number = Number(readlineSync.question("Ingrese el DNI: "));
    // let listaAlumnos: Array<Alumno> = arregloAlumnos;
    // let nuevoProfe: Profesor = new Profesor(nombre,DNI,listaAlumnos);
    delete arregloAuto[position];
    // arregloProfe[position] = nuevoProfe;
}
//Inicio programa
var datos = new GestorDeArchivos('autos.txt');
//creo array de objetos
for (var i = 0; i < datos.getArregloString().length; i++) {
    //Creo auto uno por uno leyendo el txt
    crearAuto(datos.getArregloString()[i], arrayAutos);
}
if (readlineSync.keyInYN('Quiere borrar una posicion?')) {
    // hice un for para q muestre la posicion de cada objeto y el usuario pueda identificar cual borrar
    for (var i = 0; i < arrayAutos.length; i++) {
        console.log('Posicion ', i + 1, arrayAutos[i]);
    }
    var posicionBorrar = readlineSync.question('Ingrese la posicion que desea eliminar  ');
    borrarrAuto(arrayAutos, posicionBorrar);
}
else {
    console.log('Su arreglo actual es');
}
for (var i = 0; i < arrayAutos.length; i++) {
    console.log('Posicion ', i + 1, arrayAutos[i]);
}
