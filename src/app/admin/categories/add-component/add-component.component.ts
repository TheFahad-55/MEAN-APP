import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoriesService } from '../categories.service';
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.scss']
})
export class AddComponentComponent implements OnInit {
  error:string ="";
  isLoading:boolean =false;
  subscription:Subscription;

  constructor(private categoryService: CategoriesService,
    private router:Router) {

    //loading
    this.subscription=this.categoryService.loading.subscribe((bool)=>{
      this.isLoading=bool;
    });

  }

  ngOnInit(): void {
    //Add Category/...



  }
  //Add Category..
  onAddCategory(form:NgForm){
   this.categoryService.addCategory(form.value.name);

    this.router.navigate(['/admin/categories']);



  }

    ngOnDestroy(): void {
      //Called once, before the instance is destroyed.
      //Add 'implements OnDestroy' to the class.
      this.subscription.unsubscribe();
    }

}
