import { Component, OnInit } from '@angular/core';
import { SportsService } from '../sports.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor( private productService : SportsService) { }

  count: any
  products: any=[]
  category: any=[]
  
  ngOnInit() {
    this.productService.getProducts().subscribe(
      (data)=>{
        console.log("Service data: "+data)
       this.products= data 
       this.products.forEach(function (value) {
       this.category.push(value.category)
      }
    )
   }
   )
  }

}
