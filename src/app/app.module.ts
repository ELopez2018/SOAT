import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { DatosUsuariosComponent } from './formulario/datos-usuarios/datos-usuarios.component';
import { DatosVehiculosComponent } from './formulario/datos-vehiculos/datos-vehiculos.component';
import { InicioComponent } from './inicio/inicio.component';
import { ConsultarPlacaComponent } from './inicio/consultar-placa/consultar-placa.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SystemComponent } from './system/system.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    DatosUsuariosComponent,
    DatosVehiculosComponent,
    SystemComponent,
    // InicioComponent,
    // ConsultarPlacaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CardModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
