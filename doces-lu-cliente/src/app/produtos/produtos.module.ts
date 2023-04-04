import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ModalLoadingComponent } from '../modal-loading/modal-loading.component';
import { ProdutosComponent } from './produtos.component';
import { ProdutosRoutingModule } from './produtos.routing.module';
import { ErroComponent } from '../erro/erro.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ProdutoslistComponent } from './produtoslist/produtoslist.component';
import { ProdutospromocaoComponent } from './produtospromocao/produtospromocao.component';
import { ProdutosService } from '../shared/services/produtos.service';

@NgModule({
  declarations: [
    ProdutosComponent,
    ProdutoslistComponent,
    ProdutospromocaoComponent,
    ModalLoadingComponent,
    ErroComponent,
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    FormsModule,
    TooltipModule.forRoot(),
    PaginationModule.forRoot(),
    CarouselModule.forRoot(),
  ],
  providers: [BsModalRef, ProdutosService],
})
export class ProdutosModule {}
