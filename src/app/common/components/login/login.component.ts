import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route : Router,private commonService : CommonService) { }

  ngOnInit(): void {
  }

  login(){
    this.route.navigateByUrl('/user');
  }
}
