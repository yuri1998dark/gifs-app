import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { GifObject } from '../../interfaces/gifs.interface';
import { SharedModule } from '../../../shared/shared-module';

@Component({
  selector: 'gifs-card',
  imports: [CommonModule, SharedModule],
  templateUrl: './gifs-card.component.html',
  styleUrl: './gifs-card.component.css',
})
export class GifsCardComponent implements OnInit {
  ngOnInit(): void {
    if (!this.gif) throw new Error('Gifs property is required');
  }
  @Input()
  public gif!: GifObject;
}
