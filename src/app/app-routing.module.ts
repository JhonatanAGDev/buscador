import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './access/login/login.component';
import { RecoverComponent } from './access/recover/recover.component';
import { RegisterComponent } from './access/register/register.component';
import { ProductosComponent } from './galeria/productos/productos.component';
import { PrincipalComponent } from './home/principal/principal.component';
import { TourComponent } from './tour/tour.component';

const routes: Routes = [


  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'recover',
    component: RecoverComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'tour',
    component: TourComponent,
  },

  {
    path: 'nomina',
    loadChildren: () =>
      import('./nomina/nomina.module').then((m) => m.NominaModule),
  },
  {
    path:'productos', component: ProductosComponent
  },
  {
    path:'productos', loadChildren:() => import('./galeria/galeria.module').then((m)=> m.GaleriaModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
