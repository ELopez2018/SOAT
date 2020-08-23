import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo: 'sistem', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  {   path: 'home',  loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule) },
  {   path: 'sistem',  loadChildren: () => import('./system/system.module').then(m => m.SystemModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
