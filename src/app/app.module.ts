import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Importações do Material Angular 
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterOutlet } from "@angular/router";
import { InicioComponent } from './inicio/inicio.component';
import { SobreComponent } from './sobre/sobre.component';
import { JogosComponent } from './jogos/jogos.component';
import { LoginComponent } from './login/login.component';
@NgModule({
    declarations: [
        AppComponent,
        InicioComponent,
        SobreComponent,
        JogosComponent,
        LoginComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        RouterOutlet
    ]
})
export class AppModule { }
