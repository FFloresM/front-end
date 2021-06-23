import { Component } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent{

  data = [
    {nombre: 'manzana', medida: 'kilos'},
    {nombre: 'bebida', unidad: 'litros'},
    {nombre: 'lienzo', unidad: 'metro'}
  ];

}
