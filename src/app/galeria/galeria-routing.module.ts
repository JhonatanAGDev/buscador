import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardarprouctosComponent } from './guardarprouctos/guardarprouctos.component';
import { Prod1Component } from './prod1/prod1.component';
import { Prod2Component } from './prod2/prod2.component';

const routes: Routes = [
  {
    path:'',children:[
      {
        path:'producto/:id',component:Prod1Component
      },
      {
        path:'guardar',component:GuardarprouctosComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GaleriaRoutingModule { }
