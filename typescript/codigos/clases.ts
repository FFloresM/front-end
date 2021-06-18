class Persona {
    nombre: string;
    apellido: string;
    edad: number;

    constructor(nombre:string, apellido:string, edad:number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    imprimir(){
        console.log(`Nombre: ${this.nombre}, apellido: ${this.apellido}, edad: ${this.edad}`);
    }

}

let perso1: Persona;
perso1 = new Persona("Carolina", "Torres", 40);
perso1.imprimir();