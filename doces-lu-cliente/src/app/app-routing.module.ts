import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'produtos',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [AuthGuard],
    //canActivateChild: [CursosGuard],
    canLoad: [AuthGuard],
  },
  /*
  {
    path: 'alunos',
    loadChildren: () =>
      import('../app/alunos/alunos.module').then((m) => m.AlunosModule),
    canActivate: [AuthGuard],
    canActivateChild: [AlunosGuard],
    canLoad: [AuthGuard],
  },
  //{ path: 'cursos', component: CursosComponent },
  //{ path: 'curso/:id', component: CursoDetalheComponent },*/
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/produtos', pathMatch: 'full' },
  //{ path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  } /*,
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '**',
    component: PaginaNaoEncontradaComponent,
    canActivate: [AuthGuard],
  },*/,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
