import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-forum-cat',
  templateUrl: './forum-cat.component.html',
  styleUrls: ['./forum-cat.component.scss'],
})
export class ForumCatComponent implements OnInit {
  @Input() cat: any;
  constructor() { }

  ngOnInit() {}

}
