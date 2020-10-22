import { ProductsService } from './products.service';
import { Product } from './product.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  error=null;
  isLoading:boolean=false;
  products:Product[]=[];
  constructor(private productsService:ProductsService,private router:Router,
    private cartService:CartService) {
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
//onAddToCart
  onAddToCart(value){
    const index=value.innerHTML;
    console.log(this.products[index]);
    this.cartService.addProductToCart(this.products[index]);
    // console.log('Successfully Added');
    // this.router.navigate(['/cart']);
  }


}
