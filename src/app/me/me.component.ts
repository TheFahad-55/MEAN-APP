import { MeService } from './me.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {
  constructor(private meService:MeService) { }
  admin:boolean = false;
  user:{
    name:string,email:string
  };
  err=null;



  ngOnInit(): void {
    this.meService.getUser().subscribe((user)=>{
      this.user={
        name:user.name,
        email:user.email
      };
      if(user.isAdmin){
        this.admin=true;
      }

    },err=>{
      this.err=err.error;

    })
  }

}
