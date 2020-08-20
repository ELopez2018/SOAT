import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { SystemComponent } from './system.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [SystemComponent, NopagefoundComponent]
})
export class SystemModule { }
