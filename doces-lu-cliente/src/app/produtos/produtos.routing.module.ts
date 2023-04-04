import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { ProdutosComponent } from './produtos.component';

const dashboardRoutes: Routes = [
  { path: '', component: ProdutosComponent },
  //{ path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
  //{ path: ':id', component: CursoDetalheComponent },
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule],
})
export class ProdutosRoutingModule {}
