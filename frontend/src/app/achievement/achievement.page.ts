import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.page.html',
  styleUrls: ['./achievement.page.scss'],
})
export class AchievementPage implements OnInit {

  public medal;
  public trophy;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.medal = this.userService.getMedal();
    this.trophy = this.userService.getTrophy();
  }
  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
