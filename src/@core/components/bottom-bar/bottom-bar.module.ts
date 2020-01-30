import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomBarComponent } from './bottom-bar.component';
import {MatTabsModule} from '@angular/material';
import {RouterModule} from '@angular/router';



@NgModule({
    declarations: [BottomBarComponent],
    exports: [
        BottomBarComponent
    ],
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule
  ]
})
export class BottomBarModule { }
