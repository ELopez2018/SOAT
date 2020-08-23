import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { DatosUsuariosComponent } from './formulario/datos-usuarios/datos-usuarios.component';
import { DatosVehiculosComponent } from './formulario/datos-vehiculos/datos-vehiculos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SystemComponent } from './system/system.component';
import { MaterialModule } from './system/shared/material/material.module';



@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    DatosUsuariosComponent,
    DatosVehiculosComponent,
    SystemComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CardModule,
    ButtonModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
