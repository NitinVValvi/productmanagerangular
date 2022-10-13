import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Manager } from '../model/manager';
import { CommonService } from '../shared/common.service';
@Component({
  selector: 'app-register-manager',
  templateUrl: './register-manager.component.html',
  styleUrls: ['./register-manager.component.css'],
})
export class RegisterManagerComponent implements OnInit {
  manager = new Manager();
  msg = '';
  constructor(private common: CommonService, private routers: Router) {}

  ngOnInit(): void {}

  registerManager() {
    this.common.registerManagerFromServer(this.manager).subscribe(
      (data) => {
        console.log('received');
        this.msg = 'registered manager';
      },
      (error) => {
        console.log('error');
        this.msg = error.error;
      }
    );
  }
}
