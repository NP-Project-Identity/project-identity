import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'quiz-popup',
  templateUrl: './quiz-popup.component.html',
  styleUrls: ['./quiz-popup.component.scss'],
})
export class QuizPopupComponent implements OnInit {

  constructor(private navCtrl: NavController) { }

  @Input() result: string;
  public Result: string;
  public Reward: string;

  ngOnInit() { }
  goBack() {
    this.navCtrl.back();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.result == "true") {
      this.Result = "You are correct!"
      this.Reward = "20 point added to the bank."
    }
    else {
      this.Result = "Answer is incorrect!"
      this.Reward = "Good luck nice time."
    }
  }

}
