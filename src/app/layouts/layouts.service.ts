import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { ILayouts } from './layouts.interface'

@Injectable({
  providedIn: 'root'
})
export class LayoutsService {

  constructor(
    private http: HttpClient
  ) { }

  public obtenerLogo(): Observable<ILayouts[]>{
    const urlLogo: string = "http://localhost:3001/logo";
    return this.http.get<ILayouts[]>(urlLogo);
  }

  public obtenerImagenesCarrusel(): Observable<ILayouts[]>{
    const urlCarrusel: string = "http://localhost:3001/carrusel";
    return this.http.get<ILayouts[]>(urlCarrusel);
  }
}
