import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; // Importe o MatToolbarModule aqui

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MenuComponent,
    LoginComponent
    // Declare outros componentes aqui
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule, // Adicione o MatToolbarModule aqui
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

