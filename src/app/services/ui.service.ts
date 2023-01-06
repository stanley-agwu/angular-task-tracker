import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private _showAddTask: boolean = false;
  private _subject = new Subject<any>();

  constructor() { }

  toggleShowAddTask(): void {
    this._showAddTask = !this._showAddTask;
    this._subject.next(this._showAddTask);
  }

  onToggleShowAddTask(): Observable<any> {
    return this._subject.asObservable();
  }
}
