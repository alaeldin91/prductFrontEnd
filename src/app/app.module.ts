import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './component/product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DataTablesModule} from 'angular-datatables'
import { CommonModule } from '@angular/common';


const routes:Routes = [{path:'product',component:ProductComponent}]
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,

    DataTablesModule,
     HttpClientModule,
    BrowserAnimationsModule
  ],
    exports: [RouterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
