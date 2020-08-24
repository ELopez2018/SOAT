import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SystemComponent } from './system.component';
import { DatosVehiculoComponent } from './datos-vehiculo/datos-vehiculo.component';


const routes: Routes = [
  {
    path: '',
    component: SystemComponent,
    children: [
      { path: '', redirectTo: 'datosvehiculo', pathMatch: 'full' },
      {path: 'menuprincipal', component: DashboardComponent},
      {path: 'datosvehiculo', component: DatosVehiculoComponent},
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutesModule {}



