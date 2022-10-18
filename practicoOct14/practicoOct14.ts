class Animal {
    public name: string;
    constructor(name: string) {
      this.name = name;
    }
    public makeSound(sound:string) {
      console.log (this.name + " hace "+ sound);
    }
   }

   class Dog extends Animal{
    
    constructor ( name:string){
      super (name);
      }
   }
   class Cat extends Animal{
    
    constructor ( name:string){
      super (name);
      
    }
   }
   
   let minino: Animal = new Cat ('Pocky');
   minino.makeSound("meow meow"); // -> meow meow

   let firulais: Animal = new Dog ('Firulais');
   firulais.makeSound("wuff wuff"); // -> wuff wuff   