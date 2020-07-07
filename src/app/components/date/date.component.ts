import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styles: [
    '.dateInput{ width: 75%; margin-left:5% }',
    '.datePopup{ width: 10%; display: inline-block }',
  ],
})
export class DateComponent implements OnInit {
  display = false;
  datePicked = null;

  @Output() dateChanged: EventEmitter<Date>;


  constructor() {
    this.dateChanged = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onDate(e){
    this.dateChanged.emit(e.value);
  }

}
