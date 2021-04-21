import { Component, OnInit, Input, Output } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-alert-cinema-deleted',
  templateUrl: './alert-cinema-deleted.component.html',
  styleUrls: ['../alert-style.css', './alert-cinema-deleted.component.css']
})
export class AlertCinemaDeletedComponent implements OnInit {

  @Input() display: boolean = false;
  @Input() errorMsg

  @Output() closeAlert = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  closeWindow() {
    this.closeAlert.emit("")
  }

}
