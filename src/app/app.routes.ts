import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { Component, NgModule } from '@angular/core';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { LoginComponent } from './components/layout/login/login.component';
import { PacoteFromComponent } from './components/pacotes/pacote-from/pacote-from.component';

export const routes: Routes = [
    {path: '', redirectTo: 'principal', pathMatch: 'full'},
    {path: "principal", component: PrincipalComponent, children: [
        {path: 'pacote', component: PacoteFromComponent},
    ]},

];
