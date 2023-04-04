import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoComponent } from './carrinho.component';
import { FormsModule } from '@angular/forms';
import { CarrinhoRoutingModule } from './carrinho.routing.module';
import { ProdutosService } from '../shared/services/produtos.service';
import { ModalLoadingComponent } from '../modal-loading/modal-loading.component';
import { ErroComponent } from '../erro/erro.component';

@NgModule({
  declarations: [CarrinhoComponent, ErroComponent, ModalLoadingComponent],
  imports: [CommonModule, FormsModule, CarrinhoRoutingModule],
  providers: [ProdutosService],
})
export class CarrinhoModule {}
