import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { Route, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared/services/auth-guard.guard';
import { ProductComponent } from './components/product/product.component';
import { AngularMaterialModuleModule } from '../../angular-material-module/angular-material-module.module';

const checkoutRoutes: Route[] = [
  {
      path     : '',
      component: CheckoutComponent,
      
  }
];

@NgModule({
  declarations: [
    CheckoutComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(checkoutRoutes),
    AngularMaterialModuleModule
  ]
})
export class CheckoutModule { }
