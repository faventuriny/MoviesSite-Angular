import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Cinema } from './cinema';

@Injectable({
  providedIn: 'root'
})

export class CinemasService {
  private reqOption = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  constructor(private http: HttpClient) { }

  dataBaseUrl = 'http://localhost:3030/'
  cinemasListChanged = new Subject<Cinema[]>()
  error = new Subject<string>()
  allCinemas: Cinema[]

  CreateAndStoreCinema(cinema: Cinema) {
    console.log('--service--');

    return this.http.post(
      this.dataBaseUrl + 'new',
      cinema,
      {
        observe: 'response'
      }
    )
  }

  getAllCinemas() {

    return this.http
      .get(this.dataBaseUrl + 'cinemas', this.reqOption)
  }

  updateCinema(id: string, cinemaUpdate: Cinema) {
    console.log('--updateCinema--');

    return this.http.patch(this.dataBaseUrl + 'cinema/' + id, cinemaUpdate)

    // this.allCinemas[index] = cinemaUpdate;
    // this.cinemasListChanged.next(this.allCinemas.slice())
  }

  deleteCinema(id: string) {
    return this.http.delete(this.dataBaseUrl + 'cinema/' + id)
    // this.allCinemas.splice(index, 1)
    // this.cinemasListChanged.next(this.allCinemas.slice())
  }




}
