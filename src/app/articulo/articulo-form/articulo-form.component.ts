import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articulo-form',
  templateUrl: './articulo-form.component.html',
  styleUrls: ['./articulo-form.component.scss']
})
export class ArticuloFormComponent {

  idArticulo?: string;

  constructor(private route: ActivatedRoute){

  }
  
  ngOnInit(){
    this.idArticulo = this.route.snapshot.paramMap.get('idArticulo') ?? undefined;
  }

}
