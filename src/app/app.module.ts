import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Bind1Component } from './bind1/bind1.component';
import { Bind2Component } from './bind2/bind2.component';
import { Bind3Component } from './bind3/bind3.component';
import { Event1Component } from './event1/event1.component';
import { Event2Component } from './event2/event2.component';

@NgModule({
  declarations: [
    AppComponent,
    Bind1Component,
    Bind2Component,
    Bind3Component,
    Event1Component,
    Event2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }