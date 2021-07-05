import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'quiz-popup',
  templateUrl: './quiz-popup.component.html',
  styleUrls: ['./quiz-popup.component.scss'],
})
export class QuizPopupComponent implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}
  goBack() {
    this.navCtrl.back();
    }

}
