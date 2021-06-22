import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto';
  nombre = 'Pedro Soto';
  edad = 25;
  email = 'psoto@gmail.com';
  sueldos = [1200, 1350, 1500];
  estado = true;
  notas = [50, 60, 70, 50, 60];
  actividad = {'supervisor': 'supervisor', 'encargado de obra': 'encargado de obra'};

  tieneTrabajo(){
    if (this.estado) {
      return "Tiene trabajo"; 
    } else {
      return "No tiene trabajo";
    }
  }

  sumarSueldos(){
    let suma = 0;
    for(let i=0; i<this.sueldos.length; i++){
      suma = suma + this.sueldos[i];
    }
    return suma;
  }

  calcularPromedio(){
    let suma=0;
    let promedio=0;
    for(let i=0; i<this.sueldos.length; i++){
      suma = suma + this.notas[i];
    }
    promedio = suma / this.notas.length;
    return promedio;
  }
}
