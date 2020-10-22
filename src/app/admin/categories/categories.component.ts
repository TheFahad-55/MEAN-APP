import { Category } from './category.model';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './categories.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  subscription:Subscription;
  isLoading:boolean=false;
  categories:Category[] = [];
  error:string=null;
  constructor(private CategoriesService: CategoriesService,private router:Router) {
    //Loader...
    this.subscription=this.CategoriesService.loading.subscribe((bool)=>{
      this.isLoading=bool;

    });
   }

  ngOnInit(): void {
    //Getting All Categories....
    this.CategoriesService.getAllCategories();
    this.subscription=this.CategoriesService.Categories.subscribe((categories)=>{
      this.categories=categories;
    });
    //Error
    this.subscription=this.CategoriesService.error.subscribe((err)=>{
      this.error=err;
  });

  }
//Delete Category
  onDeleteCategory(text){

    const index=text.textContent;
    const _id=this.categories[index]._id;

    this.CategoriesService.deleteCategory(_id);

    this.router.navigate(['/admin/categories']);

  }
  //Update Categoryyyy...
  onUpdateCategory(text){
    const index=text.textContent;
    const _id=this.categories[index]._id;
    this.router.navigate([`/admin/update-category/${_id}`]);

  }



  ngonDestroy(): void {
    this.subscription.unsubscribe();
  }

}
