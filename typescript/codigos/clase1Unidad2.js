console.log("Buenos días");
var estado = true;
var nivel = 50;
var nombre = "Pedro";
var apellido = "Perez";
console.log(estado);
console.log("el nivel es: " + nivel);
console.log("Buenos días " + nombre + " " + apellido);
console.log("Hola: " + nombre + " " + apellido);
for (var i = 0; i < 10; i++) {
    console.log(i);
}
var arreglo = [1, 2, 3, 4, 5, 6, 7];
for (var i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
}
var arreglo2 = ["Pedro", "Juan", "Diego", "Maria"];
for (var i = 0; i < arreglo2.length; i++) {
    console.log(arreglo2[i]);
}
for (var _i = 0, arreglo2_1 = arreglo2; _i < arreglo2_1.length; _i++) {
    var aux = arreglo2_1[_i];
    console.log(aux);
}
var lista = new Array(4);
for (var i = 0; i < lista.length; i++) {
    lista[i] = i * 3;
    console.log(lista[i]);
}
var numeros = [1, 2, 3, 4];
numeros.forEach(function (value) {
    console.log(value);
});
//Condiciones
var num = 10;
if (num % 2 == 0) {
    console.log("Número par");
}
else {
    console.log("Número impar");
}
var persona = {
    nombre: "Pedro",
    apellido: "Fuentes",
    hablar: function () { }
};
persona.hablar = function () {
    console.log("Buenos días " + persona.nombre);
};
persona.hablar();
