import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { CinemasService } from '../cinemas.service';

@Component({
  selector: 'app-admin-new-cinema',
  templateUrl: './admin-new-cinema.component.html',
  styleUrls: ['../admin/admin.component.css', './admin-new-cinema.component.css']
})
export class AdminNewCinemaComponent implements OnInit {

  form: FormGroup = new FormGroup({
    movieName: new FormControl('', Validators.compose([Validators.maxLength(30), Validators.required])),
    movieHour: new FormControl('', Validators.compose([Validators.pattern('^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$'), Validators.required])),
    moviePic: new FormControl('', Validators.required),
    cinema: new FormControl('', Validators.compose([Validators.pattern('^[0-9]+$')])),
    numbersOfSeats: new FormControl('', Validators.compose([Validators.pattern('^[0-9]+$'), Validators.minLength(1), Validators.required])),
    numbersOfRows: new FormControl('', Validators.compose([Validators.pattern('^[0-9]+$'), Validators.minLength(1), Validators.required]))
  })

  displayAlert = false;

  constructor(private cinemaService: CinemasService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.cinemaService.CreateAndStoreCinema(this.form.value)
    this.displayAlert = true
    // this.form.reset()
  }
  onCancel() {
    window.location.reload()
  }
  onResetForm() {
    this.form.reset()
  }
}
