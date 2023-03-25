import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  mObs() {

    return new Observable(() => {
      console.log('test')
    });
  }

  addProduct(data: any) {
    //post insert
    //get select
    //put update
    //delete delete
    return this.http.post('http://localhost:3000/products', data);
  }
  fetchproducts() {
    return this.http.get('http://localhost:3000/products')
  }
  detailProduct(id: number): Observable<Product> {
    return this.http.get<Product>('http://localhost:3000/products/' + id)
  }
  deleteProduct(id:number){
return this.http.delete('http://localhost:3000/products/' + id)
  }
  updateProduct(data:any,id:any){
return this.http.put('http://localhost:3000/products/'+id,data)
  }
}
