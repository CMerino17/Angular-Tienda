import { Component, Input } from '@angular/core'
import { Articulo } from '../../articulo-model'
import { ActivatedRoute, Router } from '@angular/router'
import { ArticuloService } from '../../articulo.service'

@Component({
  selector: 'app-articulo-desc',
  templateUrl: './articulo-desc.component.html',
  styleUrls: ['./articulo-desc.component.scss']
})
export class ArticuloDescComponent {
   idArticulo?: string;
   @Input() articulo?: Articulo;

  constructor(
    private route: ActivatedRoute,
    private articuloService: ArticuloService
  ) {
    
  }

  ngOnInit(): void{
    this.idArticulo = this.route.snapshot.paramMap.get('idArticulo') ?? undefined;
    
    this.cogeArticuloRest();
  }

  public cogeArticuloRest():void {
    if (this.idArticulo) {
      const pos: number = +this.idArticulo-1;
      this.articuloService.obtenArticulo().subscribe(
        (data) => {
          this.articulo = new Articulo(data[pos].id, data[pos].nombre, data[pos].precio, data[pos].fav,
            data[pos].descripcion, data[pos].imagen);
        }
      )
    }
  }

}
