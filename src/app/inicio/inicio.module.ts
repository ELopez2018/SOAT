import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioRoutingModule } from './inicio.routing';
import { InicioComponent } from './inicio.component';
import { ConsultarPlacaComponent } from './consultar-placa/consultar-placa.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../system/shared/material/material.module';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    InicioComponent,
    ConsultarPlacaComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    CardModule,
    ButtonModule,
    MaterialModule,
    InputTextModule
  ],
  exports: [
     ConsultarPlacaComponent
  ]

})
export class InicioModule { }
