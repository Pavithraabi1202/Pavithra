import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  LoadRecipes() {
    throw new Error('Method not implemented.');
  }
  apiurl='https://dummyjson.com/Recipes/'
 
  constructor(private http: HttpClient) { }
  Recipeproducts(): Observable<any> {
    return this.http.get(this.apiurl);
  }
}
