import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imagenesTarjetas: string[] = [];
  tituloModa: string[] = ["Moda Verano", "Moda Invierno", "Moda Primavera"];
  // imagenesCategorias: string[] = [];
  // nombreCategoria: string[] = [];

  constructor(
    private homeService: HomeService,
  ){

  }

  ngOnInit(): void {
    this.obtenerTarjetasRest();
    // this.obtenerImagenesCategoriasRest();
    // this.obtenerNombresCategoriasRest();
  }

  private obtenerTarjetasRest(): void {
    this.homeService.obtenerTarjetas().subscribe(
      (data) => {
        for (let i = 0; i < data.length; i++) {
          this.imagenesTarjetas.push(data[i].tarjeta);
        }
      }
    )
  }

  // private obtenerImagenesCategoriasRest(): void {
  //   this.homeService.obtenerCategorias().subscribe(
  //     (data) => {
  //       for (let i = 0; i < data.length; i++) {
  //         this.imagenesCategorias.push(data[i].imagenCategoria);
  //       }
  //     }
  //   )
  // }

  // private obtenerNombresCategoriasRest(): void {
  //   this.homeService.obtenerCategorias().subscribe(
  //     (data) => {
  //       for (let i = 0; i < data.length; i++) {
  //         this.nombreCategoria.push(data[i].nombreCategoria);
  //       }
  //     }
  //   )
  // }

}
