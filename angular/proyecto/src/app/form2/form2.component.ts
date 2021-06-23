import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component {

  salida!: string;
  nota1!: number;
  nota2!: number;
  nota3!: number;
  nota4!: number;

  formulario = new FormGroup({
    rut: new FormControl(''),
    nombre: new FormControl(''),
    notas: new FormGroup({
      nota1: new FormControl(''),
      nota2: new FormControl(''),
      nota3: new FormControl(''),
      nota4: new FormControl('')
    })
  });

  enviar(){
    let nota_final;
    this.nota1 = parseInt(this.formulario.value.notas.nota1);
    this.nota2 = parseInt(this.formulario.value.notas.nota2);
    this.nota3 = parseInt(this.formulario.value.notas.nota3);
    this.nota4 = parseInt(this.formulario.value.notas.nota4);
    nota_final = ((this.nota1+this.nota2+this.nota3)/3)*0.7 + this.nota4*0.3
    if (this.nota1>=4 && this.nota2>=4 && this.nota3>=4 && this.nota4>=4) {
      this.salida = `El alumno aprueba el curso con nota ${nota_final.toFixed(2)}`;
    }else{
      this.salida = `El alumno reprueba el curso con nota ${nota_final.toFixed(2)}`;
    }
  }
}
