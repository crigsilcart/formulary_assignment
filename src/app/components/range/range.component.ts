import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styles: [
    '.mat-slider-horizontal{ width: 90% }'
  ]
})
export class RangeComponent implements OnInit {
  sliderVal = '5';

  @Output() rangeChanged: EventEmitter<string>;

  constructor() {
    this.rangeChanged = new EventEmitter();
  }

  ngOnInit(): void {
    this.rangeChanged.emit(this.sliderVal);
  }

  onInputChange(event: MatSliderChange){
    this.sliderVal = event.value.toString();
    this.rangeChanged.emit(this.sliderVal);
  }

}
