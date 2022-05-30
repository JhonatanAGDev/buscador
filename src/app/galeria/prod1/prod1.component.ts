import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogoService } from 'src/app/catalogo.service';

@Component({
  selector: 'app-prod1',
  templateUrl: './prod1.component.html',
  styleUrls: ['./prod1.component.css'],
})
export class Prod1Component implements OnInit {
  id: number;
  lista: any = [];
  constructor(
    private ruta: ActivatedRoute,
    private catalogoService: CatalogoService
  ) {
    this.id = Number(this.ruta.snapshot.paramMap.get('id'));
    console.log(this.id);
    this.lista = this.catalogoService.getProdId(this.id - 1);
  }

  ngOnInit(): void {}
}
