import * as fs from 'fs';
// import * as 'readline-sync'


class Veterinaria {
    private nombre: string;
    private direccion: string;
    private ID_Veterinaria:number;
​
    public constructor(nombre: string, direccion: string, ID_Veterinaria: number) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.ID_Veterinaria = ID_Veterinaria;
    }

    public getID_Veterinaria() {
        return this.ID_Veterinaria;
   
}

 
let arrayProfe: Array <Veterinaria> = [];
  
  function crearVeterinaria ( nombre:string,direccion:string,ID:number, arr:Array <Veterinaria>){
    function random(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
      
         
    ID=random(1, 5);
    
    let nuevaVeterinaria : Veterinaria = new Veterinaria(nombre, direccion, ID);

    function cargaID (){

    
    for ( let i:number=0; i < arr.length;i++) {
      
        while (ID=ID [i]){
            ID=random(1,5);

        }
    }
        
    arr.push(nuevaVeterinaria);
    return arr;
}

  }

  
  var saludo = ["hi", "hola", "buenos dias", "buen dia"];

  if(saludo.includes("hola"))
    console.log("Si se encuentra");
  else
    console.log("No Se encuentra ");

  crearVeterinaria ("palito", "9 de Julio 871", ID, arrayProfe);
  crearVeterinaria ("pedri", "9 de Julio 84", ID, arrayProfe);
  
  console.log (arrayProfe);
  

/*
class Profesor {
    private nombre: string;
    private DNI: number;
    private listaAlumnos: Array<Alumno>;
​
    public constructor(nombre: string, DNI: number, listaAlumnos: Array<Alumno>) {
        this.nombre = nombre;
        this.DNI = DNI;
        this.listaAlumnos = listaAlumnos;
    }
​
    public getListaAlumnos() {
        return this.listaAlumnos;
    }
​
    public mostrarAlumnos() {
        console.log(this.listaAlumnos)
    }
​
​
}
​
class Escuela {
    private nombre: string;
    private direccion: string;
    private listaAlumnos: Array<Alumno>;
    private listaProfes: Array<Profesor>;
​
    public constructor(nombre: string, direccion: string, listaAlumnos: Array<Alumno>, listaProfes: Array<Profesor>) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.listaAlumnos = listaAlumnos;
        this.listaProfes = listaProfes;
    }
​
    public getListaAlumnos() {
        return this.listaAlumnos;
    }
​
    public getListaProfes() {
        return this.listaProfes;
    }
​
}
​
//instalar npm install @types/node
// creamos un gestor que nos permite leer un archivo de texto
​
class GestorDeArchivos {
​
    private arregloString: string[];
​
    constructor(txtFileLocation: string) {
​
        let archivoTxt: string = fs.readFileSync(txtFileLocation, 'utf-8');
        this.arregloString = archivoTxt.split(';');  //vamos a tener nuestro "objetos" separados por ;
        //[Juan Perez,333333333,Karen Simari,22222222]
    }
​
​
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
//funcion para crear un nuevo profe
​
function crearProfesor(profesor: string, arrayProfesor: Array<Profesor>, arrayAlumnos: Array<Alumno>): void {
​
    //transformo el elemento de tipo string en un objeto de tipo Profesor
    let propiedadProfe = profesor.split(';'); //[Juan Perez, 333333333; Karen Simari, 22222222]
    let nombre: string = propiedadProfe[0];
    let DNI: number = Number(propiedadProfe[1]);
    let listaAlumnos: Array<Alumno> = arrayAlumnos;
    let nuevoProfe : Profesor = new Profesor(nombre,DNI,listaAlumnos);
​
    //inserto el elemento de tipo Profesor en el arreglo recibido
    arrayProfesor.push(nuevoProfe);
}
​
//Eliminar profesor en una posicion y agregar uno nuevo
//instalamos readline-sync -- npm install readline-sync
​
function borrarrProfe(arregloProfe: Array<Profesor>,  position: number, arregloAlumnos?: Array<Alumno>): void {
    //editar un profesor en el arreglo
    // let nombre: string = readlineSync.question("Ingrese el nombre: ")
    // let DNI: number = Number(readlineSync.question("Ingrese el DNI: "));
    // let listaAlumnos: Array<Alumno> = arregloAlumnos;
   
    // let nuevoProfe: Profesor = new Profesor(nombre,DNI,listaAlumnos);
​
    delete arregloProfe[position];
​
    // arregloProfe[position] = nuevoProfe;
 
}
​
​
​
//Inicio programa
let datos: GestorDeArchivos = new GestorDeArchivos('profes.txt');
let arrayProfe: Array<Profesor> = [];
​
let alumno1 : Alumno = new Alumno('Gloria Dominguez', 8, 252546346);
let alumno2 : Alumno = new Alumno('Juan Dominguez', 5, 25254255);
alumno1.estaAprobado();
alumno2.estaAprobado();
let arrayAlumnos : Array<Alumno> = [alumno1,alumno2];
​
//creo array de objetos
​
for (let i: number = 0; i < datos.getArregloString().length; i++) {
​
    //Creo Profe uno por uno leyendo el txt
    
    crearProfesor(datos.getArregloString()[i], arrayProfe, arrayAlumnos);
​
}
​
console.log(arrayProfe);

class Cliente {
    private nombre: string;
    get Porfesor.DNI
}
*/