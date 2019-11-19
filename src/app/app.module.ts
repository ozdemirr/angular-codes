import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import {Routes, RouterModule} from '@angular/router';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'product/:id', component: ProductComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
