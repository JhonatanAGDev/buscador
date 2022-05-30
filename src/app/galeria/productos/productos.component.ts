import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogoService } from 'src/app/catalogo.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  id: string | undefined;
  lista: any[] = [];
  bandera: boolean = false;
  bandera2: boolean = false;
  buscarP = '';
  constructor(
    private route: Router,
    private ruta: ActivatedRoute,
    private catalogoService: CatalogoService
  ) {
    this.lista = this.catalogoService.getProd();
    console.log(this.lista);
  }

  ngOnInit(): void {}

  mostrarProd(id: number) {
    this.route.navigate(['productos/producto', id]);
  }

  mostrar() {
    return (this.bandera = true);
  }

  buscar() {
    if (!this.bandera2) {
      this.bandera2 = true;
    } else {
      this.bandera2 = false;
    }
  }

  buscador() {
    this.route.navigate(['productos/producto', this.buscarP]);
  }
}
