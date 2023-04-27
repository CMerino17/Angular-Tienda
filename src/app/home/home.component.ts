import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imagenesTarjetas: string[] = [];

  constructor(private homeService: HomeService){

  }

  ngOnInit(): void {
    this.obtenerTarjetasRest();
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
}
