import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

declare var $: any;

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

  @Output() dateChanged: EventEmitter<string>;

  constructor() {
    this.dateChanged = new EventEmitter();
  }

  ngOnInit(): void {
    // const today = ;
    const today = new Date();
    $('#dateInput').val(today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear());
    this.dateChanged.emit(new Intl.DateTimeFormat('eng-GB').format(today));
  }

  onDate(e){
    console.log(e.value === null);
    this.dateChanged.emit(new Intl.DateTimeFormat('eng-GB').format(e.value));
  }

}
