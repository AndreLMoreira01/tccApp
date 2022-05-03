import { Component, OnInit } from '@angular/core';
import { Question, QuestionAnswer } from '../models/question';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {

  curQuesion: Question;
  questionIndex: number = 0;

 

  constructor(
    private questionService: QuestionService
  ) { }

  ngOnInit(): void {
    this.curQuesion = this.questionService.questions[this.questionIndex];
  }

  doAnswer(answer: QuestionAnswer) {
    if(answer.isRight){
      this.questionIndex++;
      this.curQuesion = this.questionService.questions[this.questionIndex];
    }
  }
}
