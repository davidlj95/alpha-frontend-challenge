import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-thought-add',
  templateUrl: './thought-add.component.html',
  styleUrls: ['./thought-add.component.scss']
})
export class ThoughtAddComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ThoughtAddComponent>
  ) { }

  ngOnInit() {
  }

}
