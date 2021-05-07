import { Component, OnInit, Input } from '@angular/core';
import { Cinema } from 'src/app/cinema';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-seat-selection-do-select',
  templateUrl: './seat-selection-do-select.component.html',
  styleUrls: ['./seat-selection-do-select.component.css']
})
export class SeatSelectionDoSelectComponent implements OnInit {
  @Input() cinema: Cinema
  seatArrays
  form: FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.seatArrays = this.cinema.availableSeats
    let objForFbGroup = this.createControlsObject()
    this.form = this.fb.group(objForFbGroup)
  }
  createControlsObject() {
    let obj = {}
    for (let row = 0; row < this.cinema.numOfRows; row++) {
      for (let seat = 0; seat < (this.cinema.numOfSeats / this.cinema.numOfRows); seat++) {
        if (this.cinema.availableSeats[row][seat] === true) {
          obj['' + row + seat] = new FormControl({ value: this.cinema.availableSeats[row][seat], disabled: true })
        } else {
          obj['' + row + seat] = new FormControl(this.cinema.availableSeats[row][seat])
        }
      }
    }
    return obj
  }
  onSubmit(formValue) {
    console.log('this.form.value', formValue);
    console.log("this.form.get('00')"), formValue['00'].value;



    // let totalSeatsAvailabilityArray
    // totalSeatsAvailabilityArray = Object.values(formValue)
    // console.log('totalSeatsAvailabilityArray', totalSeatsAvailabilityArray);

    let obj = Object.entries(formValue)
    console.log('obj', obj);

  }

}
