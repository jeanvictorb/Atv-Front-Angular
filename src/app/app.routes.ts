import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { Component, NgModule } from '@angular/core';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { LoginComponent } from './components/layout/login/login.component';
import { PacoteFromComponent } from './components/pacotes/pacote-from/pacote-from.component';
import { PasseioFromComponent } from './components/passeio/passeio-from/passeio-from.component';
import { CreaterComponent } from './components/layout/creater/creater.component';
import { Login } from './models/login';

export const routes: Routes = [
    {path: '', redirectTo: 'principal', pathMatch: 'full'},
    {path: "principal", component: PrincipalComponent, children: [
        {path: 'pacotes', component: PacoteFromComponent},
        {path: 'passeio', component: PasseioFromComponent},
        {path: 'creater', component: CreaterComponent},
        {path: 'login', component: LoginComponent}

    ]},

];
