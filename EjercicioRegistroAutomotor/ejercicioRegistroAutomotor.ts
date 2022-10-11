import * as fs from 'fs';
let readlineSync = require('readline-sync');
let arrayAutos: Array<Auto> = [];
​
class Auto {
    private marca: string;
    private modelo: string;
    private year: number;
    private km: number;
​
    public constructor(marca: string, modelo:string, year: number, km: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.km = km;
    }
​
    public mostrarPosicion() {
        return Auto.length+1;
    }
}
​

​class GestorDeArchivos {
​
    private arregloString: string[];
​
    constructor(txtFileLocation: string) {
​
        let archivoTxt: string = fs.readFileSync(txtFileLocation, 'utf-8');
        this.arregloString = archivoTxt.split(';');  
        
    }
​​
    public mostrarArreglo(): void {
        console.log(this.arregloString);
    }
​
    public getArregloString(): string[] {
        return this.arregloString;
    }
​
}
​
function crearAuto(auto: string,arrayAutosFuncion: Array<Auto>): void {
​
    //transforma el elemento de tipo string en un objeto de tipo Auto
    let datosAuto : string[] = auto.split(',');  
    let marca: string = datosAuto[0];
    let modelo: string = datosAuto[1];
    let year: number = Number(datosAuto[2]);
    let km: number = Number(datosAuto[3]);
    
    let nuevoAuto : Auto = new Auto(marca,modelo,year,km);
​
    arrayAutosFuncion.push(nuevoAuto);
}
​
function borrarrAuto(arregloAuto: Array<Auto>,  position: number): void {
    
               
    delete arregloAuto[position-1];
    
}

​
function editarAuto(arregloAuto: Array<Auto>,  position: number): void {
    //editar un profesor en el arreglo
    // let nombre: string = readlineSync.question("Ingrese el nombre: ")
    // let DNI: number = Number(readlineSync.question("Ingrese el DNI: "));
    // let listaAlumnos: Array<Alumno> = arregloAlumnos;
   
    // let nuevoProfe: Profesor = new Profesor(nombre,DNI,listaAlumnos);
​
    delete arregloAuto[position];
​
    // arregloProfe[position] = nuevoProfe;
 
}
​
​
​
//Inicio programa
let datos: GestorDeArchivos = new GestorDeArchivos('autos.txt');
​​
//creo array de objetos
​
for (let i: number = 0; i < datos.getArregloString().length; i++) {
​
    //Creo auto uno por uno leyendo el txt
    
    crearAuto(datos.getArregloString()[i], arrayAutos);
​
}
​
if (readlineSync.keyInYN('Quiere borrar una posicion?')) {
    // hice un for para q muestre la posicion de cada objeto y el usuario pueda identificar cual borrar
    for (let i: number = 0; i < arrayAutos.length; i++) {
        ​    console.log ('Posicion ', i+1,arrayAutos[i]);
        ​    }
    let posicionBorrar: number = readlineSync.question('Ingrese la posicion que desea eliminar  ');
    borrarrAuto (arrayAutos,posicionBorrar);
  } else {
    
    console.log('Su arreglo actual es');
    
  }
    
    
  for (let i: number = 0; i < arrayAutos.length; i++) {
    ​    console.log ('Posicion ', i+1,arrayAutos[i]);
    ​    }
    
    

    
