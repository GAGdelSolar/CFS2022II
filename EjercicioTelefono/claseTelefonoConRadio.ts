import Telefono from "./ejercicioTelefono";

class TelefonoConRadio extends Telefono {
    public frecuenciaActual:number;

    constructor (frecuenciaActual:number){
        super (true,8);
        this.frecuenciaActual= frecuenciaActual;
    }
    public getVerFrecuenciaActual (){
        return this.frecuenciaActual ;
    }

}