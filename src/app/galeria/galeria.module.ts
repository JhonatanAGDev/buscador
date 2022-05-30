import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GaleriaRoutingModule } from './galeria-routing.module';
import { ProductosComponent } from './productos/productos.component';
import { Prod1Component } from './prod1/prod1.component';
import { Prod2Component } from './prod2/prod2.component';
import { GuardarprouctosComponent } from './guardarprouctos/guardarprouctos.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [
    ProductosComponent,
    Prod1Component,
    Prod2Component,
    GuardarprouctosComponent
  ],
  imports: [
    CommonModule,
    GaleriaRoutingModule,
    ReactiveFormsModule,
    HomeModule,
    FormsModule
  ]
})
export class GaleriaModule { }
