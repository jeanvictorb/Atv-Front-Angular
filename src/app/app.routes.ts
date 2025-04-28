import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { Component, NgModule } from '@angular/core';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { LoginComponent } from './components/layout/login/login.component';
import { CreaterComponent } from './components/layout/creater/creater.component';
import { Login } from './models/login';
import { IndexComponent } from './components/layout/index/index.component';
import { PackageComponent } from './components/package/package.component';
import { TourComponent } from './components/tour/tour.component';
import { PrincipalUserComponent } from './components/layout/principal-user/principal-user.component';
import { EditComponent } from './components/layout/edit/edit.component';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: "principal", component: PrincipalComponent, children: [
        {path: 'index', component: IndexComponent},
        {path: 'package', component: PackageComponent},
        {path: 'tour', component: TourComponent},
        {path: 'creater', component: CreaterComponent},
        {path: 'edit', component: EditComponent}
    ]},

    {path: '', redirectTo: 'principal/index', pathMatch: 'full'},
    {path: 'principal-user', component: PrincipalUserComponent, children:[
        {path: 'index', component: IndexComponent},
        {path: 'package', component: PackageComponent},
        {path: 'tour', component: TourComponent}
    ]}
];
