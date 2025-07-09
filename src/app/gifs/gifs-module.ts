import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SharedModule } from '../shared/shared-module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule, HomePageComponent],
  exports: [HomePageComponent],
})
export class GifsModule {}
