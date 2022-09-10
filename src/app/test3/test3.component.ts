import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-test3',
  // templateUrl: './test3.component.html',
  template:
  `
  <h1> Two way data binding </h1>
  <h1> {{name}} </h1>
  <input type="text" [(ngModel)]="name" />
  `,
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {

  name='sneha';
  constructor() { }

  ngOnInit(): void {
  }

}
