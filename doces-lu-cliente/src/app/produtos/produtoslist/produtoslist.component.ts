import { Component, Input, EventEmitter } from '@angular/core';
import { Produtos } from 'src/app/shared/models/produtos';
import { ProdutosService } from 'src/app/shared/services/produtos.service';

@Component({
  selector: 'app-produtoslist',
  templateUrl: './produtoslist.component.html',
  styleUrls: ['./produtoslist.component.css'],
})
export class ProdutoslistComponent {
  @Input('produtos') produtos$: Produtos[] = [];
  page: number = 1;
  pageSize: number = 9;
  //totalItems: number = 0;
  maxSize: number = 1000;

  constructor(private produtoService: ProdutosService) {}

  ngOnInit() {}

  updatePage(page: number) {
    this.page = page;
  }

  adicionarCarrinho(produto: Produtos) {
    console.log(localStorage.getItem('encomenda'));
    this.produtoService.addEncomenda(produto);
  }
}
