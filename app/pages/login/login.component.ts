import { Component, OnInit } from '@angular/core';
import * as Facebook from "nativescript-facebook";

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  login() {
    Facebook.login((error, fbData) => {
        if (error) {
            alert("Error during login: " + error.message);
        } else {
            console.log(fbData.token);
        }
    });
  }

}
