import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  // templateUrl: './test1.component.html',
  template:`
  <h1> Property binding - from component to template</h1>
  <img src="https://th.bing.com/th/id/R.4aa108082e7d3cbd55add79f84612aaa?rik=I4dbPhSe%2fbHHSg&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-google-logo-2015brandlogobrand-logoiconssymbolslogosgoogle-6815229372333mqrr.png&ehk=ewmaCOvP0Ji4QViEJnxSdlrYUrTSTWhi8nZ9XdyCgAI%3d&risl=&pid=ImgRaw&r=0" width="150"/> <br/>
  <img [src]="image" width="150"/><br/>
  <img src= {{image}} width="150"/><br/>
  
  <button disabled = "{{ isDisabled }}" >Button - iNterpolation </button>
  <button [disabled] = "isDisabled"> Button -Propety binding </button>


  `,
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
public image ="https://th.bing.com/th/id/R.4aa108082e7d3cbd55add79f84612aaa?rik=I4dbPhSe%2fbHHSg&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-google-logo-2015brandlogobrand-logoiconssymbolslogosgoogle-6815229372333mqrr.png&ehk=ewmaCOvP0Ji4QViEJnxSdlrYUrTSTWhi8nZ9XdyCgAI%3d&risl=&pid=ImgRaw&r=0";
public isDisabled =false;

  constructor() { }

  ngOnInit(): void {
  }

}
