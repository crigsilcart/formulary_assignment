import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styles: [
  ]
})
export class PrintComponent implements OnInit {

  @Input() form = {};
  constructor() {
  }

  ngOnInit(): void {
  }

}
