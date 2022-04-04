import { TokenService } from './../../shared/services/token.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Usuario } from 'src/app/shared/classes/usuario';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario : Usuario;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private tokenService: TokenService
  ) {
    this.usuario= new Usuario();
   }



  public submit(): void{

    this.loginService.login(this.usuario).subscribe(
      {
        next: (data:number) => {

          this.tokenService.setNombre(this.usuario.nombre);

          this.tokenService.setToken(data);

          this.router.navigate(['dashboard'])
        },
        error: (e:Error) => {console.error("Error al realizar el acceso")},
        complete: () => {console.info('complete')}
      })
  }

  ngOnInit(): void {
  }

}
