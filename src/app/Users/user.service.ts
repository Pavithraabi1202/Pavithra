import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  LoadUsers() {
    throw new Error('Method not implemented.');
  }
  apiurl='https://dummyjson.com/users'
 
  constructor(private http: HttpClient) { }
  Userproducts(): Observable<any> {
    return this.http.get(this.apiurl);
  }

}
