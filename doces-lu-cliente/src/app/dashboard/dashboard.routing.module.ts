import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const dashboardRoutes: Routes = [
  { path: '', component: DashboardComponent },
  //{ path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
  //{ path: ':id', component: CursoDetalheComponent },
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
