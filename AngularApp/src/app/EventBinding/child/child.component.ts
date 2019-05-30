import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
   
  @Input() sendName
  @Output() nameUpdated = new EventEmitter()

  constructor() { }

  updateName=function(){
  this.nameUpdated.emit(this.sendName)
  console.log(this.sendName)
  }
  ngOnInit() {
  }

}
