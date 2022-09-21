import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

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

  todos: Todo[] = [];
  message: any


  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
     this.refreshTodos();
  }

refreshTodos(){
  this.todoService.retrieveAllTodos('test').subscribe(
    response =>{
       console.log(response);
       this.todos = response;
    }
  )
}

  deleteTodo(id: any){
    console.log(id)
    this.todoService.deleteTodo('test',id).subscribe(
      response =>{
        console.log(response);
        this.message = `Delete of Todo ${id} Successful`
        this.refreshTodos();
     }
    )
  }

  updateTodo(id: any) {
this.router.navigate(['todos',id])
  }

  addTodo(){
    this.router.navigate(['todos',-1])
    
  }

}
