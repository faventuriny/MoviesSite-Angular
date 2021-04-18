import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Cinema } from './cinema';

@Injectable({
  providedIn: 'root'
})

export class CinemasService {

  constructor(private http: HttpClient) { }

  dataBaseUrl = 'https://movies-site-e0280-default-rtdb.europe-west1.firebasedatabase.app/posts'
  cinemasListChanged = new Subject<Cinema[]>()
  error = new Subject<string>()
  // postsIds: string[] = []

  CreateAndStoreCinema(cinema: Cinema) {
    console.log('CreateAndStoreCinema', cinema);

    return this.http.post(
      this.dataBaseUrl + '.json',
      cinema,
      {
        observe: 'response'
      }
    )
  }

  getAllCinemas() {
    return this.http
      .get(this.dataBaseUrl + '.json')
      .pipe(
        map(data => {
          let cinemaArray = Object.values(data)
          console.log('cinemaArray', cinemaArray);
          return cinemaArray
        }),
        // tap(data => {
        //   // this.postsIds = Object.keys(data)
        //   this.postsIds = data
        //   console.log('postsIds', this.postsIds);
        // })
      )
  }

  updateCinema(index: number, cinemaUpdate: Cinema) {
    console.log('--updateCinema--');

    return this.http.patch(this.dataBaseUrl + '/' + index, cinemaUpdate)

    // this.allCinemas[index] = cinemaUpdate;
    // this.cinemasListChanged.next(this.allCinemas.slice())
  }

  deleteCinema(index: number) {
    return this.http.delete(this.dataBaseUrl + '/' + index)
    // this.allCinemas.splice(index, 1)
    // this.cinemasListChanged.next(this.allCinemas.slice())
  }

  allCinemas: Cinema[]

    = [
      {
        movieName: 'Thunder Force',
        movieHour: '22:00',
        moviePic: 'https://m.media-amazon.com/images/M/MV5BMWZkM2I2NjEtNWM0Mi00MTgwLWJlYTAtYmNkZWYzNmQ1ZTBiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
        cinema: 1,
        numbersOfSeats: 30,
        numbersOfRows: 3
      },
      {
        movieName: 'Squared Love',
        movieHour: '19:00',
        moviePic: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTyitSFEw7iK6cdLJ74pfh7ojjFc8U_OXrtj1HzO7xbR607u0PM',
        cinema: 2,
        numbersOfSeats: 40,
        numbersOfRows: 4
      },
      {
        movieName: 'Bliss',
        movieHour: '21:00',
        moviePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRsOtsSZ5hkYWA_zm_XRwe5yo7IWviGD22chiupCVYwEVlnGKp',
        cinema: 3,
        numbersOfSeats: 30,
        numbersOfRows: 5
      },
      {
        movieName: 'Red Dot',
        movieHour: '20:00',
        moviePic: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQxHB-xOwix08yADWeK3bUM49JIvXes7unOm9a_31RuPBO8xmil',
        cinema: 4,
        numbersOfSeats: 50,
        numbersOfRows: 5
      },
      {
        movieName: 'Below Zero',
        movieHour: '21:00',
        moviePic: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQnaowx4N_4ojaPLxraD_Eu5XnU2_XMmucK2u-HtHSshCTMnVRZ',
        cinema: 2,
        numbersOfSeats: 32,
        numbersOfRows: 4
      },
      {
        movieName: 'Zona de Combate',
        movieHour: '17:00',
        moviePic: 'https://media-cache.cinematerial.com/p/500x/vvdxkbv6/outside-the-wire-polish-movie-cover.jpg?v=1611798623',
        cinema: 5,
        numbersOfSeats: 35,
        numbersOfRows: 5
      }
    ]

}
