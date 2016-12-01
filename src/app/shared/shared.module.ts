import { NgModule } from '@angular/core';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AuthGuard } from './guard';
import { AuthenticationService, UserService } from './services';
import { JwtHelper } from './helper';

@NgModule({
  imports: [
    AlertModule
  ],
  exports: [
    AlertModule
  ],
  declarations: [],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,
    JwtHelper
  ]
})

export class SharedModule { }
