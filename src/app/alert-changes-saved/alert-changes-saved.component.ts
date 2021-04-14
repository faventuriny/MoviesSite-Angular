import { Component, OnInit, Input, Output } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-alert-changes-saved',
  templateUrl: './alert-changes-saved.component.html',
  styleUrls: ['./alert-changes-saved.component.css']
})
export class AlertChangesSavedComponent implements OnInit {

  @Input() display: boolean
  // @Output() eventResetForm = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  closeWindow() {
    this.display = false
    // this.eventResetForm.emit("ok")
  }
}
