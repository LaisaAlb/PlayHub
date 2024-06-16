import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: 'menu', component: MenuComponent},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/menu', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
