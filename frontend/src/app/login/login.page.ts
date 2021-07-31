import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {MenuController, NavController} from '@ionic/angular';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm = this.formBuilder.group({
    email: '',
    password: ''
  });

  constructor(public navCtrl: NavController, public menuCtrl: MenuController, private formBuilder: FormBuilder, private auth: UserService, private router: Router) {
    this.menuCtrl.enable(false)
  }

  ngOnInit() {
  }

  submit() {
    let result = this.auth.login(this.loginForm.get("email").value, this.loginForm.get("password").value)
    if (result) {
      this.menuCtrl.enable(true)
    }
  }
}
