import { Component, OnInit } from '@angular/core';

// Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  public taskList: Array<TaskList> = [
    { task: 'Meu novo afazer', checked: true },
    { task: 'Meu novo afazer', checked: false },
  ];

  constructor() {}

  ngOnInit(): void {}

  public setEmitTaskList(event: string) {
    console.log(event);
  }

  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList() {
    const confirm = window.confirm('Certeza memo??');
    if (confirm) {
      this.taskList = [];
    }
  }
}
