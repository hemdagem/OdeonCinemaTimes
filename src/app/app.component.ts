import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-dream-app';
  films: Film[];
  constructor(private http: HttpClient) {
    this.getFilmTimes();
  }

  getFilmTimes() {
    this.http.get("https://www.odeon.co.uk/api/uk/v2/cinemas/cinema/211/filmswithdetails.json")
      .subscribe((data: Film[]) => this.films = data );
  }
}

export interface Film {
  title: string;
  releaseDate: Date;
  showdates: string;
  media : media;
}

export interface media {
  imageUrl400 :string
}