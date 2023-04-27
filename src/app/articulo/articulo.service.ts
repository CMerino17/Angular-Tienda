import { Injectable } from '@angular/core';
import { Articulo } from './articulo-model'

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  constructor() { }

  public obtenerArticulos(): Articulo[] {
    const articulosADevolver: Articulo[]=[];

    for (let i = 1; i <= 10; i++) {
      const articulo: Articulo = new Articulo(i,"Articulo-"+i,120);
      articulosADevolver.push(articulo);
    }
    return articulosADevolver;
  }
}
