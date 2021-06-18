interface Punto {
    imprimir():void;
}

class Plano implements Punto{

    x:number;
    y:number;
    
    constructor(x:number, y:number){}

    imprimir(){
        console.log(`Posición en el plano: (${this.x},${this.y})`);
    }
} 

