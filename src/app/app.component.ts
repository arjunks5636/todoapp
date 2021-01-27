import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoapp';
  todos=[];
  todo="";
  add(){
    this.todos.push(this.todo);
    console.log(this.todos);

  }
  change(event:Event){
  this.todo=(event.target as HTMLInputElement).value;
  }

}
