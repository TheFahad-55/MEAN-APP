import { SignupService } from './signup.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  error:string=null;
  isLoading:boolean=false;
  message:string='';
  constructor(private signUpService: SignupService) { }

  ngOnInit(): void {
  }
  onAddUser(signupForm:NgForm):void {
    this.isLoading=true;
   this.signUpService.singnupUser(signupForm.value.name,signupForm.value.email,signupForm.value.password)
   .subscribe((response)=>{
    this.isLoading=false;
     this.message=response.message;

   },err=>{
     console.log(err);
     this.error=err.error;
     this.isLoading=false;
   });


  }

  onRemoveError(){
    this.error=null;
  }

}
