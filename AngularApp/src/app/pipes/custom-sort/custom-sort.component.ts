import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-sort',
  templateUrl: './custom-sort.component.html',
  styleUrls: ['./custom-sort.component.css']
})
export class CustomSortComponent implements OnInit {

  friends : ["Me","You","All"];
  numbers : [1,2,3,4]
  constructor() { }  

  ngOnInit() {
  }

}
