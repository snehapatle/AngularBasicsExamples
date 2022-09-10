import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  // templateUrl: './test2.component.html',
  template:`
  <h1> Event Handling - from template to compomemt</h1>
  <button (click)="onClickHandler()"> Button </button>
  <br> 
  <h1>{{ name }} </h1>
  <button (click)="onLogin()">Login</button>

  <br>
  <input type="text" name="my-input" id="id1" #mytextref/>
  <button (click)="onSend(mytextref)">Send</button>

  <br>
  <textarea rows="10" cols="30" #mytxtarea (keypress)="getCnt(mytxtarea.value)"></textarea>
  {{ cnttxt.length }}
  `,
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  constructor() { }

  name ='Welcome Guest';
  cnttxt='';
  onClickHandler(){
    console.log("ss");
  }
  ngOnInit(): void {
  }

  onLogin(){
    this.name="Welcome Sneha";
  }
  onSend(mytextref: any)
  {
    this.name = "Welcome " + mytextref.value;
  }

  getCnt(value:any){
    this.cnttxt = value;
  }

}
