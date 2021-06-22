import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  valor1!:number;
  valor2!:number;
  operacion: string = "ninguna";
  resultado!: number;

}
