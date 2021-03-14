import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "darin"
  password = ""
  message = ""
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor() { }

  ngOnInit(): void {
    this.message = ""
  }
  handleLogin() {
    this.invalidLogin = !(this.username === "Darin" && this.password === "Dummy");

    this.message = "Hello, " + this.username;
  }

}
