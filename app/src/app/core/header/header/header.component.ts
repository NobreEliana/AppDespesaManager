import { Component, OnInit } from '@angular/core';
import { faCommentDollar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  faCommentDollar=faCommentDollar;
  constructor() { }

  ngOnInit() {
  }

}
