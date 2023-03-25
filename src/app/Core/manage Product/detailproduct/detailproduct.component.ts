import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../service/product.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})
export class DetailproductComponent implements OnInit {
  id: any;
  detailOfProduct = new Product;
  constructor(private ac: ActivatedRoute, private p: ProductService) { }
  ngOnInit(): void {
    //this.p.mObs().subscribe();
    this.id = this.ac.snapshot.params['id'];
    this.p.detailProduct(this.id).subscribe(
      (data) => {
     
        this.detailOfProduct=data;
        console.log(this.detailOfProduct);
      }
    );
    //send request to backend to get  product by id
    this.ac.params.subscribe(
      (test) => {
        console.log(test)
      }
    );
    //console.log(test)
    //console.log(this.id);
  }

}
