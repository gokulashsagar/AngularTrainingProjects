import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  
  simpleForm:any

  constructor() { }

  saveData=function(something){
      console.log(something.lname,something.fname);
  }

  ngOnInit() {
    this.simpleForm =new FormGroup({
      fname : new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(6) , 
        Validators.pattern('^[a-zA-Z]+$') 
      ])),  
      lname : new FormControl("",this.myCustomLengthValidator),
      hobby : new FormControl()
    })
  }

  myCustomLengthValidator=function(control){
     console.log("Control Instance :"+control)
     if(control.value.length < 6){
       return {'lname': true}   
     }
  }

}
