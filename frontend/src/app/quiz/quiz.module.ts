import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ComponentsModule} from '../components.module';
import {QuizPopupComponent} from './quiz-popup/quiz-popup.component';
import {QuizPageRoutingModule} from './quiz-routing.module';
import {QuizPage} from './quiz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
  ],
  declarations: [QuizPage, QuizPopupComponent],
})
export class QuizPageModule {}
