import { ProdutosService } from './../services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject, catchError, empty } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  cursos$: Observable<any> | null = null;
  constructor(private produtoService: ProdutosService) {}

  ngOnInit(): void {
    this.cursos$ = this.produtoService.getProdutos().pipe(
      catchError((error) => {
        console.log(error);
        this.error$.next(true);
        return empty();
      })
    );
  }

  error$ = new Subject<boolean>();
}
