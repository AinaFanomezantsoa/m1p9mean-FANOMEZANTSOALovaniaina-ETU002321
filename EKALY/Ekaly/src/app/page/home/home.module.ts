import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children:[
      {
        path:"",
        loadChildren: () => import("./view/order/order.module").then(n => n.OrderModule)
      },
      {
        path:"order",
        loadChildren: () => import("./view/order/order.module").then(n => n.OrderModule)
      },
      {
        path:"user",
        loadChildren: () => import("./view/user/user.module").then(n => n.UserModule)
      },
      {
        path:"basket",
        loadChildren: () => import("./view/basket/basket.module").then(n => n.BasketModule)
      }
    ]
  }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
