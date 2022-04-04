import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntradaService } from 'src/app/shared/services/entrada.service';

@Component({
  selector: 'app-detalles-entrada',
  templateUrl: './detalles-entrada.component.html',
  styleUrls: ['./detalles-entrada.component.css']
})
export class DetallesEntradaComponent implements OnInit {

  public id: number=0;
  public entrada: any;

  constructor(
    private activatedRoute : ActivatedRoute,
    private entradaService: EntradaService
    ) {

    this.activatedRoute.params.subscribe(
      paramsUrl =>{
        this.id = +paramsUrl["id"];
      }
    );

  }

  ngOnInit(): void {
    this.recuperarEntrada();
  }

  private recuperarEntrada() : void {
    this.entradaService.recuperarEntrada(this.id).subscribe(
      {
          next: (data: any) => {this.entrada=data},
          complete: () => {console.info('complete')}
      }
    );
  }

}
