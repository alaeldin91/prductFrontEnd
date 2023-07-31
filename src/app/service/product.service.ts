import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductListResponse } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl;
  constructor(private HttpClient:HttpClient) {
    this.baseUrl = "http://localhost:8000/api";
   }

   public getProducts(){
    const productsUrl = `${this.baseUrl}/products`;
    return this.HttpClient.get<ProductListResponse>(productsUrl);
  }

  public deleteProduct(id:number){
    const deleteUrl = `${this.baseUrl}/delete/${id}`;
    return this.HttpClient.get(deleteUrl);

  }
}
