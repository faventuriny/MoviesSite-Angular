import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { CinemasService } from '../cinemas.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-admin-new-cinema',
  templateUrl: './admin-new-cinema.component.html',
  styleUrls: ['../admin/admin.component.css', './admin-new-cinema.component.css']
})
export class AdminNewCinemaComponent implements OnInit, OnDestroy {

  constructor(private cinemaService: CinemasService, private fb: FormBuilder) { }

  form: FormGroup;
  movieName
  movieHour
  moviePic
  cinema
  numbersOfSeats
  numbersOfRows

  displayAlert = false;
  error = null
  subscription: Subscription

  @Input() isNewFormCinema
  @Output() closeWindow = new EventEmitter()


  ngOnInit(): void {
    this.form = this.fb.group({
      movieName: new FormControl('', Validators.compose([Validators.maxLength(30), Validators.required])),
      movieHour: new FormControl('', Validators.compose([Validators.pattern('^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$'), Validators.required])),
      moviePic: new FormControl('', Validators.required),
      cinema: new FormControl('', Validators.compose([Validators.pattern('^[0-9]+$')])),
      numbersOfSeats: new FormControl('', Validators.compose([Validators.pattern('^[0-9]+$'), Validators.minLength(1), Validators.required])),
      numbersOfRows: new FormControl('', Validators.compose([Validators.pattern('^[0-9]+$'), Validators.minLength(1), Validators.required]))
    })

    this.movieName = this.form.get('movieName')
    this.movieHour = this.form.get('movieHour')
    this.moviePic = this.form.get('moviePic')
    this.cinema = this.form.get('cinema')
    this.numbersOfSeats = this.form.get('numbersOfSeats')
    this.numbersOfRows = this.form.get('numbersOfRows')
  }

  onSubmit() {
    this.subscription = this.cinemaService.CreateAndStoreCinema(this.form.value)
      .subscribe(resData => {
        console.log('CreateAndStoreCinema resData:', resData.body);
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
    this.cinema.value = ''
    this.numbersOfSeats.value = ''
    this.numbersOfRows.value = ''
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
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
  onCloseAlert() {
    this.displayAlert = false
  }

}
