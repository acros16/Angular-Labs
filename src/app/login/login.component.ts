import { Component, OnInit } from '@angular/core';
import {FormsModule, Form} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  constructor(private router: Router, private form: FormsModule) { }

  ngOnInit() {
  }

  loginUser(event){
    event.preventDefault();
    if (this.username == "Anthony" && this.password == "123"){
      this.router.navigateByUrl('/account');
      console.log("testing if dom is ready");

      if (typeof(Storage) !== "undefined"){
        console.log("Storage ready");
        sessionStorage.setItem("userID","1");
        sessionStorage.setItem("username", this.username);
        sessionStorage.setItem("birthDate","07/04/1998");
        sessionStorage.setItem("age","20");
        console.log(sessionStorage.getItem("userID"));
        console.log(sessionStorage.getItem("username"));
        console.log(sessionStorage.getItem("birthDate"));
        console.log(sessionStorage.getItem("age"));
      }
    }
    else{
      alert('Incorrect username and/or password!');
    }
  }
}
