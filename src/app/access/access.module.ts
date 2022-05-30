import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoverComponent } from './recover/recover.component';
import { HomeModule } from '../home/home.module';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RecoverComponent,
    FooterComponent,

  ],
  imports: [
    CommonModule,
    HomeModule,


  ],
  exports:[
    LoginComponent,
    RecoverComponent,
    RegisterComponent,
    FooterComponent
  ]
})
export class AccessModule { }
