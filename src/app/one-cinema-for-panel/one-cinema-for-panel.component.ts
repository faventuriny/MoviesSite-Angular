import { Component, OnInit, Input } from '@angular/core';
import { Cinema } from '../cinema';

@Component({
  selector: 'app-one-cinema-for-panel',
  templateUrl: './one-cinema-for-panel.component.html',
  styleUrls: ['../shard/panel.css', './one-cinema-for-panel.component.css']
})
export class OneCinemaForPanelComponent implements OnInit {

  constructor() { }

  @Input() cinema: Cinema

  ngOnInit(): void {
  }

}
