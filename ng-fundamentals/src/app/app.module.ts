import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';

@NgModule({
  imports: [
    BrowserModule // Here we are importing angular's BrowserModule 
  ],
  declarations: [
    EventsAppComponent
  ],
  
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
