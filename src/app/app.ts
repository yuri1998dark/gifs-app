import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GifsModule } from './gifs/gifs-module';
import { SharedModule } from './shared/shared-module';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GifsModule, SharedModule, HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'GifsApp';
}
