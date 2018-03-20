import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdministrativoRoutes } from './administrativo.routing';

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(AdministrativoRoutes),
      FormsModule,
      ReactiveFormsModule
    ],
    declarations: []
  })
  
  export class AdministrativoModule {}
  
  