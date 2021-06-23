import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'formulario-producto',
  templateUrl: './sumativa-unidad2.component.html',
  styleUrls: ['./sumativa-unidad2.component.css']
})
export class SumativaUnidad2Component{

    codigo!: string;
    nombre!: string;
    precio!: number;
    cantidad!: number;
    descripcion!: string;
    stock!: number;
    selected: boolean = false;

    productos = [] as any;
    ordenCompra = [] as any;
    total = 0;

    formularioProducto = new FormGroup({
      codigo: new FormControl(''),
      nombre: new FormControl(''),
      precio: new FormControl(''),
      cantidad: new FormControl(''),
      descripcion: new FormControl(''),
      stock: new FormControl('')
    });

    agregarProducto(){
      if (this.formularioProducto.value.codigo != "") {
        this.productos.push(this.formularioProducto.value);
      }
    }

    agregarOrdenCompra(obj: any){
      let valor= prompt("Ingrese cantidad");
      if(valor!= null)
        obj.cantidad = parseInt(valor);
      this.ordenCompra.push(obj);
    }

    eliminar(obj: any){
      const index = this.productos.indexOf(obj);
      if (index > -1) {
        this.productos.splice(index,1);
      }
    }

    editar(obj: any){
      
    }

    calcularTotal(){
      let total = 0;
      for (const producto in this.ordenCompra) {
          const element = this.ordenCompra[producto];
          total += (element.precio*element.cantidad);
      }
      this.total=total;
    }


}
