import { TokenService } from './../shared/services/token.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public miToken: number;
  public nombreUsuario: string | null;

  constructor(private tokenService : TokenService) {
    this.miToken = 0;
    this.nombreUsuario = "";
  }

  ngOnInit(): void {

    this.tokenService.token$.subscribe(
      (token: number)=>{
        this.miToken= token;
      }
    )

    this.tokenService.nombreUsuario$.subscribe(
      (data: string) => {
          this.nombreUsuario = data;
      }
    )

  }

  public logout(): void {
    if (localStorage.getItem('miTokenPersonal')) {
      localStorage.removeItem('miTokenPersonal');
    }
  }

}
