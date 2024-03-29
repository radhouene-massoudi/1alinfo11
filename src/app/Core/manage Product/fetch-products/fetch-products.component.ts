import { Component, OnInit } from '@angular/core';
import { ProductService } from './../service/product.service';

@Component({
  selector: 'app-fetch-products',
  templateUrl: './fetch-products.component.html',
  styleUrls: ['./fetch-products.component.css']
})
export class FetchProductsComponent implements OnInit {
  listProdcut:any;
  /*listProdcut=[
    {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
    {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
    {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ];
    */
    constructor(private p:ProductService) { }

  ngOnInit(): void {
    this.p.fetchproducts().subscribe(
      (data)=>{
      this.listProdcut=data  
      }
    );
    
  }

}
