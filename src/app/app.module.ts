import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EncapsulationComponent } from './encapsulation/encapsulation.component';

@NgModule({
  declarations: [
    AppComponent,
    EncapsulationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
