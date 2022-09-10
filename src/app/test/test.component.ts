import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  // templateUrl: './test.component.html',
  template:`

  <h1> Welcome {{ 'Interpolation examples - from compomemt to template' }} </h1>
  <h1> Welcome {{ name.toUpperCase() }} </h1>
  <h1> Welcome {{ name.length }} </h1>
  <h2> {{ getFullName('sneha') }} </h2>
  <h2> {{ sayHello()}} </h2>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "SnehaP";

  constructor() { }

  ngOnInit(): void {
  }

   getFullName=(name:string)=> "Hello" + name+'Patle';
   sayHello(){
    return 'Hello' + this.name;
   }
}
