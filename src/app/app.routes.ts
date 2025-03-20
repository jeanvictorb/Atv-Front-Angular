import { Routes } from '@angular/router';
import path from 'path';
import { Component } from '@angular/core';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { LoginComponent } from './components/layout/login/login.component';
import { ProfessorListComponent } from './components/professor/professor-list/professor-list.component';
import { ProfessorFormComponent } from './components/professor/professor-form/professor-form.component';
import { AlunoListComponent } from './components/aluno/aluno-list/aluno-list.component';
import { AlunoFormComponent } from './components/aluno/aluno-form/aluno-form.component';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: "login", component: LoginComponent},
    {path: "admin", component: PrincipalComponent, children:[
        {path: "professor", component: ProfessorListComponent},
        {path: "professor/new", component: ProfessorFormComponent},
        {path: "professor/form/:id", component: ProfessorFormComponent},
        {path: "aluno", component: AlunoListComponent},
        {path: "aluno/new", component: AlunoFormComponent},
        {path: "aluno/form/:id", component: AlunoFormComponent},
        
    ]},
    {path: "aluno", component: PrincipalComponent, children:[



    ]},
    


];
