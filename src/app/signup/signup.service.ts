
import {Injectable} from '@angular/core' ;
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

const backendApi=environment.apiUrl+"/users";
@Injectable({
  providedIn: 'root'
})


export class SignupService{
  constructor(private httpClient:HttpClient){}
  ngOnInit(): void {
  }

  singnupUser(name:string,email:string,password:string){
   return this.httpClient.post<{user:{name:string,email:string},message:string}>(backendApi,{
      name:name,
      email:email,
      password:password
    });

  }




}
