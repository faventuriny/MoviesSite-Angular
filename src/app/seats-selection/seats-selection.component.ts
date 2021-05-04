import { Component, OnInit, Input } from '@angular/core';
import { CinemasService } from '../cinemas.service';
import { take } from 'rxjs/operators';
import { Cinema } from '../cinema';

@Component({
  selector: 'app-seats-selection',
  templateUrl: './seats-selection.component.html',
  styleUrls: ['./seats-selection.component.css']
})
export class SeatsSelectionComponent implements OnInit {

  id: string
  cinema: Cinema

  constructor(private cinemaService: CinemasService) { }

  ngOnInit(): void {
    this.id = sessionStorage.getItem('movieId')
    console.log('id:', this.id);
    this.getCinema()
  }

  getCinema() {
    this.cinemaService.getOneCinema(this.id)
      .pipe(take(1))
      .subscribe(data => {
        this.cinema = <Cinema>data
        console.log('cinema', this.cinema);

      })
  }

  // setId(event) {
  //   console.log(event);
  // }

}
