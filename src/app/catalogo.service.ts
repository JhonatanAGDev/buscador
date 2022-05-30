import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  lista:any[]=[

    {
      id:1,
      nombre: 'Manzana',
      precio: '50',
      descripcion:'lorem ',
      imagen: '/assest/uno.jpeg'

    },
    {
      id:2,
      nombre: 'Fresa',
      precio: '50',
      descripcion:'lorem ',
      imagen: '/assets/dos.jpg'

    },
    {
      id:3,
      nombre: 'Naranja',
      precio: '50',
      descripcion:'lorem ',
      imagen: '/assets/tres.jpg'

    },
    {
      id:4,
      nombre: 'Mango',
      precio: '50',
      descripcion:'lorem ',
      imagen: '/assets/cuatro.jpg'

    },
    {
      id:5,
      nombre: 'Pera',
      precio: '50',
      descripcion:'lorem ',
      imagen: '/assets/cinco.jpg'

    }
  ]

  constructor() {


   }
   getProd(){
     return this.lista;
   }

   getProdId(id:number){
     return this.lista[id];
   }
}
