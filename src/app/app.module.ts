import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListbookComponent } from './listbook/listbook.component';
import { ViewbycategoryComponent } from './viewbycategory/viewbycategory.component';
import { SearchbookComponent } from './searchbook/searchbook.component';

@NgModule({
  declarations: [
    AppComponent,
    ListbookComponent,
    ViewbycategoryComponent,
    SearchbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
