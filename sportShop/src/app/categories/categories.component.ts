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
  category: any=[]
  size: number
  constructor( private productService : SportsService) { }    

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (data)=>{
        console.log("Service data: "+data)
       this.products= data 
       this.size=this.products.length
       this.products.forEach((value)=>{
       this.category.push(value.category)
       console.log("category: "+value.category)
      }
    )
   }
   )
  }
    
    // this.products.ca
    // this.nameUpdated.emit(this.count)
    // console.log(this.count)
    // var grouped = _.mapValues(_.groupBy(this.products, 'category'),
    //                       clist => clist.map(car => _.omit(car, 'category')));
    // console.log(grouped);

  
  
}
