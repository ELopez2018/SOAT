import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SystemComponent } from './system.component';


const routes: Routes = [
  {
    path: '',
    component: SystemComponent,
    children: [
      { path: '', redirectTo: 'menuprincipal', pathMatch: 'full' },
      {path: 'menuprincipal', component: DashboardComponent},
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutesModule {}



