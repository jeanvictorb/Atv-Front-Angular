import { RouterModule, Routes } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { LoginComponent } from './components/layout/login/login.component';
import { CreaterComponent } from './components/layout/creater/creater.component';
import { Login } from './models/login';
import { IndexComponent } from './components/layout/index/index.component';
import { PackageComponent } from './components/package/package.component';
import { TourComponent } from './components/tour/tour.component';
import { PackageCreaterComponent } from './components/layout/packageCreater/creater.component';
import { UserComponent } from './components/user/user.component';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: "principal", component: PrincipalComponent, children: [
        {path: 'index', component: IndexComponent},
        {path: 'creater', component: CreaterComponent},
        {path: 'creater/:id', component: CreaterComponent},
        {path: 'package', component: PackageComponent},
        {path: 'tour', component: TourComponent},
        {path: 'packagecreater', component: PackageCreaterComponent},
        {path: 'packagecreater/:id', component: PackageCreaterComponent},
        {path: 'user', component: UserComponent},
        
    ]},

];
