import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventosComponent } from './eventos/eventos.component';
import { Form1Component } from './form1/form1.component';
import { TableComponent } from './table/table.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { Formulario1Component } from './formulario1/formulario1.component';
import { ListadoComponent } from './listado/listado.component';
import { ItemComponent } from './item/item.component';
import { Form2Component } from './form2/form2.component';
import { SumativaUnidad2Component } from './sumativa-unidad2/sumativa-unidad2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table'  

@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
    Form1Component,
    TableComponent,
    CalculadoraComponent,
    Formulario1Component,
    ListadoComponent,
    ItemComponent,
    Form2Component,
    SumativaUnidad2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
