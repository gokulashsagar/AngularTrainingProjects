import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-super',
  templateUrl: './super.component.html',
  styleUrls: ['./super.component.styl']
})
export class SuperComponent implements OnInit {
  
  friends=["Guhan","Jagan","Ruba"];
  locations=[
    {city:"chennai", code:"055"},
    {city:"mumbai", code:"066"},
    {city:"Delhi", code:"068"}
  ];

  display:boolean=true;
  checkOne:boolean=true;


  onOff=function(){
    console.log("On/Off called");
    this.display=this.display? false:true;
  }
  checker=function(){
    console.log("On/Off called");
   this.checkOne=this.checkOne? false:true;
  }

  displayVariable=true;

  constructor() { }

  ngOnInit() {
  }

}
