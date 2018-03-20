import { Routes } from '@angular/router';
import { CompaniesComponent } from './listar/companies.component';

export const CompaniesPageRoutes: Routes = [{
    path: '',
    component: CompaniesComponent,
    data: {
        breadcrumb: 'Companies'
    }
}];
