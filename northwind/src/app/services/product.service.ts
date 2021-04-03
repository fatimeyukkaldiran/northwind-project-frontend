import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';
import { ListResponseModel } from '../models/responses/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiURL = environment.apiUrl
  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<ListResponseModel<Product>> {
    let newPath = this.apiURL + "products/getall"
    return this.httpClient.get<ListResponseModel<Product>>(newPath)

  }
  getProductsByCategory(categoryId: number): Observable<ListResponseModel<Product>> {
    let newPath = this.apiURL + "products/getbycategory?categoryId=" + categoryId
    return this.httpClient.get<ListResponseModel<Product>>(newPath)

  }
}
