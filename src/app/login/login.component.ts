import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error:string=null;
  isLoading:boolean=false;
  message:string='';
  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  }
  onLogin(loginForm:NgForm){
    this.isLoading=true;
  this.loginService.authenticateUser(loginForm.value.email,loginForm.value.password)
  .subscribe((response)=>{
    this.isLoading=false;
    localStorage.setItem('token',response.token);
    localStorage.setItem('user',response.user.name);
    this.loginService.loggedIn.next(true);
    console.log(response);
    if(response.user.isAdmin){
      localStorage.setItem('admin','true');

      this.router.navigate(['/admin']);
    }
    else {
    this.router.navigate(['products']);
    }




  },err=>{
    this.isLoading=false;
    console.log(err);
    this.error=err.error;
  });
  }
  onRemoveError(){
    this.error=null;
  }

}
