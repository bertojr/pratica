import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iJsonContent } from './models/json-content';
import { Observable } from 'rxjs';
import { iProduct } from './models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl: string = 'https://dummyjson.com/products';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<iJsonContent> {
    return this.http.get<iJsonContent>(this.apiUrl);
  }
}
