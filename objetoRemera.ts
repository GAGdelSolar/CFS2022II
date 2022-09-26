class Remera{
    color: string;
    talle: number;
    mostrarInfo(){
        console.log("La info es:")
    }
    constructor(color:string,talle:number){
        this.color = color;
        this.talle = talle;
    }
}
let chomba = new Remera("blanca",42);
console.log(chomba);

