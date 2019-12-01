import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'product/:id', component: ProductComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: 'herhangiBirUrl', redirectTo: '/not-found'},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}

