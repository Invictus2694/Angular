import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { demoComponent } from './demo.component';
import { MatGridListModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    demoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule
    
  ],
  providers: [],
  bootstrap: [demoComponent]
})
export class AppModule { }
