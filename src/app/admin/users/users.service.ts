
import {Injectable} from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { User } from './user.model';
import {environment} from '../../../environments/environment';

const backendApi=environment.apiUrl+"/users";
@Injectable({
  providedIn: 'root'
})

export class UsersService {

  isLoading=new BehaviorSubject(false);
  Users=new BehaviorSubject([]);
  width=new BehaviorSubject<boolean>(false);
  close=new BehaviorSubject<boolean>(false);

  users:User[]=[];
  headers = new HttpHeaders({'x-token':localStorage.getItem('token')});
  constructor(private httpClient: HttpClient){}



  getAllusers(){
    this.isLoading.next(true);
   this.httpClient.get<User[]>(backendApi,{
     headers:this.headers
   }).subscribe((users)=>{
     this.isLoading.next(false);
    this.users=users;
    this.Users.next(users);
  },err=>{
    this.isLoading.next(false);
    console.log(err);
  });
  }


}
