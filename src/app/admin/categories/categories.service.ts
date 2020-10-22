import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Injectable} from '@angular/core';
import { Category } from './category.model';
import { BehaviorSubject } from 'rxjs';
import {environment} from '../../../environments/environment';

const backendApi=environment.apiUrl+"/categories";
@Injectable({
  providedIn: 'root'
})

export class CategoriesService{
  categories:Category[] = [];
  loading=new BehaviorSubject(false);
  Categories=new BehaviorSubject([]);
  error=new BehaviorSubject<string>(null);
  singleCategory=new BehaviorSubject(null);
  constructor(private httpClient: HttpClient){}

  headers = new HttpHeaders({'x-token':localStorage.getItem('token')});

  getAllCategories(){
    this.loading.next(true);
    this.httpClient.get<Category[]>(backendApi,{
      headers:this.headers
    }).subscribe((categories)=>{
      this.loading.next(false);
      this.categories=categories;
      this.Categories.next(this.categories);
    },err=>{
      this.loading.next(false);
      console.log(err);
    });

  }
  //Add A Categoryyyy.....
  addCategory(name){
    this.loading.next(true);
    this.httpClient.post<{message:string,category:{_id:string,name:string}}>(backendApi,{
      name:name
    },{
      headers:this.headers}).subscribe((category)=>{
        this.loading.next(false);
        if(this.categories.push(category.category)){
          this.Categories.next(this.categories);
        }

      },err=>{
        if(err){
          this.error.next(err.error);
        }

      });
  }
//Delete Category...
  deleteCategory(id){
    this.httpClient.delete<{message:string,category:{_id:string,name:string}}>(`${backendApi}/${id}`,{
      headers:this.headers
    }).subscribe((response)=>{
      const index=this.categories.indexOf(response.category);
      this.categories.splice(index,1);
      this.Categories.next(this.categories)
    },err=>{
      if(err){
        this.error.next(err.error);
      }
    });

  }
   //Get SingleCategory

   getSingleCategory(id){
    let categoryy:{_id:string,name:string};

     this.httpClient.get<{_id:string,name:string}>(`${backendApi}/${id}`,{
       headers:this.headers
     })
     .subscribe((category)=>{
     this.singleCategory.next(category);
     },err=>{
       console.log(err);
     });

   }






}
