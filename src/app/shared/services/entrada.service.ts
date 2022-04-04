import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntradaService {

  constructor(private httpClient: HttpClient) { }

  public recuperarEntradas() : Observable<any>{
    //return this.httpClient.get<any>('https://jsonplaceholder.typicode.com/posts');
    //return this.httpClient.get<any>('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini');
    return this.httpClient.get<any>('https://fakestoreapi.com/products');

  }
}
