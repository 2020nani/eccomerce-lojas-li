import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
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
    loadChildren: () => {
      const baseUrl = 'http://localhost:4201';
      return loadAdminStyles().then(() =>
        loadRemoteModule({
          type: 'module',
          remoteEntry: `${baseUrl}/remoteEntry.js`,
          exposedModule: './Module',
        }).then((m) => m.AppModule)
      );
    },
    /*loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Module',
      }).then((m) => m.AppModule),*/
    canActivate: [AuthGuard],
    //canActivateChild: [AlunosGuard],
    canLoad: [AuthGuard],
  },
  //{ path: 'cursos', component: CursosComponent },
  //{ path: 'curso/:id', component: CursoDetalheComponent },*/
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/produtos', pathMatch: 'full' },
];

export function loadAdminStyles(): Promise<void> {
  return new Promise((resolve) => {
    const baseUrl = 'http://localhost:4201';
    const el = document.getElementById('mfe-module-styles');

    // Load one instance, do it like this to handle errors and retrying
    if (el) {
      el.remove();
    }
    const headEl = document.getElementsByTagName('head')[0];
    const styleLinkEl = document.createElement('link');
    styleLinkEl.rel = 'stylesheet';
    styleLinkEl.id = 'mfe-module-styles';
    styleLinkEl.href = `${baseUrl}/mfe_module_styles.css`;
    headEl.appendChild(styleLinkEl);
    resolve();
  });
}

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
