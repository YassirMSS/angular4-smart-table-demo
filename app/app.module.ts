import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataTableModule } from 'angular4-smart-table/src/index';

import { DataTableDemo1 } from './demo1/data-table-demo1';

@NgModule({
  imports: [ BrowserModule, CommonModule, FormsModule, DataTableModule ],
  declarations: [ AppComponent, DataTableDemo1],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
