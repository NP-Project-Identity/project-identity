import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MenuController, NavController} from '@ionic/angular';
import {Md5} from 'ts-md5/dist/md5';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isSubmitted = false;
  errorMsg = "";
  loginForm = this.formBuilder.group({
    password: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ]))
  });

  constructor(public navCtrl: NavController, public menuCtrl: MenuController, private formBuilder: FormBuilder, private auth: UserService, private router: Router) {
    this.menuCtrl.enable(false)
  }

  ngOnInit() {
  }

  submit() {
    if (this.loginForm.valid) {
      let result = this.auth.login(this.loginForm.get("email").value, Md5.hashStr(this.loginForm.get("password").value))
      if (result) {
        this.router.navigate(['home']);
        this.menuCtrl.enable(true);
      }
      else {
        this.isSubmitted = true;
        this.errorMsg = "Invaild email or password";
      }
    }
    else {
      if (this.formError.email.errors?.required) {
        this.isSubmitted = true;
        this.errorMsg = "Email is required";
      }
      else if (this.formError.email.errors?.pattern) {
        this.isSubmitted = true;
        this.errorMsg = "Invaild email";
      }
      else if (this.formError.password.errors?.required) {
        this.isSubmitted = true;
        this.errorMsg = "Password is required";
      }
    }
  }

  get formError() {
    return this.loginForm.controls;
  }
}
