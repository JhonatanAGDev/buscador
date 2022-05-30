import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-guardarprouctos',
  templateUrl: './guardarprouctos.component.html',
  styleUrls: ['./guardarprouctos.component.css']
})
export class GuardarprouctosComponent implements OnInit {
datos:FormGroup |undefined;
  constructor() {
    this.inicializaDatos();
   }

  ngOnInit(): void {
  }

  inicializaDatos(){
   this.datos = new FormGroup({
     nombre : new FormControl(),
     contraseña : new FormControl('')
   })
  }

}
