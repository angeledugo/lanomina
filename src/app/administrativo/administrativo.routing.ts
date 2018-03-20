import { Routes } from '@angular/router';

export const AdministrativoRoutes: Routes = [
    {
      path: '',
      children: [
        {
          path: 'centro-costo',
          loadChildren: './ccosto/ccosto.module#CcostoModule',
          data: {
            breadcrumb: 'Centro de Costo'
          }
        }]
    },
    {
      path: '',
      children: [
        {
          path: 'jobs',
          loadChildren: './jobs/jobs.module#JobsModule',
          data: {
            breadcrumb: 'Cargos'
          }
        }]
    }
]