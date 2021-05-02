import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert-cinema-deleted',
  templateUrl: './alert-cinema-deleted.component.html',
  styleUrls: ['../alert-style.css', './alert-cinema-deleted.component.css']
})
export class AlertCinemaDeletedComponent implements OnInit {

  @Input() display: boolean = false;
  @Input() errorMsg

  @Output() closeAlert: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  closeWindow() {
    this.closeAlert.emit("")
  }

}
