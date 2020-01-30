import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss']
})
export class BottomBarComponent implements OnInit {

  public links = [
    {
      label: 'Program',
      path: '/program'
    },
    {
      label: 'Messages',
      path: '/messages',
    },
    {
      label: 'Thoughts',
      path: '/thoughts'
    },
    {
      label: 'Me',
      path: '/messages'
    }
  ];

  constructor(
  ) {
  }

  ngOnInit() {
  }

}
