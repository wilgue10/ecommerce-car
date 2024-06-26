import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './layouts/auth/auth.component';
import { MainComponent } from './layouts/main/main.component';

const routes: Routes = [
  {
    path: 'login',
    component: AuthComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/login/login.module').then((m) => m.LoginModule),
      },
    ],
  },
  {
    path: 'checkout',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/checkout/checkout.module').then(
            (m) => m.CheckoutModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
