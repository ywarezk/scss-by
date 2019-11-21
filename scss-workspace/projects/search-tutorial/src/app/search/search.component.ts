import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {debounceTime, distinctUntilChanged, mergeMap, catchError} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  template: `
    <input type="search" (input)="search($event)" />
    <ul>
      <li *ngFor="let task of tasks">
        {{task.title}}
      </li>
    </ul>
  `,
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search$ : Subject<string> = new Subject<string>();
  tasks : any;

  constructor(private _http : HttpClient) { }

  ngOnInit() {
    // this.search$.subscribe((search : string) => {
    //   this._http.get(`https://nztodo.herokuapp.com/api/task/?format=json&search=${search}`).subscribe((tasks) => {
    //     this.tasks = tasks;
    //   })
    // });

    this.search$.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      mergeMap((search : string) => this._http.get(`https://nztodo.herokuapp.com/api/task/?format=json&search=${search}`)),
      // catchError((err) => )
    ).subscribe((tasks) => {
      this.tasks = tasks;
    })
  }

  search = (event) => {
    this.search$.next(event.target.value);
  }

}
