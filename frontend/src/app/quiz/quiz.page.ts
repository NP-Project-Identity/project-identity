import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuizService} from '../services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private quizService: QuizService) { }

  public quizTitle: string;
  public quizOption: string[] = [];
  public title: string;
  public isAnswerShowing = false;
  public result = false;
  private quiz: any;
  private selectedQuiz: any;

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  ngOnInit() {
    this.quiz = this.quizService.crateQuiz(this.activatedRoute.snapshot.parent.parent.paramMap.get('id'));
    this.selectedQuiz = this.quiz[this.getRandomInt(this.quiz.length)];
    this.quizTitle = this.selectedQuiz[0];
    for (let i = 0; i < 4; i++) {
      this.quizOption.push(this.selectedQuiz[i + 1]);
    }
  }
  quizAns(ans: any) {
    if (ans == (this.selectedQuiz[5] - 1)) {
      this.result = true;
    }
    this.isAnswerShowing = true;
  }
}
