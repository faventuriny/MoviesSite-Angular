import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { CinemasService } from '../cinemas.service';
import { Cinema } from '../cinema';
import { take } from 'rxjs/operators';
import { error } from 'protractor';

@Component({
  selector: 'app-admin-edit-cinema',
  templateUrl: './admin-edit-cinema.component.html',
  styleUrls: ['../shard/panel.css', '../admin/admin.component.css', './admin-edit-cinema.component.css']
})
export class AdminEditCinemaComponent implements OnInit {


  constructor(private cinemaServis: CinemasService) { }

  cinemasList: Cinema[] = []
  forms: FormGroup[] = []
  isNewFormCinema = false

  displayAlertSave = false;
  displayAlertDelete = false;
  error = null

  ngOnInit(): void {
    this.getAllCinemas()
  }

  getAllCinemas() {
    this.cinemaServis.getAllCinemas().pipe(take(1)).subscribe(data => {
      this.cinemasList = <Cinema[]>data
      this.createForms()
    })
  }
  createForms() {
    for (let i = 0; i < this.cinemasList.length; i++) {
      let form = new FormGroup({
        id: new FormControl(this.cinemasList[i]._id),
        movieName: new FormControl(this.cinemasList[i].movieName, Validators.maxLength(30)),
        movieHour: new FormControl(this.cinemasList[i].movieHour, Validators.pattern('^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$')),
        moviePic: new FormControl(this.cinemasList[i].moviePic),
        releaseDate: new FormControl(this.cinemasList[i].releaseDate),
        cinema: new FormControl(this.cinemasList[i].cinema, Validators.pattern('^[0-9]+$')),
        numOfSeats: new FormControl(this.cinemasList[i].numOfSeats, Validators.compose([Validators.pattern('^[0-9]+$'), Validators.minLength(1)])),
        numOfRows: new FormControl(this.cinemasList[i].numOfRows, Validators.compose([Validators.pattern('^[0-9]+$'), Validators.minLength(1)])),
      })
      this.forms.push(form)
    }
    console.log('forms Array:', this.forms);
  }

  onSubmit(id: string, cinemaUpdate) {
    console.log('--onSubmit-- , id: ' + id);

    this.cinemaServis.updateCinema(id, cinemaUpdate).pipe(take(1)).subscribe(data => {
      console.log('onSubmit server data:', data);
    }, error => {
      this.error = error.message
    })
    this.displayAlertSave = true
  }

  onDelete(id: string) {
    this.cinemaServis.deleteCinema(id).pipe(take(1)).subscribe(data => {
      console.log('Delet', data);
    }, error => {
      this.error = error.message
    })
    this.displayAlertDelete = true
  }

  onCancel() {
    window.location.reload()
  }

  addNewCinema() {
    this.isNewFormCinema = true
  }
  closeNewCinema() {
    this.isNewFormCinema = false
  }
  onCloseAlert() {
    this.displayAlertSave = false
    this.displayAlertDelete = false
    this.error = null
  }
}
