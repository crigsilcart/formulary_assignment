import { Component, OnInit, Input } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html'
})
export class HistoryComponent implements OnInit {

  @Input() historyArray = [];
  constructor() { }

  ngOnInit(): void {
  }

}
