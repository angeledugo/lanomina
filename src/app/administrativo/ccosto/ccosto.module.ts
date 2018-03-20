import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';

import { CcostoComponent } from './listar/ccosto.component';
import { NccostoComponent } from './nuevo/nccosto.component';

import {CcostoRoutes} from './ccosto.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(CcostoRoutes),
        SharedModule
    ],
    declarations: [CcostoComponent, NccostoComponent]
})

export class CcostoModule {}
