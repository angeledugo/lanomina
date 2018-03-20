import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { UserRoutes } from './user.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes),
    SharedModule
  ],
  declarations: [ProfileComponent]
})
export class UserModule { }
