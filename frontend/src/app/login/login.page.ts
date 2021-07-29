import {Component, OnInit} from '@angular/core';
import {MenuController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {
    this.menuCtrl.enable(false)
  }

  ngOnInit() {
  }

}
