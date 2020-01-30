import {Component, Input, OnInit} from '@angular/core';
import {Thought} from '../../../@core/domain/thought/thought';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-thought-view',
  templateUrl: './thought-view.component.html',
  styleUrls: ['./thought-view.component.scss']
})
export class ThoughtViewComponent implements OnInit {

  @Input()
  thought: Thought;

  thought$ = this._route.data.pipe(
    map((data: { thought: Thought }) => data.thought)
  );

  constructor(
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.thought$.subscribe(thought => this.thought = thought);
  }

}
