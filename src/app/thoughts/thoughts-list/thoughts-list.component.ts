import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Thought} from '../../../@core/domain/thought/thought';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-thoughts-list',
  templateUrl: './thoughts-list.component.html',
  styleUrls: ['./thoughts-list.component.scss']
})
export class ThoughtsListComponent implements OnInit {

  thoughts$ = this._route.data.pipe(
    map((data: { thoughts: Array<Thought> }) => data.thoughts)
  );

  constructor(
    private _route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

}
