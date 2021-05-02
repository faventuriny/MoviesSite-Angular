import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-alert-new-cinema-created',
  templateUrl: './alert-new-cinema-created.component.html',
  styleUrls: ['../alert-style.css', './alert-new-cinema-created.component.css']
})
export class AlertNewCinemaCreatedComponent implements OnInit {

  @Input() errorMsg

  @Output() closeAlert: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  closeWindow() {
    this.closeAlert.emit("")
  }

}
