import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/shared/interfaces/entrada';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public listadoEntradas : Entrada[];

  constructor() {
    this.listadoEntradas = [
      {
        titulo: 'Introducción a Angular',
        resumen: 'En esta lección haremos una pequeña introducción'
      },
      {
        titulo: 'Typescript como lenguaje para angular',
        resumen: 'Breve recorrido por el lenguaje typescript como base'
      },
      {
        titulo: 'Componentes en angular',
        resumen: 'Aprenderemos a usar los componentes en angular'
      }

    ]
   }

   mostrarTitulo(titulo: string){
      alert(`Entrada seleccionada: ${titulo}.`)
   }

  ngOnInit(): void {
  }

}
