import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'produtos',
    loadChildren: () =>
      import('./produtos/produtos.module').then((m) => m.ProdutosModule),
    canActivate: [AuthGuard],
    //canActivateChild: [CursosGuard],
    canLoad: [AuthGuard],
  },
  {
    path: 'carrinho',
    loadChildren: () =>
      import('../app/carrinho/carrinho.module').then((m) => m.CarrinhoModule),
    canActivate: [AuthGuard],
    //canActivateChild: [AlunosGuard],
    canLoad: [AuthGuard],
  },
  //{ path: 'cursos', component: CursosComponent },
  //{ path: 'curso/:id', component: CursoDetalheComponent },*/
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/produtos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
