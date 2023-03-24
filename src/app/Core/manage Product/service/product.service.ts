import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  mObs(){
   
    return new Observable( ()=>{
      console.log('test')
    });
  }

  addProduct(data:any){
    //post insert
    //get select
    //put update
    //delete delete
 return this.http.post('http://localhost:3000/products',data);
  }
}
