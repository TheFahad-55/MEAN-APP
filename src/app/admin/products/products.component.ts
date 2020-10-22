import { ProductsService } from './../../products/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class AdminProductsComponent implements OnInit {
  error=null;
  isLoading:boolean=false;
  products:Product[]=[];
  constructor(private productsService:ProductsService,private router:Router) {
    //isLoading....
    this.productsService.isLoading.subscribe((bool)=>{
      this.isLoading=bool;
    });
    this.productsService.getAllProducts();
   }
  ngOnInit(): void {
    //Get All Products..
    this.productsService.prods.subscribe((prods)=>{
      this.products=prods;
    });

  }

}
