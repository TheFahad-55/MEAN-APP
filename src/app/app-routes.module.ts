import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { MeComponent } from './me/me.component';
import { LogoutComponent } from './logout/logout.component';
import { ShipComponent } from './cart/ship/ship.component';
import { AdminComponent } from './admin/admin.component';
import { AdminProductsComponent } from './admin/products/products.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { UsersComponent } from './admin/users/users.component';
import { AddComponentComponent } from './admin/categories/add-component/add-component.component';
import { UpdateCategoryComponent } from './admin/categories/update-category/update-category.component';
import { AboutComponent } from './about/about.component';

const appRoutes:Routes=[
{path:'',component:HomeComponent},
{path:'signup',component:SignupComponent},
{path:'login',component:LoginComponent},
{path:'products',component:ProductsComponent},
{path:'me',component:MeComponent},
{path:'logout',component:LogoutComponent},
{path:'cart',component:CartComponent},
{path:'about',component:AboutComponent},
{path:'cart/ship',component:ShipComponent},
{path:'admin',component:AdminComponent,children:[
  {path:'products',component:AdminProductsComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'users',component:UsersComponent},
  {path:'me',component:MeComponent},
  {path:'logout',component:LogoutComponent},
  {path:'add-category',component:AddComponentComponent},
  {path:'update-category/:id',component:UpdateCategoryComponent}
]}
];

@NgModule({
  declarations: [],
  imports: [ CommonModule,RouterModule.forRoot(appRoutes) ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutesModule {}
