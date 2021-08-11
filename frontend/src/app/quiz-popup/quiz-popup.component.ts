import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {NavController, NavParams} from '@ionic/angular';
import {UserService} from '../services/user.service';

@Component({
  selector: 'quiz-popup',
  templateUrl: './quiz-popup.component.html',
  styleUrls: ['./quiz-popup.component.scss'],
})
export class QuizPopupComponent implements OnInit {

  constructor(private navCtrl: NavController, private userService: UserService, public navParams: NavParams) { }

  @Input() result: string;
  public Result: string;
  public Reward: string;

  ngOnInit() { }
  goBack() {
    this.navCtrl.pop();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.result == "true") {
      this.Result = "You are correct!"
      this.Reward = "You win 20 silver coin \nYou now have " + this.userService.addCoin(20) + " silver coin now"
    }
    else {
      this.Result = "Answer is incorrect!"
      this.Reward = "Good luck nice time."
    }
  }

}
