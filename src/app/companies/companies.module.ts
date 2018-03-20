import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CompaniesComponent } from './listar/companies.component';
import { CompaniesPageRoutes } from './companies.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CompaniesPageRoutes),
    SharedModule
  ],
  declarations: [CompaniesComponent]
})
export class CompaniesModule { }
