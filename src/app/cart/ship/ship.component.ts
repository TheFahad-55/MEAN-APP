import { ShipService } from './ship.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss']
})
export class ShipComponent implements OnInit {

  constructor(private router: Router,private cartService: CartService,private shipService: ShipService) { }

  ngOnInit(): void {
  }
  onShipment(){
    this.cartService.Cart.next([]);
    this.cartService.total.next(0);
    this.shipService.reset.next(0);
    this.router.navigate(['/products']);



  }

}
