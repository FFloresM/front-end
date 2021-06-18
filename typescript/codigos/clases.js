var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    Persona.prototype.imprimir = function () {
        console.log("Nombre: " + this.nombre + ", apellido: " + this.apellido + ", edad: " + this.edad);
    };
    return Persona;
}());
var perso1;
perso1 = new Persona("Carolina", "Torres", 40);
perso1.imprimir();
