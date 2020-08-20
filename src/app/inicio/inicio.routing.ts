import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio.component';
import { ConsultarPlacaComponent } from './consultar-placa/consultar-placa.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    children: [
      { path: '', redirectTo: 'principal', pathMatch: 'full' },
      { path: 'principal', component: HomeComponent},
      { path: 'consultaplaca', component: ConsultarPlacaComponent},
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule {}
