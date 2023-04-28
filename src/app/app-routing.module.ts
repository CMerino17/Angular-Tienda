import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ArticuloListComponent } from './articulo/articulo-list/articulo-list.component';
import { ArticuloFormComponent } from './articulo/articulo-form/articulo-form.component';
import { ArticuloDescComponent } from './articulo/articulo-form/articulo-desc/articulo-desc.component'

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'articulos', component: ArticuloListComponent},
  { path: 'articulo-ficha/:categoria', component: ArticuloFormComponent},
  { path: 'articulo-desc/:idArticulo', component: ArticuloDescComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
