import { EntradaService } from './../../shared/services/entrada.service';
import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/shared/interfaces/entrada';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public listadoEntradas :any;

  constructor(private entradaService : EntradaService) {

   }

   mostrarTitulo(titulo: string){
      alert(`Entrada seleccionada: ${titulo}.`)
   }

  private recuperarEntradas(): void{
    this.entradaService.recuperarEntradas().subscribe(
      {
        next: (data) => {this.listadoEntradas=data},
        error: (e) => {console.error(e)},
        complete: () => {console.info('complete')}
      })
  }

  ngOnInit(): void {
    this.recuperarEntradas();
  }

}
