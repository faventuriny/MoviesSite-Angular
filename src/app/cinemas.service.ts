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
    cinema.availableSeats = this.addEmptySeats(cinema.numOfSeats, cinema.numOfRows)
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

  getOneCinema(id: string) {
    return this.http.get(this.dataBaseUrl + 'cinema' + '/' + id)
  }

  updateCinema(id: string, cinemaUpdate: Cinema) {
    console.log('--updateCinema-- ', cinemaUpdate);
    console.log('--id-- ', id);

    return this.http.patch(this.dataBaseUrl + 'cinema/' + id, cinemaUpdate)

    // this.allCinemas[index] = cinemaUpdate;
    // this.cinemasListChanged.next(this.allCinemas.slice())
  }

  deleteCinema(id: string) {
    return this.http.delete(this.dataBaseUrl + 'cinema/' + id)
    // this.allCinemas.splice(index, 1)
    // this.cinemasListChanged.next(this.allCinemas.slice())
  }

  addEmptySeats(seats: number, rows: number) {
    let arrayOfAllSeats = []
    let seatsPerRow = seats / rows

    for (let i = 0; i < rows; i++) {
      let seatsAvailableInRow = []
      for (let i = 0; i < seatsPerRow; i++) {
        seatsAvailableInRow.push(false)
      }
      arrayOfAllSeats.push(seatsAvailableInRow)
    }
    return arrayOfAllSeats
  }




}
