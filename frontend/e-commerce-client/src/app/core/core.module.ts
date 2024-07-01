import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AngularMaterialModuleModule } from '../angular-material-module/angular-material-module.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, AngularMaterialModuleModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
