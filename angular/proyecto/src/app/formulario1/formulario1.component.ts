import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario1',
  templateUrl: './formulario1.component.html',
  styleUrls: ['./formulario1.component.css']
})
export class Formulario1Component {

  datos!: string;
  formularioContacto = new FormGroup({
    nombre: new FormControl(''),
    rut: new FormControl(''),
    mensaje: new FormControl('')
  });

  enviar(){
    this.datos = `Nombre=${this.formularioContacto.value.nombre}
                  RUT=${this.formularioContacto.value.rut}
                  Mensaje=${this.formularioContacto.value.mensaje}`;
  }

}
