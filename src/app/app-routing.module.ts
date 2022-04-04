import { DetallesEntradaComponent } from './views/detalles-entrada/detalles-entrada.component';
import { FrontComponent } from './views/front/front.component';
import { LoginComponent } from './views/login/login.component';
import { AcercaDeNosotrosComponent } from './views/acerca-de-nosotros/acerca-de-nosotros.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PaginaNoEncontradaComponent } from './views/pagina-no-encontrada/pagina-no-encontrada.component';
import { ListadoComponent } from './views/listado/listado.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'front', component: FrontComponent, children:[
    { path: 'listado', component: ListadoComponent },
    { path: 'nosotros', component: AcercaDeNosotrosComponent },
    { path: 'detalle-entrada/:id', component: DetallesEntradaComponent }
  ]},

  { path: '', redirectTo: 'front/listado', pathMatch: 'full' },
  { path: '**', component: PaginaNoEncontradaComponent }
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
