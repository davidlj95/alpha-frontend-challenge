import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'thoughts'
  },
  {
    path: 'thoughts',
    loadChildren: './thoughts/thoughts.module#ThoughtsModule'
  },
  {
    path: '**',
    redirectTo: 'thoughts'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
