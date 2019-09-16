import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaginateComponent } from './component/paginate.component';
import { NgxPaginationModule } from "ngx-pagination";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PaginateComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [PaginateComponent]
})
export class AppModule { }
