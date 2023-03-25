import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ProductService } from './../service/product.service';

@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css']
})
export class AddproduitComponent implements OnInit {

  constructor(private s: ProductService, private router: Router) { }

  ngOnInit(): void {
    // this.s.addProduct().subscribe();
  }

  showForm(t: any) {
    console.log(t)
  }
  saveProduct(f: any) {
    this.s.addProduct(f).subscribe(
      //next succes 
      () => {
this.router.navigate(['list'])
      },
      //errors 
      (errors)=>{
        
        //status 401
        //console.log(errors)
        this.router.navigate(['login'])
      },
      //complet
      ()=>{
alert('1alinfo11')
      }

    );
  }
}
