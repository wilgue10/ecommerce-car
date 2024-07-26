import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Route, RouterModule } from '@angular/router';
import { AngularMaterialModuleModule } from '../../angular-material-module/angular-material-module.module';
import { FormsModule } from '@angular/forms';

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
    RouterModule.forChild(loginRoutes),
    AngularMaterialModuleModule,
    FormsModule
  ]
})
export class LoginModule { }
