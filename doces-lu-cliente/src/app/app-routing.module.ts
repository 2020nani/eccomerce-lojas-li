import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { loadRemoteModule } from '@angular-architects/module-federation';

const APP_ROUTES: Routes = [
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
      import('./carrinho/carrinho.module').then((m) => m.CarrinhoModule),
    canActivate: [AuthGuard],
    //canActivateChild: [AlunosGuard],
    canLoad: [AuthGuard],
  },
  //{ path: 'cursos', component: CursosComponent },
  //{ path: 'curso/:id', component: CursoDetalheComponent },*/
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/produtos', pathMatch: 'full' },
  {
    path: 'checkout',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'checkout-doces-da-lu',
        exposedModule: './Module',
      }).then((m) => m.CheckoutModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
