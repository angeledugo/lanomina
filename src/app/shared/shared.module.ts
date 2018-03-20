import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { MenuItems } from './menu-items/menu-items';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from '../spinner/spinner.component';
import { CardComponent } from './card/card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ToastyModule} from 'ng2-toasty';

import {CardRefreshDirective} from './card/card-refresh.directive';
import {CardToggleDirective} from './card/card-toggle.directive';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      NgbModule.forRoot(),
      ToastyModule
  ],
  declarations: [
    SpinnerComponent,
    CardComponent,
    CardRefreshDirective,
    CardToggleDirective,
  ],
  exports: [
    SpinnerComponent,
    CardComponent,
    FormsModule,
    NgbModule,
    CardRefreshDirective,
    CardToggleDirective,
    ToastyModule
  ],
  providers: [
      MenuItems
  ]
})
export class SharedModule { }
