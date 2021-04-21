import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert-changes-saved',
  templateUrl: './alert-changes-saved.component.html',
  styleUrls: ['../alert-style.css', './alert-changes-saved.component.css']
})
export class AlertChangesSavedComponent implements OnInit {

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
