import {Routes} from '@angular/router';
import {ThoughtsListComponent} from './thoughts-list/thoughts-list.component';
import {ThoughtsResolverService} from './thoughts-resolver.service';
import {ThoughtViewComponent} from './thought-view/thought-view.component';
import {ThoughtResolverService} from './thought-resolver.service';
import {ThoughtAddComponent} from './thought-add/thought-add.component';

export const ThoughtsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
      },
      {
        path: 'add',
        component: ThoughtAddComponent,
      },
      {
        path: 'list',
        component: ThoughtsListComponent,
        resolve: {
          thoughts: ThoughtsResolverService
        }
      },
      {
        path: ':id',
        component: ThoughtViewComponent,
        resolve: {
          thought: ThoughtResolverService
        }
      }
    ]
  }
];
