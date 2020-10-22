import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product.model';
import { CartService } from './cart.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  subscription:Subscription;
  cart:Product[]=[];

  constructor(private cartService:CartService,private router:Router) {
    //Cart Array
    this.subscription=this.cartService.Cart.subscribe((cart)=>{
      this.cart=cart;
    });

  }

  ngOnInit(): void {

  }
  onAddToShip(){
    this.router.navigate(['/cart/ship']);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
