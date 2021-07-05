import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-subbar',
  templateUrl: './subbar.component.html',
  styleUrls: ['./subbar.component.scss'],
})
export class SubbarComponent implements OnInit {
  @Input() navItems: any;
  constructor() { }

  ngOnInit() {}

}
