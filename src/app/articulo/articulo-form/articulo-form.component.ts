import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticuloService } from '../articulo.service'
import { Articulo } from '../articulo-model'

@Component({
  selector: 'app-articulo-form',
  templateUrl: './articulo-form.component.html',
  styleUrls: ['./articulo-form.component.scss']
})
export class ArticuloFormComponent {
  
  articulos: Articulo[] = [];
  categoria?: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articuloService: ArticuloService
  ){

  }
  
  ngOnInit(){
    this.categoria = this.route.snapshot.paramMap.get('categoria') ?? undefined;
    this.obtenerArticulosRest();
  }

  public obtenerArticulosRest(): void {
    this.articuloService.obtenerArticulos().subscribe(
      (data) => {
        for (let i = 0; i < data.length; i++) {
          const articulo: Articulo = new Articulo(data[i].id, data[i].nombre, data[i].precio, data[i].fav,
            data[i].descripcion, data[i].imagen, data[i].S,data[i].M,data[i].L,data[i].XL);
          this.articulos.push(articulo);
        }
      }
    )
  }

  public navegarAArticulo(idArticulo: number): void{
    this.router.navigate(['articulo-desc',idArticulo]);
  }

}
