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
    texto: 'Not Defined',
    fecha: 'Not Defined',
    cantidad: 'Not Defined'
  };
  history = [];
  submit = false;
  print = false;

  paramsFormCreate(event){
    this.formConfig[event.target.value] = event.target.checked;
  }

  createForm(e){
    if ( $('.form-check-input:checked').length === 0){
      alert('Seleccione al menos un componente para el formulario');
      return;
    }
    this.submit = true;
    $(e.target).addClass('unableBtn');
    $('.form-check-inline').addClass('unableBtn');
  }
  undo(e){
    this.submit = false;
    if ( this.print ) { this.print = false; }
    $('.form-check-inline').removeClass('unableBtn');
    $('#submitBtn').removeClass('unableBtn');
    $('.form-check-input').prop('checked', false);
    this.newVal = {
      texto: 'Not Defined',
      fecha: 'Not Defined',
      cantidad: 'Not Defined'
    };
  }

  presetValues(e, field){
    console.log(e);
    e = field === 'texto' ? decodeURI(e) : e;
    console.log(e);
    this.newVal[field] = e;
  }

  send(){
    const c = new Date();
    if ( $('#textForm').val() === '' ){
      alert('Campo de texto vacio \nIngrese el texto o considere una estructura de formulario sin este componente');
      return;
    }
    this.history.push({
      id: Number('' + c.getFullYear() + c.getDate() + c.getMonth() + c.getHours()  + c.getMinutes() + c.getSeconds() + c.getMilliseconds()),
      format: this.newVal
    });
    this.print = true;
    this.formConfig = {
      text: false,
      date: false,
      range: false
    };
    console.log($('#undoBtn').text('Refresh'));
  }
}

