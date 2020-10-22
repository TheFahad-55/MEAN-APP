
import {Injectable} from '@angular/core' ;
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

const backendApi=environment.apiUrl+"/users/me";
@Injectable({
  providedIn: 'root'
})
export class MeService{
   headers = new HttpHeaders({'x-token':localStorage.getItem('token')});
  constructor(private httpClient:HttpClient){
  }

  getUser(){

   return this.httpClient.get<{_id:string,name:string,email:string,isAdmin?:boolean}>(backendApi,{
     headers:this.headers
   });
  }


}
