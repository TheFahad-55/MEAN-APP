import {Injectable} from '@angular/core' ;
import {HttpClient} from '@angular/common/http';
import { User } from './user.model';
import {  Subject, BehaviorSubject } from 'rxjs';
import {environment} from '../../environments/environment';

const backendApi=environment.apiUrl+"/auth";
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  token=localStorage.getItem('token');
  loggedIn;
constructor(private httpClient: HttpClient){
  if(this.token){
    this.loggedIn=new BehaviorSubject(true);
  }
  else {
    this.loggedIn=new BehaviorSubject(false);
  }

}
  authenticateUser(email:string,password:string){
 return this.httpClient.post<{user:User,token:string}>(backendApi,{
      email:email,
      password:password
    });
  }



}
