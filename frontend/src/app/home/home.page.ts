import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
 navItems = [
    { title: 'Lmgtplatform', url: '../learningmgtplatform', icon: 'layers' },
    { title: 'Forum', url: '../forum', icon: 'chatbox-ellipses-outline' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
