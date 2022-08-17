import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestingComponent } from './testing/testing.component';
import { APP_BASE_HREF } from '@angular/common';
import { APPLICATION_ID } from '../helpers';

@NgModule({
  declarations: [
    AppComponent,
    TestingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ {
    provide: APP_BASE_HREF,
    useValue: `/${APPLICATION_ID}`
  } ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
