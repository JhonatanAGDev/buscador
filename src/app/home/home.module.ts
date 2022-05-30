import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProfileComponent } from './profile/profile.component';
import { PrincipalComponent } from './principal/principal.component';



@NgModule({
  declarations: [
    NavBarComponent,
    ProfileComponent,
    PrincipalComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ProfileComponent,
    NavBarComponent,
    PrincipalComponent
  ]
})
export class HomeModule { }
