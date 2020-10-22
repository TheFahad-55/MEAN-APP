import { Product } from './../products/product.model';
import {Injectable} from '@angular/core'
import { BehaviorSubject, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ShipService } from './ship/ship.service';

@Injectable({
  providedIn: 'root'
})

export class CartService{
  subscription:Subscription;
  constructor(private http: HttpClient,private shipService: ShipService){
    this.subscription=this.shipService.reset.subscribe((number)=>{
      this.amount=0;
      this.cart=[];

    });

  }
  cart:Product[]=[];
  Cart=new BehaviorSubject([]);
  amount:number=0;
  total=new BehaviorSubject(this.amount);

  addProductToCart(product:Product){
    this.cart.push(product);
    console.log(product);
    this.Cart.next(this.cart);
    if(this.cart.length<1){
      this.amount=0;
    }
    else {
      this.total.next(this.amount=this.amount+1);
    }
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }



}
