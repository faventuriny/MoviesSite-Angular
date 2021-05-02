import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert-cinema-delete-quastion',
  templateUrl: './alert-cinema-delete-quastion.component.html',
  styleUrls: ['../alert-style.css', './alert-cinema-delete-quastion.component.css']
})
export class AlertCinemaDeleteQuastionComponent implements OnInit {


  @Output() closeAlert: EventEmitter<any> = new EventEmitter()
  @Output() deleteMovie: EventEmitter<any> = new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }
  closeWindowEvent() {
    this.closeAlert.emit("")
  }
  deleteMovieEvent() {
    this.deleteMovie.emit("")
  }


}
