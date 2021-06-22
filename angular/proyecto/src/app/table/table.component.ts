import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  title = 'proyecto';
  nombre = 'Pedro Soto';
  edad = 25;
  email = 'psoto@gmail.com';
  sueldos = [1200, 1350, 1500, 1750, 2000];
  estado = true;
  notas = [50, 60, 70, 50, 60];
  actividad = ['supervisor', 'supervisor', 'encargado de obra', 'encargado de obra', 'encargado de obra'];


}
