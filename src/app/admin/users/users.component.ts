import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/login/user.model';
import { UsersService } from './users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  error=null;
  isLoading:boolean=false;
  users:User[]=[];
  constructor(private usersService:UsersService,private router:Router) {
    //isLoading....
    this.usersService.isLoading.subscribe((bool)=>{
      this.isLoading=bool;
    });
    this.usersService.getAllusers();
   }
  ngOnInit(): void {
    //Get All Users..
    this.usersService.Users.subscribe((users)=>{
      this.users=users;
    });

  }

}
