var Animal = /** @class */ (function () {
    function Animal(name, tipo) {
        this.name = name;
        this.tipo = tipo;
    }
    Animal.prototype.makeSound = function (sound) {
        console.log(this.name + " de tipo " + this.tipo + " hace " + sound);
    };
    return Animal;
}());
var minino = new Animal('Pocky', "gato");
minino.makeSound("meow meow"); // -> meow meow
var firulais = new Animal('Pocky', "perro");
firulais.makeSound("wuff wuff"); // -> wuff wuff   
