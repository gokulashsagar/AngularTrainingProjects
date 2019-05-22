import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/service1.service';

@Component({
  selector: 'app-service1-consume',
  templateUrl: './service1-consume.component.html',
  styleUrls: ['./service1-consume.component.css']
})
export class Service1ConsumeComponent implements OnInit {

  constructor(private l:Service1Service) { }

  ngOnInit() {

    console.log("value  :"+this.l.a)  ;
    this.l.a=100 ;
    console.log("value2  :"+this.l.a)  ;
  }

}
