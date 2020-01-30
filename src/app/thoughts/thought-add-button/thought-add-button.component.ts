import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {ThoughtAddComponent} from '../thought-add/thought-add.component';

@Component({
  selector: 'app-thought-add-button',
  templateUrl: './thought-add-button.component.html',
  styleUrls: ['./thought-add-button.component.scss']
})
export class ThoughtAddButtonComponent implements OnInit {

  constructor(
    private _dialog: MatDialog
  ) {

  }

  ngOnInit() {
  }

  openDialog() {
      this._dialog.open(ThoughtAddComponent);
  }
}
