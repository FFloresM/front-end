interface Figura{
    calcularPerimetro():number;
    calcularArea():number;
}

class Circulo implements Figura{
    pi: number = 3.14;
    r:number; //radio
    constructor(r:number){
        this.r = r;
    }
    calcularPerimetro(): number {
        return 2*this.pi*this.r;
    }
    calcularArea(): number {
        return this.pi*this.r*this.r;
    }

}

class Cuadrado implements Figura{
    lado:number; //lado del cuadrado
    constructor(lado:number){
        this.lado = lado;
    }
    calcularPerimetro(): number {
        return this.lado*4;
    }
    calcularArea(): number {
        return this.lado*this.lado;
    }

}

let circulo = new Circulo(10);
console.log(`Area del circulo = ${circulo.calcularArea()}`);
console.log(`Perimetro del circulo = ${circulo.calcularPerimetro()}`);

let cuadrado = new Cuadrado(10);
console.log(`Area del cuadrado= ${cuadrado.calcularArea()}`);
console.log(`Perimetro del cuadrado= ${cuadrado.calcularPerimetro()}`);

