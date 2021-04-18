import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { CinemasService } from '../cinemas.service';
import { Cinema } from '../cinema';

@Component({
  selector: 'app-admin-edit-cinema',
  templateUrl: './admin-edit-cinema.component.html',
  styleUrls: ['./admin-edit-cinema.component.css', '../shard/panel.css', '../admin/admin.component.css']
})
export class AdminEditCinemaComponent implements OnInit {


  constructor(private cinemaServis: CinemasService) { }

  private subscToUpdate: Subscription;
  private subscToGet: Subscription;
  private subscToDel: Subscription;
  private subscToSub: Subscription;
  cinemasList: Cinema[] = []
  forms: FormGroup[] = []
  isNewFormCinema = false

  ngOnInit(): void {
    this.getAllCinemas()
  }

  getAllCinemas() {
    this.subscToGet = this.cinemaServis.getAllCinemas().subscribe(data => {
      this.cinemasList = data
      this.createForms()
    })
  }
  createForms() {
    for (let i = 0; i < this.cinemasList.length; i++) {
      let form = new FormGroup({
        movieName: new FormControl(this.cinemasList[i].movieName, Validators.maxLength(30)),
        movieHour: new FormControl(this.cinemasList[i].movieHour, Validators.pattern('^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$')),
        moviePic: new FormControl(this.cinemasList[i].moviePic),
        cinema: new FormControl(this.cinemasList[i].cinema, Validators.pattern('^[0-9]+$')),
        numbersOfSeats: new FormControl(this.cinemasList[i].numbersOfSeats, Validators.compose([Validators.pattern('^[0-9]+$'), Validators.minLength(1)])),
        numbersOfRows: new FormControl(this.cinemasList[i].numbersOfRows, Validators.compose([Validators.pattern('^[0-9]+$'), Validators.minLength(1)])),
      })
      this.forms.push(form)
    }
    console.log('forms Array:', this.forms);
  }

  onSubmit(index: number) {
    console.log('--onSubmit--');

    this.subscToSub = this.cinemaServis.updateCinema(index, this.forms[index].value).subscribe(data => {
      console.log('onSubmit server data:', data);
    })
  }

  onDelete(index: number) {
    this.subscToDel = this.cinemaServis.deleteCinema(index).subscribe(data => {
      console.log('Delet', data);
    })
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
  ngOnDestroy() {
    this.subscToUpdate.unsubscribe()
    this.subscToGet.unsubscribe()
    this.subscToSub.unsubscribe()
    this.subscToDel.unsubscribe()
  }
}
