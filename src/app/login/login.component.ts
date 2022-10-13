import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Manager } from '../model/manager';
import { CommonService } from '../shared/common.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  manager = new Manager();
  msg = '';
  constructor(private commonservice: CommonService, private router: Router) {}
  loginform: NgForm;
  ngOnInit(): void {}

  loginManager() {
    this.commonservice.loginManagerFromServer(this.manager).subscribe(
      (data) => {
        console.log('response got');
        this.router.navigate(['/login/header']);
      },
      (error) => {
        console.log('error exception occured');
        this.msg = 'wrong details ,eneter valid details';
      }
    );
  }

  registerManager() {
    console.log('register');
    this.router.navigate(['registermanager']);
  }
}
