import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { CinemasService } from '../cinemas.service';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { Cinema } from '../cinema';


@Component({
  selector: 'app-admin-new-cinema',
  templateUrl: './admin-new-cinema.component.html',
  styleUrls: ['../admin/admin.component.css', './admin-new-cinema.component.css']
})
export class AdminNewCinemaComponent implements OnInit {

  constructor(private cinemaService: CinemasService, private fb: FormBuilder) { }

  form: FormGroup;
  id
  movieName
  movieHour
  moviePic
  releaseDate
  cinema
  numOfSeats
  numOfRows

  displayAlert = false;
  error = null

  @Input() isNewFormCinema
  @Output() closeWindow = new EventEmitter()


  ngOnInit(): void {
    this.form = this.fb.group({
      movieName: new FormControl('', Validators.compose([Validators.maxLength(30), Validators.required])),
      movieHour: new FormControl('', Validators.compose([Validators.pattern('^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$'), Validators.required])),
      moviePic: new FormControl('', Validators.required),
      releaseDate: new FormControl('', Validators.required),
      cinema: new FormControl('', Validators.compose([Validators.pattern('^[0-9]+$')])),
      numOfSeats: new FormControl('', Validators.compose([Validators.pattern('^[0-9]+$'), Validators.minLength(1), Validators.required])),
      numOfRows: new FormControl('', Validators.compose([Validators.pattern('^[0-9]+$'), Validators.minLength(1), Validators.required]))
    })

    this.movieName = this.form.get('movieName')
    this.movieHour = this.form.get('movieHour')
    this.moviePic = this.form.get('moviePic')
    this.releaseDate = this.form.get('releaseDate')
    this.cinema = this.form.get('cinema')
    this.numOfSeats = this.form.get('numOfSeats')
    this.numOfRows = this.form.get('numOfRows')
  }

  onSubmit(cinema: Cinema) {
    console.log('--onSubmit--, Cinema Data: ', cinema);

    this.cinemaService.CreateAndStoreCinema(cinema)
      .pipe(take(1))
      .subscribe(resData => {
      }, error => {
        console.log("error:", error.message);
        this.error = error.message
      })

    this.displayAlert = true
    this.clearForm()
  }
  clearForm() {
    this.movieName.value = ''
    this.movieHour.value = ''
    this.moviePic.value = ''
    this.releaseDate.value = ''
    this.cinema.value = ''
    this.numOfSeats.value = ''
    this.numOfRows.value = ''
    this.ngOnInit()
  }
  onCancel() {
    this.closeWindow.emit('')
  }
  onResetForm() {
    this.form.reset()
  }
  onCloseForm(event: Event) {
    this.closeWindow.emit('')
  }
  onClickStopPro(event: Event) {
    event.stopPropagation()
  }
  onCloseAlert() {
    this.displayAlert = false
  }

}
