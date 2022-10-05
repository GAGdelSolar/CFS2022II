export default class Telefono {
    public estaPrendido:boolean;
    public bateriaActual: number;  

    constructor (estaPrendido: boolean, bateriaActual:number){
        this.estaPrendido = estaPrendido;
        this.bateriaActual = bateriaActual;
    }

    public mandarMensaje (){
        console.log ("Send")
    }
    public hacerLlamada (){
        console.log ("call")
    }
    public prenderApagar (){
        console.log ("turn off")
    }
}