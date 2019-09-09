import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { tabComponent } from './tab.component';
import { MatTabsModule } from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,tabComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [tabComponent]
})
export class AppModule { }
