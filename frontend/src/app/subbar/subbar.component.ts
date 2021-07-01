import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-subbar',
  templateUrl: './subbar.component.html',
  styleUrls: ['./subbar.component.scss'],
})
export class SubbarComponent implements OnInit {
  public navItems= [
    { title: 'Lmgtplatform', url: '../learningmgtplatform', icon: 'layers' },
    { title: 'Forum', url: '../forum', icon: 'chatbox-ellipses-outline' }
  ];
  constructor() { }

  ngOnInit() {}

}
