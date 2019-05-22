import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuilt-pipe',
  templateUrl: './inbuilt-pipe.component.html',
  styleUrls: ['./inbuilt-pipe.component.css']
})
export class InbuiltPipeComponent implements OnInit {

  money=100;
  location = "Chennai";
  birthday = new Date(); 
  constructor() { }

  ngOnInit() {
  }

}
