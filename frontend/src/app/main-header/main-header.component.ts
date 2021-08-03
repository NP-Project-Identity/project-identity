import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit {
  @Input() title: any;
  public profile;
  public bg;
  constructor(private user: UserService) { }
  ngOnInit() {
    this.profile = "./assets/user/profile/" + this.user.getUserImg();
    this.bg = "./assets/user/bg/" + this.user.getUserBG();
  }

}
