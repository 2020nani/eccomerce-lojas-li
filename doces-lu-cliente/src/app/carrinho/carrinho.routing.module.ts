import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarrinhoComponent } from './carrinho.component';

const carrinhoRoutes: Routes = [
  { path: '', component: CarrinhoComponent },
  //{ path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
  //{ path: ':id', component: CursoDetalheComponent },
];

@NgModule({
  imports: [RouterModule.forChild(carrinhoRoutes)],
  exports: [RouterModule],
})
export class CarrinhoRoutingModule {}
