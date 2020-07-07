import { Component } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formCreator';
  formConfig = {
    text: false,
    date: false,
    range: false
  };
  newVal = {
    texto: '',
    fecha: '',
    cantidad: ''
  };
  submit = false;

  paramsFormCreate(event){
    this.formConfig[event.target.value] = event.target.checked;
  }

  createForm(e){
    this.submit = true;
    $(e.target).addClass('unableBtn');
    $('.form-check-inline').addClass('unableBtn');
  }
  undo(e){
    this.submit = false;
    $('.form-check-inline').removeClass('unableBtn');
    $('#submitBtn').removeClass('unableBtn');
  }

  presetValues(e, field){
    this.newVal[field] = e;
  }

  send(){
    console.log(this.newVal);
  }

}

