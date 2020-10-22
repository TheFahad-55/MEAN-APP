import { CartService } from './../cart/cart.service';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  login:boolean=false;
  subscription:Subscription;
  name:string='';
  total:number=0;
  admin:boolean=false;
  constructor(private loginService:LoginService,private cartService:CartService) {
    //login Stuff..
    this.subscription= this.loginService.loggedIn.subscribe((bool)=>{
      if(bool){
      console.log('Yes I.m In This Stuff');
        this.login=bool;
      }

    },err=>{
      console.log(err);
    });
//Cart Total Amount........
   this.subscription= this.cartService.total.subscribe((num)=>{
      this.total=num;
      console.log(num);

    });

  }

  ngOnInit(): void {
    const userName=localStorage.getItem('user');
    if(userName){
      this.name=userName;
    }

     //For Admin....
    if(localStorage.getItem('admin')){
      this.admin=true;
    }


  }
  ngOnDestroy(): void {
  this.subscription.unsubscribe();

  }

}
