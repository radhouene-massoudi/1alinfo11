import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-removeproduct',
  templateUrl: './removeproduct.component.html',
  styleUrls: ['./removeproduct.component.css']
})
export class RemoveproductComponent implements OnInit {
id:any;

  constructor(private  p:ProductService,
    private ac:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.id=this.ac.snapshot.params['id'];
    this.p.deleteProduct(this.id).subscribe(
      ()=>{
       this.router.navigate(['list'])
      }
    );
  }

}
