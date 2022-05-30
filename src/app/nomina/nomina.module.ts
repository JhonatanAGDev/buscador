import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NominaRoutingModule } from './nomina-routing.module';
import { MenunominaComponent } from './menunomina/menunomina.component';
import { AdministrativosComponent } from './administrativos/administrativos.component';
import { DocentesComponent } from './docentes/docentes.component';


@NgModule({
  declarations: [
    MenunominaComponent,
    AdministrativosComponent,
    DocentesComponent
  ],
  imports: [
    CommonModule,
    NominaRoutingModule
  ]
})
export class NominaModule { }
