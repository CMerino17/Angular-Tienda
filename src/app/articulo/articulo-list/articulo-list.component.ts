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

  imagenesCategorias: string[] = [];
  nombreCategoria: string[] = [];

  constructor(
    private router: Router,
    private articuloService: ArticuloService
  ){ }

  ngOnInit(): void { 
    this.obtenerImagenesCategoriasRest();
    this.obtenerNombresCategoriasRest();
  }

  // public navegarAFicha(idArticulo: string): void{
  //   this.router.navigate(['articulo-ficha',idArticulo]);
  // }
  
  public navegarACategoria(categoria: string): void{
    this.router.navigate(['articulo-ficha',categoria]);
  }

  private obtenerImagenesCategoriasRest(): void {
    this.articuloService.obtenerCategorias().subscribe(
      (data) => {
        for (let i = 0; i < data.length; i++) {
          this.imagenesCategorias.push(data[i].imagenCategoria);
        }
      }
    )
  }

  private obtenerNombresCategoriasRest(): void {
    this.articuloService.obtenerCategorias().subscribe(
      (data) => {
        for (let i = 0; i < data.length; i++) {
          this.nombreCategoria.push(data[i].nombreCategoria);
        }
      }
    )
  }
}
