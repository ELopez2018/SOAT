import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemComponent } from './system.component';
import { SharedModule } from './shared/shared.module';
import { SystemRoutesModule } from './system.routing';
import { MaterialModule } from './shared/material/material.module';
import { HeaderComponent } from './shared/header/header.component';
import { DatosVehiculoComponent } from './datos-vehiculo/datos-vehiculo.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SystemRoutesModule,
    MaterialModule
  ],
  declarations: [SystemComponent, HeaderComponent, DatosVehiculoComponent]
})
export class SystemModule { }
