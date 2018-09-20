import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShapizeModule } from 'src';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShapizeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
