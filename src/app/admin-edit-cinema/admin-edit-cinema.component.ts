import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { CinemasService } from '../cinemas.service';
import { Cinema } from '../cinema';
import { take } from 'rxjs/operators';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-admin-edit-cinema',
  templateUrl: './admin-edit-cinema.component.html',
  styleUrls: ['../shard/panel.css', '../admin/admin.component.css', './admin-edit-cinema.component.css']
})
export class AdminEditCinemaComponent implements OnInit {

  constructor(private cinemaServis: CinemasService) { }

  cinemasList: Cinema[] = []

  isNewFormCinema = false
  displayAlertNewCinemaCreated = false

  error = null

  ngOnInit(): void {
    this.getAllCinemas()
  }

  getAllCinemas() {
    this.cinemaServis.getAllCinemas().pipe(take(1)).subscribe(data => {
      this.cinemasList = <Cinema[]>data
      console.log('this.cinemasList', this.cinemasList);
    })
  }

  openAlertNewCinemaSaved(event: EventEmitter) {
    this.error = event
    this.displayAlertNewCinemaCreated = true
  }

  addNewCinema() {
    this.isNewFormCinema = true
  }

  closeNewCinema() {
    this.isNewFormCinema = false
  }

  onCloseAlert() {
    this.displayAlertNewCinemaCreated = false
    this.error = null
    window.location.reload()
  }

}
