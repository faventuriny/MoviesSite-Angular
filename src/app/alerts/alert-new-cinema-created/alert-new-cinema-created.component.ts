import { Component, OnInit, Input, Output } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-alert-new-cinema-created',
  templateUrl: './alert-new-cinema-created.component.html',
  styleUrls: ['../alert-style.css', './alert-new-cinema-created.component.css']
})
export class AlertNewCinemaCreatedComponent implements OnInit {

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
