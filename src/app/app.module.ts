import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TimepickerModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    TimepickerModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
