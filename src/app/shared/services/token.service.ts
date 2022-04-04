import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private token : BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private nombreUsuario : BehaviorSubject<string> = new BehaviorSubject<string>('');

  public token$ : Observable<number> = this.token.asObservable();
  public nombreUsuario$ : Observable<string> = this.nombreUsuario.asObservable();

  constructor() { }

  public setToken(token : number): void{
      this.token.next(token);
  }

  public setNombre(nombreUsuario : string): void{
    this.nombreUsuario.next(nombreUsuario);
  }

}
