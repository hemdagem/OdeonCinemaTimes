import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from './Film';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-dream-app';
  films: Film[];
  cinema : string;
  constructor(private http: HttpClient) {
    this.getFilmTimes(211, "BFI IMAX");
  }

  getFilmTimes(cinemaId: number, cinemaName: string) {
    this.http.get(`https://www.odeon.co.uk/api/uk/v2/cinemas/cinema/${cinemaId}/filmswithdetails.json`)
      .subscribe((data: Film[]) => this.films = data );

      this.cinema = cinemaName
  }
}

