import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { BioComponent } from '../bio/bio.component';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = "Some Welcome Message";
  constructor() {

  }

  ngOnInit() : void {

  }

}
