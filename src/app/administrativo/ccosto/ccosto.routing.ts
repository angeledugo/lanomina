import { Routes } from '@angular/router';
import { CcostoComponent } from './listar/ccosto.component';
import { NccostoComponent } from './nuevo/nccosto.component';

export const CcostoRoutes: Routes = [
    {
        path: '',
        component: CcostoComponent,
        data: {
            breadcrumb: 'Lista centro de Costos'
        }
    },
    {
      path: 'nuevo',
      component: NccostoComponent,
      data: {
          breadcrumb: 'Nuevo Centro de Costos'
      }
  }
];
