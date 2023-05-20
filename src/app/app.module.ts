import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StateVectorComponent } from './state-vector/state-vector.component';
import { MaterialModule } from './material/material.module';
import { DeviceArrivingComponent } from './device-arriving/device-arriving.component';

@NgModule({
  declarations: [
    AppComponent,
    StateVectorComponent,
    DeviceArrivingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
