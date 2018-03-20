import { Routes } from '@angular/router';
import { JobsComponent } from './listar/jobs.component';

export const JobsRoutes: Routes = [
    {
        path: '',
        component: JobsComponent,
        data: {
            breadcrumb: 'Login'
        }
    }
];