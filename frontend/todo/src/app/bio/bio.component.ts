import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {
  name = "Darin Brown";
  address = "1616 W Germann Rd, Chandler, AZ 85286";
  phone = "707.758.7439";
  email = "darin.brown.cs@gmail.com";

  constructor() { }

  ngOnInit() {

  }

}
