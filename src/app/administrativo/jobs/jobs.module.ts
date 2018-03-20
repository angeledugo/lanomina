import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';

import { JobsComponent } from './listar/jobs.component';

import {JobsRoutes} from './jobs.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(JobsRoutes),
        SharedModule
    ],
    declarations: [JobsComponent]
})

export class JobsModule {}