class Animal {
    public name: string;
    public tipo: string;
    constructor(name: string, tipo:string) {
      this.name = name;
      this.tipo = tipo;
    }
    public makeSound(sound:string) {
      console.log (this.name + " de tipo " + this.tipo + " hace "+ sound);
    }
   }
   
   let minino: Animal = new Animal('Pocky', "gato");
   minino.makeSound("meow meow"); // -> meow meow

   let firulais: Animal = new Animal('Pocky', "perro");
   firulais.makeSound("wuff wuff"); // -> wuff wuff   