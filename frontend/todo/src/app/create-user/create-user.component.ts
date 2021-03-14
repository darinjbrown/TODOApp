import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  username = ''
  password = ''
  message = ''
  initialUser = {
    uname: 'Admin',
    pword: 'Fake1'
  }
  invalidUsername = false
  users = [this.initialUser]
  userExists = false


  constructor() {  }

  ngOnInit(): void {}
  handleCreate(){
    for (let i = 0; i < this.users.length; i++){
      if (this.users[i].uname === this.username){
        this.userExists = true
      }
    }
    if(this.userExists){
      this.message = "User already exists!"
    }else if (this.password.length < 5) {
      this.message = "Enter a password at least 5 characters long"
    }else {
      var user = {
        uname : this.username,
        pword : this.password
      }
      this.users.push(user)
      this.message = "User Created"
    }
    console.log(this.users)
  }

}
