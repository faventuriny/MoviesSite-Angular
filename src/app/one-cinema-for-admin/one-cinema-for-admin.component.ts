import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { CinemasService } from '../cinemas.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Cinema } from '../cinema';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-one-cinema-for-admin',
  templateUrl: './one-cinema-for-admin.component.html',
  styleUrls: ['../shard/panel.css', '../admin/admin.component.css', './one-cinema-for-admin.component.css']
})
export class OneCinemaForAdminComponent implements OnInit {

  constructor(private cinemaServis: CinemasService) { }

  form: FormGroup
  @Input() cinema: Cinema
  defaultPic = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5DvwDQtYeXQ7e3eQcz9kC_23Qmw8cF7BJ_UP3CD1xEj_cM1Im2MB3Jmvm9dDF3AwizrA&usqp=CAU'

  displayAlertSave = false;
  displayAlertDelete = false;
  displayAlertDeleteQuestion = false
  error = null
  deleteID = null

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(this.cinema._id),
      movieName: new FormControl(this.cinema.movieName, Validators.maxLength(30)),
      movieHour: new FormControl(this.cinema.movieHour, Validators.pattern('^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$')),
      moviePic: new FormControl(this.cinema.moviePic),
      releaseDate: new FormControl(this.cinema.releaseDate),
      cinema: new FormControl(this.cinema.cinema, Validators.pattern('^[0-9]+$')),
      numOfSeats: new FormControl(this.cinema.numOfSeats, Validators.compose([Validators.pattern('^[0-9]+$'), Validators.minLength(1)])),
      numOfRows: new FormControl(this.cinema.numOfRows, Validators.compose([Validators.pattern('^[0-9]+$'), Validators.minLength(1)])),
    })
  }

  onSubmit() {
    this.cinemaServis.updateCinema(this.form.value.id, this.form.value).pipe(take(1)).subscribe(data => {
      console.log('server respons data:', data);
      this.displayAlertSave = true
      console.log("displayAlertSave:", this.displayAlertSave);

    }, error => {
      this.error = error.message
      this.displayAlertSave = true
    })
  }

  shouldDelet(id: string) {
    this.deleteID = id
    this.displayAlertDeleteQuestion = true;
    console.log("this.displayAlertDeleteQuestion", this.displayAlertDeleteQuestion);
  }

  onDelete() {
    this.cinemaServis.deleteCinema(this.deleteID).pipe(take(1)).subscribe(data => {
      this.displayAlertDeleteQuestion = false
      this.displayAlertDelete = true
    }, error => {
      this.error = error.message
      this.displayAlertDeleteQuestion = false
      this.displayAlertDelete = true
    })

  }

  onCloseAlert() {
    this.displayAlertSave = false

    this.displayAlertDeleteQuestion = false
    this.error = null

  }
  onCloseAlertCinemaDeleted() {
    this.displayAlertDelete = false
    this.error = null
    this.deleteID = null
    window.location.reload();
  }

}
