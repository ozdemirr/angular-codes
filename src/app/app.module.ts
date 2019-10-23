import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { ProductWidgetComponent } from './product-widget/product-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ProductWidgetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
