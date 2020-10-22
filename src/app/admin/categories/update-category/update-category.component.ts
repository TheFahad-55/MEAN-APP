import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../categories.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent implements OnInit {
  @ViewChild('form',{static:true}) form:NgForm;
  isLoading:boolean =false;
  subscription:Subscription;
  category:{_id:string,name:string}
  constructor(private categoryService: CategoriesService,
    private router:Router,private activatedRoute:ActivatedRoute) {
    //loading
    this.subscription=this.categoryService.loading.subscribe((bool)=>{
      this.isLoading=bool;
    });

  }

ngOnInit(): void {
//Id of the category
this.categoryService.getSingleCategory(this.activatedRoute.snapshot.params['id']);
this.subscription=this.categoryService.singleCategory.subscribe((category)=>{
  this.category=category;
console.log(document.getElementById('form'));
});
}
onUpdateCategory(){

}


ngOnDestroy(): void {
  this.subscription.unsubscribe();

}

}
