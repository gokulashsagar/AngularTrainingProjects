import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  task = []
 
  addToDoForm=function(something){
    console.log(something.value.todo)  
    this.task.push(something.value.todo)  
    this.todo="";  

  }
  constructor() { }

  ngOnInit() {
  }

}
