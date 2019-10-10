import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PolicyListComponent } from './policy-list/policy-list.component';


export const policyRoutes: Routes = [
    {
        path: 'policy',
        component: PolicyListComponent
    }
];
