import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../service/product.service';

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})
export class DetailproductComponent implements OnInit {
id:any;
  constructor(private ac:ActivatedRoute, private p: ProductService ) { }
  ngOnInit(): void {
    this.p.mObs().subscribe();
this.id=this.ac.snapshot.params['id'];
//send request to backend to get  product by id
this.ac.params.subscribe(
  (test)=>{
    console.log(test)
  }
);
//console.log(test)
//console.log(this.id);
  }

}
