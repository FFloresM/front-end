var Circulo = /** @class */ (function () {
    function Circulo(r) {
        this.pi = 3.14;
        this.r = r;
    }
    Circulo.prototype.calcularPerimetro = function () {
        return 2 * this.pi * this.r;
    };
    Circulo.prototype.calcularArea = function () {
        return this.pi * this.r * this.r;
    };
    return Circulo;
}());
var Cuadrado = /** @class */ (function () {
    function Cuadrado(lado) {
        this.lado = lado;
    }
    Cuadrado.prototype.calcularPerimetro = function () {
        return this.lado * 4;
    };
    Cuadrado.prototype.calcularArea = function () {
        return this.lado * this.lado;
    };
    return Cuadrado;
}());
var circulo = new Circulo(10);
console.log("Area del circulo = " + circulo.calcularArea());
console.log("Perimetro del circulo = " + circulo.calcularPerimetro());
var cuadrado = new Cuadrado(10);
console.log("Area del cuadrado= " + cuadrado.calcularArea());
console.log("Perimetro del cuadrado= " + cuadrado.calcularPerimetro());
