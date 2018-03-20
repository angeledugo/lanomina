import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

export const LoginRoutes: Routes = [
    {
        path: '',
        component: AuthComponent,
        data: {
            breadcrumb: 'Login'
        }
    }
];
