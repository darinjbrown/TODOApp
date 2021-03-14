import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos = [
    new Todo (1,  'Assemble bike shoes', false, new Date('3/31/2021')),
    new Todo ( 2,'Become Angular Expert', false, new Date('3/31/2021')),
    new Todo (3,  'Become Spring Boot Expert', false, new Date('3/31/2021')),
    new Todo (4,  'Become cloud hosting expert', false, new Date('3/31/2021')),
    new Todo (5, 'Update personal website', false, new Date('3/31/2021')),
    new Todo (6, 'Create website for Jason', false, new Date('3/31/2021')),
    new Todo (7, 'Meet with Tate', false, new Date('3/31/2021')),
    new Todo (8, 'Create Compentency Map / Justification / Goals', false, new Date('3/31/2021'))
  ]
  // todo = {
  //   id : 1,
  //   description: 'Assemble bike shoes'
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
