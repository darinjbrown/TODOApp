import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos = [
    {id: 1, description : 'Assemble bike shoes'},
    {id: 2, description: 'Become Angular Expert'},
    {id: 3, description: 'Become Spring Boot Expert'},
    {id: 4, description: 'Become cloud hosting expert'},
    {id: 5, description: 'Update personal website'},
    {id: 6, description: 'Create website for Jason'},
    {id: 7, description: 'Meet with Tate'},
    {id: 8, description: 'Create Compentency Map / Justification / Goals'}
  ]
  // todo = {
  //   id : 1,
  //   description: 'Assemble bike shoes'
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
