import { Injectable } from '@angular/core';
import { Articulo } from './articulo-model'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { IArticulo } from './articulo.interface'

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  constructor(private http: HttpClient) { }

  

  public obtenerCategorias(): Observable<IArticulo[]>{
    const urlCategorias: string = "http://localhost:3001/categorias";
    return this.http.get<IArticulo[]>(urlCategorias);
  }

  public obtenerArticulos(): Observable<IArticulo[]>{
    const urlArticulos: string = "http://localhost:3001/articulos";
    return this.http.get<IArticulo[]>(urlArticulos);
  }  

  public obtenArticulo(): Observable<IArticulo[]>{
    const urlArticulos: string = "http://localhost:3001/articulos";
    return this.http.get<IArticulo[]>(urlArticulos);
  }  

}


