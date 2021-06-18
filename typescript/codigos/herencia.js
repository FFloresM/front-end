var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona2 = /** @class */ (function () {
    function Persona2(nombre, rut) {
        this.nombre = nombre;
        this.rut = rut;
    }
    Persona2.prototype.imprimir = function () {
        console.log("Nombre: " + this.nombre);
        console.log("Rut: " + this.rut);
    };
    return Persona2;
}());
var Trabajador = /** @class */ (function (_super) {
    __extends(Trabajador, _super);
    function Trabajador(nombre, rut, sueldo) {
        var _this = _super.call(this, nombre, rut) || this;
        _this.sueldo = sueldo;
        return _this;
    }
    Trabajador.prototype.imprimir = function () {
        _super.prototype.imprimir.call(this);
        console.log("Sueldo: " + this.sueldo);
    };
    return Trabajador;
}(Persona2));
var perso2 = new Persona2('Carolina', '12345678-5');
perso2.imprimir();
var trab1 = new Trabajador('María', '111111111-1', 1000000);
trab1.imprimir();
