import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
tasks =[];
getTasks(t){
  this.tasks.push(t);
}
removeTasks(t){
  var index = this.tasks.indexOf(t);
  if(index > -1){
    this.tasks.splice(index,1)
  }
}
  constructor() { }

  ngOnInit() {
  }

}
