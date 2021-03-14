import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

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

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.message = ""
  }
  handleLogin() {
    this.invalidLogin = !(this.username === "Darin" && this.password === "Dummy");
    if(!this.invalidLogin){
      this.router.navigate(['welcome', this.username]);
    }
  }
  handleCreate(){
    this.router.navigate(['create'])
  }

}
