import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrativosComponent } from './administrativos/administrativos.component';
import { DocentesComponent } from './docentes/docentes.component';
import { MenunominaComponent } from './menunomina/menunomina.component';

const routes: Routes = [

  { path: '', children:[

   {
     path:'docentes',component:DocentesComponent
   },
   {
     path:'administrativos',component:AdministrativosComponent
   },
   {
     path:'menunomina',component:MenunominaComponent
   }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NominaRoutingModule { }
