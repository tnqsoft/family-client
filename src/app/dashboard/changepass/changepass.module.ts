import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ChangepassComponent } from './changepass.component';


@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [ChangepassComponent],
  exports: [ChangepassComponent]
})

export class ChangepassModule { }
