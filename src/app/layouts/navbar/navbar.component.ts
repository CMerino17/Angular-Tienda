import { Component } from '@angular/core';
import { LayoutsService } from '../layouts.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  logo: string = "";

  constructor(private layoutsService: LayoutsService){

  }

  ngOnInit(): void {
    this.obtenerLogoRest();
  }

  private obtenerLogoRest(): void {
    this.layoutsService.obtenerLogo().subscribe(
      (data) => {
        this.logo = data[0].logo;
      }
    )
  }

  
}
