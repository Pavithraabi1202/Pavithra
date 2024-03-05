import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiurl='https://dummyjson.com/products'


  constructor(private http: HttpClient) { }
  Loadproducts(): Observable<any> {
    return this.http.get(this.apiurl);
  }
}
