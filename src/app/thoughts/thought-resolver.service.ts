import { Injectable } from '@angular/core';
import {ThoughtService} from '../../@core/domain/thought/thought.service';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {delay, take} from 'rxjs/operators';
import {Thought} from '../../@core/domain/thought/thought';
import {EMPTY, empty, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThoughtResolverService implements Resolve<Thought> {

  constructor(
    private _thoughtService: ThoughtService,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Thought> {
    try {
      const id = parseInt(route.paramMap.get('id'), 10);
      return this._thoughtService.findById(id).pipe(
        take(1),
      );
    } catch (e) {
      return EMPTY;
    }
  }
}
