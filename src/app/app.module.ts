import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AltComponent } from './alt/alt.component';
import { EnaltComponent } from './enalt/enalt.component';

@NgModule({
  declarations: [
    AppComponent,
    AltComponent,
    EnaltComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
