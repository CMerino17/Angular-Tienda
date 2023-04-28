import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { IHome } from './home.interface'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  public obtenerTarjetas(): Observable<IHome[]>{
    const urlTarjetas: string = "http://localhost:3001/tarjetas";
    return this.http.get<IHome[]>(urlTarjetas);
  }

  // public obtenerCategorias(): Observable<IHome[]>{
  //   const urlCategorias: string = "http://localhost:3001/categorias";
  //   return this.http.get<IHome[]>(urlCategorias);
  // }
}
