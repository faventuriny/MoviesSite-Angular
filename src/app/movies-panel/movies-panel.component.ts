import { Component, OnInit, OnDestroy } from '@angular/core';
import { CinemasService } from '../cinemas.service';
import { Cinema } from '../cinema';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-movies-panel',
  templateUrl: './movies-panel.component.html',
  styleUrls: ['../shard/panel.css', './movies-panel.component.css']
})
export class MoviesPanelComponent implements OnInit {

  constructor(private cinemaServis: CinemasService) { }
  allCinemas: Cinema[]
  allCinemasBackup: Cinema[]


  ngOnInit(): void {
    this.getAllCinemas()
  }

  getAllCinemas() {
    this.cinemaServis.getAllCinemas().pipe(take(1)).subscribe(data => {
      console.log(data);

      this.allCinemas = <Cinema[]>data
      this.allCinemasBackup = <Cinema[]>data
    })
  }
  onReleaseDateSort() {
    this.allCinemas.sort((a, b) => (a.releaseDate > b.releaseDate) ? -1 : 1)
  }
  onScreeningTimeSort() {
    this.allCinemas.sort((a, b) => (a.movieHour > b.movieHour) ? 1 : -1)
  }
  onNameSort() {
    this.allCinemas.sort((a, b) => (a.movieName > b.movieName) ? 1 : -1)
  }
  onInputSort(searchWord: string) {
    console.log(searchWord);
    let word: string = searchWord
    let newCinemaList: Cinema[] = []

    this.allCinemasBackup.forEach(cinema => {
      if (cinema.movieName.toLowerCase().includes(word.toLowerCase())) {
        newCinemaList.push(cinema)
      }
    })
    this.allCinemas = newCinemaList
  }

}
