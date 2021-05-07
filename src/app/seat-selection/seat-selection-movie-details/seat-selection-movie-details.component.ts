import { Component, OnInit, Input } from '@angular/core';
import { Cinema } from '../../cinema';

@Component({
  selector: 'app-seat-selection-movie-details',
  templateUrl: './seat-selection-movie-details.component.html',
  styleUrls: ['./seat-selection-movie-details.component.css']
})
export class SeatSelectionMovieDetailsComponent implements OnInit {
  @Input() cinema: Cinema
  constructor() { }

  ngOnInit(): void {
  }

}
