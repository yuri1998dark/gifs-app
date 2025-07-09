import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GifObject, GiphyResponse } from '../interfaces/gifs.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _tagHistory: string[] = ['Valorant'];
  private apiKey: string = '29SIgim86kCpQUGmqfIuE3UTMns3hdoK';
  private gifsSubject = new BehaviorSubject<GifObject[]>([]);
  public gifsList$ = this.gifsSubject.asObservable();

  constructor(private http: HttpClient) {
    // this.loadLocalStorage();
  }

  get tagsHistory() {
    return [...this._tagHistory];
  }


  // private saveLocalStorage(): void {
  //   localStorage.setItem('history', JSON.stringify(this._tagHistory));
  // }

  // private loadLocalStorage(): void {
  //   if (!localStorage.getItem('history')) return;
  //   this._tagHistory = JSON.parse(localStorage.getItem('history')!);
  // }
  private organizeHist(tag: string) {
    tag = tag.toLowerCase();
    if (this._tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter((item) => item !== tag);
    }
    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.splice(0, 10);
   // this.saveLocalStorage();
  }

  public async searchTag(tag: string): Promise<void> {
    if (tag.length === 0) return;
    this.organizeHist(tag);
    this.http
      .get<GiphyResponse>(
        `https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${tag}&limit=10&offset=0`
      )
      .subscribe((resp) => {
        this.gifsSubject.next([...resp.data]);
        console.log('GIFs actualizados:', this.gifsList$);
      });
  }
}
