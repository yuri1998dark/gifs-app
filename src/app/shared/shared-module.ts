import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyImage } from './components/lazy-image/lazy-image.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, SidebarComponent, LazyImage],
  exports: [SidebarComponent, LazyImage],
})
export class SharedModule {}
