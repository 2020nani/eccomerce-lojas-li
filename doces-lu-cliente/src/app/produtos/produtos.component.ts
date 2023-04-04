import { ProdutosService } from '../shared/services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject, catchError, of, map } from 'rxjs';
import { Produtos } from '../shared/models/produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  produtos$: Observable<Produtos[]> | null = null;
  constructor(private produtoService: ProdutosService) {}

  ngOnInit(): void {
    this.produtos$ = this.produtoService.getProdutos().pipe(
      catchError((error) => {
        console.log(error);
        return of([]);
      })
    );
  }

  error$ = new Subject<boolean>();
}
