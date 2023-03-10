import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs'
import { UiService } from 'src/app/services/ui.service';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text!: string;
  day!: string;
  reminder: boolean = false;
  showAddTask!: boolean;
  subscription!: Subscription;
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  constructor(private _uiService: UiService) {
    this.subscription = this._uiService.onToggleShowAddTask()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    if (!this.text || !this.day) {
      alert("Please enter a task!");
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    }
    this.text = "";
    this.day = '';
    this.reminder = false;
  
    this.onAddTask.emit(newTask);
  }
}
