import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { PolicyListComponent } from './policy-list/policy-list.component';
import { PolicyData } from './policy-list';

@NgModule({
  imports: [
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(PolicyData),
    RouterModule.forChild([
      {
        path: 'policy',
        component: PolicyListComponent
      }
    ])
  ],
  declarations: [
    PolicyListComponent
  ]
})
export class PolicyModule { }
