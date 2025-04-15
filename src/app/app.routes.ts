import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { Component, NgModule } from '@angular/core';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { LoginComponent } from './components/layout/login/login.component';
import { PacoteFromComponent } from './components/pacotes/pacote-from/pacote-from.component';
import { PasseioFromComponent } from './components/passeio/passeio-from/passeio-from.component';
import { CreaterComponent } from './components/layout/creater/creater.component';
import { Login } from './models/login';
import { IndexComponent } from './components/layout/index/index.component';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: "principal", component: PrincipalComponent, children: [
        {path: 'index', component: IndexComponent},
        {path: 'pacotes', component: PacoteFromComponent},
        {path: 'passeio', component: PasseioFromComponent},
        {path: 'creater', component: CreaterComponent},
        {path: 'creater/:id', component: CreaterComponent},

    ]},

];
