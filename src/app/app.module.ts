import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutesModule } from './app-routes.module';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SpinnerComponent } from './spinner/spinner.component';
import { ProductsComponent } from './products/products.component';
import { MeComponent } from './me/me.component';
import { LogoutComponent } from './logout/logout.component';
import { CartComponent } from './cart/cart.component';
import { ShipComponent } from './cart/ship/ship.component';
import { AdminComponent } from './admin/admin.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { AdminProductsComponent } from './admin/products/products.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { UsersComponent } from './admin/users/users.component';
import { AddComponentComponent } from './admin/categories/add-component/add-component.component';
import { UpdateCategoryComponent } from './admin/categories/update-category/update-category.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    SpinnerComponent,
    ProductsComponent,
    MeComponent,
    LogoutComponent,
    CartComponent,
    ShipComponent,
    AdminComponent,
    SidebarComponent,
    AdminProductsComponent,
    CategoriesComponent,
    UsersComponent,
    AddComponentComponent,
    UpdateCategoryComponent,
    AboutComponent

  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
