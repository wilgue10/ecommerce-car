import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Route, RouterModule } from '@angular/router';

const loginRoutes: Route[] = [
  {
      path     : '',
      component: LoginComponent
  }
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoutes)
  ]
})
export class LoginModule { }
