import { Component, OnInit } from '@angular/core';
import { ProductService } from './../service/product.service';

@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css']
})
export class AddproduitComponent implements OnInit {

  constructor(private s:ProductService) { }

  ngOnInit(): void {
   // this.s.addProduct().subscribe();
  }

  showForm(t:any){
    console.log(t)
  }
  saveProduct(f:any){
    this.s.addProduct(f).subscribe();
  }
}
