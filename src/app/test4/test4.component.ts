import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test4',
  // templateUrl: './test4.component.html',
  template:
  `
  <h1 class="text-success"> Class Binding </h1>
  <h1 [class]="onDanger"> Heading </h1>
  <h1 [class.text-danger]="hasError"> Some heading </h1>
  <br>
  <input type="text" class="form-control" [class.is-invalid]="hasError"/>
  <small class="text-danger" [class.d-none]="!hasError">*This is required</small>
  <br>
  <h1 [ngClass]="customStyle">Custom Style - for class </h1>
  `,
  // styleUrls: ['./test4.component.css']
  styles:[
  `
  .text-success{
    color:green
  }

  .text-danger{
    color:red
  }

  .text-special{
    font-style:italic
  }

  `]
})
export class Test4Component implements OnInit {

  onDanger ="text-danger";
  hasError=false;
  isSpecial=true;

  customStyle={
    'text-danger':this.hasError,
    'text-success':!this.hasError,
    'text-special': this.isSpecial  
  }

  constructor() { }

  ngOnInit(): void {
  }

}
