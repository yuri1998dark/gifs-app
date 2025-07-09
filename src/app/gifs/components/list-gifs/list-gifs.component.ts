import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsService } from '../../services/gifs.service';
import { GifsCardComponent } from '../gifs-card/gifs-card.component';

@Component({
  selector: 'gifs-list',
  imports: [CommonModule, GifsCardComponent],
  templateUrl: './list-gifs.component.html',
  styleUrls: ['./list-gifs.component.css'],
})
export class ListGifsComponent {
  constructor(public gifsService: GifsService) {}
}
