import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { LoginModule } from './login';
import { DashboardModule } from './dashboard';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
		HttpModule,
		RouterModule.forRoot(routes),
    LoginModule,
    DashboardModule,
    SharedModule.forRoot()
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
