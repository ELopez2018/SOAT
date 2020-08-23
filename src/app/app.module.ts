import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SystemComponent } from './system/system.component';
import { MaterialModule } from './system/shared/material/material.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from './system/shared/shared.module';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CardModule,
    ButtonModule,
    SharedModule,
    MaterialModule,
    InputTextModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
