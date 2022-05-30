import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccessModule } from './access/access.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TourComponent } from './tour/tour.component';
import { NominaModule } from './nomina/nomina.module';



@NgModule({
  declarations: [
    AppComponent,
    TourComponent,


  ],
  imports: [

    BrowserModule,
    AccessModule,
    HomeModule,
    AppRoutingModule,
    NgbModule,
    NominaModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
