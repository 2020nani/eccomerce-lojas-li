import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  constructor(private http: HttpClient) {}

  private readonly API = 'http://localhost:3000/teste';

  getProdutos() {
    return this.http.get<any>(this.API).pipe(delay(1000), tap(console.log));
  }
}
