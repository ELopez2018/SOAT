import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';


const routes: Routes = [
  {
    path: '',
    component: NopagefoundComponent,
    children: [

    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutesModule {}



