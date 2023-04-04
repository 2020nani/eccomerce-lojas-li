import { Encomenda, Produtos } from 'src/app/shared/models/produtos';
import { map } from 'rxjs';
import { ProdutosService } from 'src/app/shared/services/produtos.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent {
  constructor(private produtoService: ProdutosService) {}

  encomendas$: Encomenda[] = [];
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.produtoService.getEncomenda().map((produto: any, index: number) => {
      const produtoIndex = this.encomendas$.findIndex(
        (encom) => encom.nome === produto.nome
      );
      if (produtoIndex >= 0) {
        console.log(this.encomendas$[produtoIndex].quantidade!++);
      } else {
        this.encomendas$.push({
          ...this.mapperEncomenda(produto),
        });
      }
    });
  }

  removerCarrinho(encomenda: Encomenda) {
    const index = this.encomendas$.findIndex((p) => p.nome === encomenda.nome);
    if (index >= 0) {
      this.encomendas$.splice(index, 1);
    }
  }

  adicionarCarrinho(encomenda: Encomenda) {
    const index = this.encomendas$.findIndex((p) => p.nome === encomenda.nome);
    if (index >= 0) {
      this.encomendas$[index].quantidade!++;
    }
  }

  retirarCarrinho(encomenda: Encomenda) {
    const index = this.encomendas$.findIndex((p) => p.nome === encomenda.nome);
    if (index >= 0) {
      this.encomendas$[index].quantidade!--;
    }
  }

  mapperEncomenda(produto: Produtos): Encomenda {
    let encomenda = new Encomenda(produto, 1, 'her@mail.com');
    return encomenda;
  }
}
