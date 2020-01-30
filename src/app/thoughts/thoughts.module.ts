import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThoughtsListComponent } from './thoughts-list/thoughts-list.component';
import {RouterModule} from '@angular/router';
import {ThoughtsRoutes} from './thoughts.routes';
import {ThoughtModule} from '../../@core/domain/thought/thought.module';
import {MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import { ThoughtViewComponent } from './thought-view/thought-view.component';
import { ThoughtAddButtonComponent } from './thought-add-button/thought-add-button.component';
import { ThoughtAddComponent } from './thought-add/thought-add.component';



@NgModule({
  declarations: [ThoughtsListComponent, ThoughtViewComponent, ThoughtAddButtonComponent, ThoughtAddComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ThoughtsRoutes),
    ThoughtModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
  ],
  entryComponents: [
    ThoughtAddComponent
  ]
})
export class ThoughtsModule { }
