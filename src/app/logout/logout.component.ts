import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private loginService: LoginService,private router:Router) { }

  ngOnInit(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    if(localStorage.getItem('admin')){
      localStorage.removeItem('admin');

    }
    this.loginService.loggedIn=new BehaviorSubject(false);
    this.router.navigate(['/login']);
  }


}
