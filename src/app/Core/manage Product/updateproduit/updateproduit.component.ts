import { Component, OnInit } from '@angular/core';
import { ProductService } from './../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-updateproduit',
  templateUrl: './updateproduit.component.html',
  styleUrls: ['./updateproduit.component.css']
})
export class UpdateproduitComponent implements OnInit {
id:any;
product =new Product();
  constructor(private p :ProductService,private ac:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.ac.snapshot.params['id'];
    this.p.detailProduct(this.id).subscribe(
      (d)=>{
this.product=d;
      }
    );
  }

  saveProduct(f: any) {
    this.p.updateProduct(f,this.id).subscribe(
()=>{
  //alert('updated')
  this.router.navigate(['list']);
}     
    );
  }
}
