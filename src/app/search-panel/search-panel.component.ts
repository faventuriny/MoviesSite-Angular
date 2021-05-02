import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent implements OnInit {

  @Output() newReleaseDateEvent = new EventEmitter<string>()
  @Output() newScreeningTimeEvent = new EventEmitter<string>()
  @Output() newNameEvent = new EventEmitter<string>()

  @Output() newInputEvent = new EventEmitter<string>()


  constructor() { }

  ngOnInit(): void {
  }
  onChangeSelect(eventValue: string) {
    console.log('eventValue', eventValue);

    switch (eventValue) {
      case "releaseDate": this.newReleaseDateEvent.emit('');
        break;
      case "screeningTime": this.newScreeningTimeEvent.emit('')
        break;
      case "name": this.newNameEvent.emit('')
        break;
    }
  }
  onChangeInput(eventValue: string) {
    this.newInputEvent.emit(eventValue)
  }



}
