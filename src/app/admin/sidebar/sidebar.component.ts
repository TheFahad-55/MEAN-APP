import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UsersService } from '../users/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor(private usersService:UsersService) {

  }
  name:string='';
  subscription:Subscription;
  @ViewChild('sidebar') side:ElementRef;
  allow:boolean=false;

  ngOnInit(): void {
    this.name=localStorage.getItem('user');
    //Sidebar Open...
   this.subscription= this.usersService.width.subscribe((bool)=>{
      if(bool){
         this.side.nativeElement.style.left="0";
         this.allow=true;
      }
    });
    //Sidebar  cLOSE/................
    this.subscription=this.usersService.close.subscribe((bool)=>{
      if(!bool){
      document.getElementById('sidebar').style.left="-500px";
      }


    });

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
