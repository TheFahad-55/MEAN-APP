import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './users/users.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  cross:boolean=false;
  burger:boolean=true;
  constructor(private router:Router,private userService:UsersService) { }


  ngOnInit(): void {
    this.router.navigate(['/admin/products']);
  }
// open Sidebar
  onSidebar(){
    console.log('Hello');
    this.cross=true;
    this.userService.width.next(true);

      this.burger=false;

  }
//close Sidebar...abs
onCloseSidebar(){
  this.userService.close.next(false);
      this.cross=false;
      this.burger=true;
      console.log('Cross Works');
}


}
