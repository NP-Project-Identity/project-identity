import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {QuizService} from '../services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private quizService: QuizService,
    private formBuilder: FormBuilder,
  ) {}

  public quizType: string;
  public quizTitle: string;
  public quizOption: string[] = [];
  public quizImg: string;
  public title: string;
  public isAnswerShowing = false;
  public result = false;
  private quiz: any;
  private selectedQuiz: any;

  quizForm = this.formBuilder.group({
    answer: '',
  });

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  ngOnInit() {
    this.quiz = this.quizService.crateQuiz(
      this.activatedRoute.snapshot.parent.parent.paramMap.get('id'),
    );
    this.selectedQuiz = this.quiz[this.getRandomInt(this.quiz.length)];
    this.quizType = this.selectedQuiz.type;
    this.quizTitle = this.selectedQuiz.question;
    if (this.quizType == 'mcq') this.quizOption = this.selectedQuiz.option;
    else if (this.quizType == 'img') {
      this.quizImg = './assets/game/quiz/' + this.selectedQuiz.src;
    }
  }
  quizAns(ans: any) {
    if (ans == this.selectedQuiz.answer) {
      this.result = true;
    }
    this.isAnswerShowing = true;
  }

  submit() {
    if (this.quizForm.get('answer').value != null)
      this.quizAns(this.quizForm.get('answer').value.toLowerCase());
  }
}
