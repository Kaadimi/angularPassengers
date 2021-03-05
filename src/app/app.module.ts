import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { PassengerModule } from './passengers/passenger.module'
import { AppRoutingModel } from './app-routing.model'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, PassengerModule, FormsModule, HttpClientModule, AppRoutingModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
