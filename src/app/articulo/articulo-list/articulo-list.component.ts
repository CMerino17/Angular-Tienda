import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from '../articulo-model'
import { ArticuloService } from '../articulo.service'

@Component({
  selector: 'app-articulo-list',
  templateUrl: './articulo-list.component.html',
  styleUrls: ['./articulo-list.component.scss']
})
export class ArticuloListComponent {

  articulos: Articulo[] = [];

  constructor(
    private router: Router,
    private articuloService: ArticuloService
  ){ }

  ngOnInit(): void {
    this.articulos = this.articuloService.obtenerArticulos();
  }

  public navegarAFicha(idArticulo: number): void{
    this.router.navigate(['articulo-ficha',idArticulo]);
  }

}
