import { BsModalRef } from 'ngx-bootstrap/modal';
import { ModalLoadingComponent } from './../modal-loading/modal-loading.component';
import { ProdutosService } from './../services/produtos.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { ErroComponent } from '../erro/erro.component';

@NgModule({
  declarations: [DashboardComponent, ModalLoadingComponent, ErroComponent],
  imports: [CommonModule, DashboardRoutingModule],
  providers: [BsModalRef],
})
export class DashboardModule {}
