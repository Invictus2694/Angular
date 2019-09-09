import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { dbComponent } from './component/db.component';
import { mongodbComponent } from './component/mongodb.component';
import { mssqlComponent } from './component/mssql.component';
import { mysqlComponent } from './component/mysql.component';

@NgModule({
  declarations: [
    AppComponent,dbComponent,mongodbComponent,mssqlComponent,mysqlComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [dbComponent]
})
export class AppModule { }
