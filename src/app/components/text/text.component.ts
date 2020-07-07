import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styles: [
  ]
})
export class TextComponent implements OnInit {

  @Output() textChanged: EventEmitter<string>;
  constructor() { 
    this.textChanged = new EventEmitter();
  }

  ngOnInit(): void {
  }

  valuechange(e){
    this.textChanged.emit(e.target.value);
  }
}
