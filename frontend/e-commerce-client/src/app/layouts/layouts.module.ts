import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { AuthComponent } from './auth/auth.component';



@NgModule({
  declarations: [
    MainComponent,
    AuthComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutsModule { }
