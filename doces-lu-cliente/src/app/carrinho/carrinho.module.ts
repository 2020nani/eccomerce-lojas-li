import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoComponent } from './carrinho.component';
import { FormsModule } from '@angular/forms';
import { CarrinhoRoutingModule } from './carrinho.routing.module';
import { ProdutosService } from '../shared/services/produtos.service';

@NgModule({
  declarations: [CarrinhoComponent],
  imports: [CommonModule, FormsModule, CarrinhoRoutingModule],
  providers: [ProdutosService],
})
export class CarrinhoModule {}
