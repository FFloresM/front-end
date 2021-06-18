console.log("Buenos días");

let estado: boolean = true;
let nivel: number = 50;
let nombre: string = "Pedro";
let apellido: string = "Perez";

console.log(estado)
console.log("el nivel es: "+nivel);
console.log("Buenos días "+nombre+" "+apellido)

console.log(`Hola: ${nombre} ${apellido}`)

for(let i=0; i<10; i++){
    console.log(i);
}

let arreglo: number[] = [1,2,3,4,5,6,7];
for(let i=0; i < arreglo.length; i++){
    console.log(arreglo[i]);
}

let arreglo2: string[] = ["Pedro", "Juan", "Diego", "Maria"];
for(let i=0; i < arreglo2.length; i++){
    console.log(arreglo2[i]);
}

for(let aux of arreglo2){
    console.log(aux);
}

var lista: number[] = new Array(4);
for (let i = 0; i < lista.length; i++) {
    lista[i] = i*3;
    console.log(lista[i]);
    
}

let numeros = [1,2,3,4];
numeros.forEach(function (value){
    console.log(value);
});

//Condiciones
var num = 10;
if(num%2==0){
    console.log("Número par");
}
else{
    console.log("Número impar");
}

var persona = {
    nombre: "Pedro",
    apellido: "Fuentes",
    hablar: function(){}
}

persona.hablar = function(){
    console.log("Buenos días "+persona.nombre);
}

persona.hablar();