import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { AuthComponent } from './auth/auth.component';

import { CoreModule } from '../core/core.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [MainComponent, AuthComponent],
  imports: [CommonModule, CoreModule, AppRoutingModule],
})
export class LayoutsModule {}
