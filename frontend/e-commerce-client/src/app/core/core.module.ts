import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AngularMaterialModuleModule } from '../angular-material-module/angular-material-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * CoreModule provides shared services, modules, and components across the entire application.
 */
@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, BrowserAnimationsModule, AngularMaterialModuleModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
