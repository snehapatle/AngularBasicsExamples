import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test5',
  // templateUrl: './test5.component.html',
  template:
  `
  <h1 style="color:red"> Style binding</h1>
  <h1 [style.color]="favColor"> Some Heading </h1>
  <h1 [style.color]="hasError ? 'red' : 'green'"> Other Heading </h1>
  <h1> ng Style</h1>
  <h1 [ngStyle]="customStyle"> Some Custom Style</h1>
  <br>
  <button (click)="onButtonClick()">Submit</button>
  <h1 [style]="customStyle" [class.d-none]="!hasError">This page has error. Please check with {{role}}</h1>
  `,
  // styleUrls: ['./test5.component.css']
  styles:[

  ]
})
export class Test5Component implements OnInit {

  favColor ="Yellow";
  hasError=false;

  customStyle={
    color:'red',
    fontSize:'60px'
  }

  role="administrator";
  onButtonClick(){
    this.hasError =true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
