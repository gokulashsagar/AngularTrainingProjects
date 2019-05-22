import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SportsService } from '../sports.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  
  @Output() nameUpdated = new EventEmitter()  
  count: any
  products: any=[]
  constructor( private productService : SportsService) { }    

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (data)=>{
        console.log(data)
       this.products= data  
      }
    )
    this.products.ca
    this.nameUpdated.emit(this.count)
    console.log(this.count)
  }
  
}
