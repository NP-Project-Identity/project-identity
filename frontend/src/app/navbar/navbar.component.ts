import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  public navSection = [
    {title: 'Home', url: 'home', icon: 'home'},
    //{title: 'SafeEntry', url: 'safeentry', icon: 'id-card'},
    {title: 'Events', url: 'events', icon: 'newspaper'},
    {title: 'LMgtPlatform', url: 'learningmgtplatform', icon: 'layers'},
    {title: 'Achievement', url: 'achievement', icon: 'medal'},
    {title: 'Reward Shop', url: 'rewards', icon: 'storefront'},
    {title: 'My pet', url: 'pet', icon: 'game-controller'}
  ];
  public accSection = [
    {title: 'Account', url: 'account', icon: 'person-circle'},
    {title: 'Settings', url: 'settings', icon: 'settings'},
    {title: 'Logout', url: 'logout', icon: 'log-out'}
  ];
  constructor() { }

  ngOnInit() { }

}
