import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
test="1 alinfo11 esprit"
  kolor="red";

  //src from database
  listProdcut=[
    {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
    {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
    {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0}, 
  ];
constructor() {
    console.log('cons')
   }

 
   ngOnInit() {
    console.log('ngoninit')
    //
  }
  changeColor(){
    this.kolor='blue'
  }
  twoway(k:any){
this.kolor=k;
  }
}
