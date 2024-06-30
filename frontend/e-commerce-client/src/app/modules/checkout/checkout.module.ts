import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { Route, RouterModule } from '@angular/router';

const checkoutRoutes: Route[] = [
  {
      path     : '',
      component: CheckoutComponent
  }
];

@NgModule({
  declarations: [
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(checkoutRoutes)
  ]
})
export class CheckoutModule { }
