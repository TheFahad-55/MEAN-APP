import { Product } from './../../products/product.model';

import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';

const backendApi=environment.apiUrl+"/products";

@Injectable({
  providedIn: 'root'
})

export class ProductsService{

isLoading=new BehaviorSubject(false);
  prods=new BehaviorSubject([]);

  products:Product[]=[];
  constructor(private httpClient: HttpClient){}

  getAllProducts(){
    this.isLoading.next(true);
   this.httpClient.get<Product[]>(backendApi).subscribe((products)=>{
     this.isLoading.next(false);
    this.products=products;
    this.prods.next(products);
  },err=>{
    this.isLoading.next(false);
    console.log(err);
  });
  return this.products;
  }


}
