import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { CinemasService } from '../cinemas.service';
import { Cinema } from '../cinema';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css', '../shard/panel.css']
})
export class AdminComponent implements OnInit, OnDestroy {

  constructor(private cinemaServis: CinemasService) { }

  private subscToUpdate: Subscription;
  private subscToGet: Subscription;
  private subscToDel: Subscription;
  cinemasList: Cinema[] = []
  forms: FormGroup[] = []

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
    this.cinemaServis.updateCinema(index, this.forms[index].value)
  }

  onDelete(index: number) {
    this.subscToDel = this.cinemaServis.deleteCinema(index).subscribe(data => {
      console.log('Delet', data);

    })
  }

  onCancel() {
    window.location.reload()
  }

  ngOnDestroy() {
    this.subscToUpdate.unsubscribe()
    this.subscToGet.unsubscribe()
  }
}
