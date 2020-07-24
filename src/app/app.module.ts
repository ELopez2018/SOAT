import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { DatosUsuariosComponent } from './formulario/datos-usuarios/datos-usuarios.component';
import { DatosVehiculosComponent } from './formulario/datos-vehiculos/datos-vehiculos.component';
import { InicioComponent } from './inicio/inicio.component';
import { ConsultarPlacaComponent } from './inicio/consultar-placa/consultar-placa.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    DatosUsuariosComponent,
    DatosVehiculosComponent,
    InicioComponent,
    ConsultarPlacaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
