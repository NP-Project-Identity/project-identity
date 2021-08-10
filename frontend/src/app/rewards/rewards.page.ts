import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.page.html',
  styleUrls: ['./rewards.page.scss'],
})
export class RewardsPage implements OnInit {

  constructor(public menuCtrl: MenuController) {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
  }

}
