import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  lista:any[]=[

    {
      id:1,
      nombre: 'Chevrolet Aveo',
      precio: '150,000',
      descripcion:'lorem ',
      imagen: '/assets/uno.jpg'

    },
    {
      id:2,
      nombre: 'Volkswagen Gol',
      precio: '80,000',
      descripcion:'lorem ',
      imagen: '/assets/dos.jpg'

    },
    {
      id:3,
      nombre: 'Seat Leon',
      precio: '190,000',
      descripcion:'lorem ',
      imagen: '/assets/tres.jpg'

    },
    {
      id:4,
      nombre: 'Toyota Supra MK4',
      precio: '1,000,000',
      descripcion:'lorem ',
      imagen: '/assets/cuatro.jpg'

    },
    {
      id:5,
      nombre: 'Volkswagen Jetta VR6',
      precio: '110,000',
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
