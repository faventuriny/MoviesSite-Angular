import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cinema } from '../cinema';
import { Router } from '@angular/router';

@Component({
  selector: 'app-one-cinema-for-panel',
  templateUrl: './one-cinema-for-panel.component.html',
  styleUrls: ['../shard/panel.css', './one-cinema-for-panel.component.css']
})
export class OneCinemaForPanelComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() cinema: Cinema
  // @Output() newIdEvent = new EventEmitter<String>()

  ngOnInit(): void {
  }
  onClick() {
    // this.newIdEvent.emit(this.cinema._id)
    sessionStorage.setItem('movieId', <string>this.cinema._id)
    this.router.navigateByUrl('/seats-selection')
  }

}
