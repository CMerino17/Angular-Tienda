import { Component } from '@angular/core';
import { ILayouts } from '../layouts.interface'
import { LayoutsService } from '../layouts.service'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  imagenes: string[] = [];

  constructor(private layoutsService: LayoutsService){

  }

  ngOnInit(): void {
    this.obtenerCarruselRest();
  }

  private obtenerCarruselRest(): void {
    this.layoutsService.obtenerImagenesCarrusel().subscribe(
      (data) => {
        for (let i = 0; i < data.length; i++) {
          this.imagenes.push(data[i].imagen);
        }

      }
    )
  }
}
