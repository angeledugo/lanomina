import {NgModule} from '@angular/core';
import { AuthComponent } from './auth/auth.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {LoginRoutes} from './login.routing';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(LoginRoutes),
        SharedModule
    ],
    declarations: [AuthComponent]
})

export class LoginModule {}
