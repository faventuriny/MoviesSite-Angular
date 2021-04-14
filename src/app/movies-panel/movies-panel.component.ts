import { Component, OnInit, OnDestroy } from '@angular/core';
import { CinemasService } from '../cinemas.service';
import { Cinema } from '../cinema';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movies-panel',
  templateUrl: './movies-panel.component.html',
  styleUrls: ['./movies-panel.component.css', '../shard/panel.css']
})
export class MoviesPanelComponent implements OnInit, OnDestroy {

  constructor(private cinemaServis: CinemasService) { }
  allCinemas: Cinema[]
  subscToGet: Subscription


  ngOnInit(): void {
    this.getAllCinemas()
  }

  getAllCinemas() {
    this.subscToGet = this.cinemaServis.getAllCinemas().subscribe(data => {
      this.allCinemas = data
    })
  }
  ngOnDestroy() {
    this.subscToGet.unsubscribe()
  }

}
