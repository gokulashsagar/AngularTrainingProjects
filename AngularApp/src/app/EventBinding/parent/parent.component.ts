import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
 
  name= "Angular";
  constructor() { }
  
  getNameUpdate=function(e){
    
    this.name=e
    
  }
  ngOnInit() {
  }

}
