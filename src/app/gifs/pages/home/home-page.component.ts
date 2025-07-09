import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';
import { ListGifsComponent } from '../../components/list-gifs/list-gifs.component';

@Component({
  selector: 'gifs-home-page',
  imports: [CommonModule, SearchBoxComponent, ListGifsComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {}
