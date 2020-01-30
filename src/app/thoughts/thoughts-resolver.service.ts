import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Thought} from '../../@core/domain/thought/thought';
import {ThoughtService} from '../../@core/domain/thought/thought.service';
import {delay, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ThoughtsResolverService implements Resolve<Array<Thought>> {

  constructor(
    private _thoughtService: ThoughtService,
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this._thoughtService.findAll().pipe(
      take(1),
    );
  }
}
