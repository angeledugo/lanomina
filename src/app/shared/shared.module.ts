import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { MenuItems } from './menu-items/menu-items';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from '../spinner/spinner.component';
import { CardComponent } from './card/card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      NgbModule.forRoot(),
  ],
  declarations: [
    SpinnerComponent,
    CardComponent
  ],
  exports: [
    SpinnerComponent,
    CardComponent,
    FormsModule,
    NgbModule,
  ],
  providers: [
      MenuItems
  ]
})
export class SharedModule { }
