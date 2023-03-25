import { Injectable } from '@angular/core';
import { ProductService } from './Core/manage Product/service/product.service';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private t: ProductService) { }
  
  showMsg(){
   console.log('romdankom mabrouk') 
   
  }
}
