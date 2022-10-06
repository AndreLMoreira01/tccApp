import { Injectable } from '@angular/core';
import { Question } from '../models/question';
import { PrizeInfo } from '../models/prize-info';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private questionCount = 0;
  private questions: Question[] = [
    {
      title: 'O menino comprou maçã',
      answers: [
        {description: 'Apple', isRight: true},
        {description: 'Banana', isRight: false},
        {description: 'Peach', isRight: false},
        {description: 'Orange', isRight: false},
      ],
      level: 1
    },

    {
      title: 'A menina comprou uva',
      answers: [
        {description: 'Goku', isRight: true},
        {description: 'Freeza', isRight: false},
        {description: 'Mabel', isRight: false},
        {description: 'Leon Kennedy', isRight: false},
      ],
      level: 1
    },

    {
      title: 'Ele comprou morango',
      answers: [
        {description: 'De dois em dois anos', isRight: false},
        {description: 'De oito em oitro anos', isRight: false},
        {description: 'Ocorre todos os anos', isRight: false},
        {description: 'De quatro em quatro anos', isRight: true},
      ],
      level: 1
    },

    {
      title: 'Lucas comeu banana',
      answers: [
        {description: 'De dois em dois anos', isRight: false},
        {description: 'De oito em oitro anos', isRight: false},
        {description: 'Ocorre todos os anos', isRight: false},
        {description: 'De quatro em quatro anos', isRight: true},
      ],
      level: 1
    },

    {
      title: 'Marcela comeu kiwi',
      answers: [
        {description: 'De dois em dois anos', isRight: false},
        {description: 'De oito em oitro anos', isRight: false},
        {description: 'Ocorre todos os anos', isRight: false},
        {description: 'De quatro em quatro anos', isRight: true},
      ],
      level: 1
    },

    {
      title: 'Bianca comprou melancia',
      answers: [
        {description: 'De dois em dois anos', isRight: false},
        {description: 'De oito em oitro anos', isRight: false},
        {description: 'Ocorre todos os anos', isRight: false},
        {description: 'De quatro em quatro anos', isRight: true},
      ],
      level: 1
    },

  ];

  private questionPrizes = [
    1000, //1
    2000,
    3000,
    4000,
    5000, //5
    10000, //10
    20000,
    30000,
    40000,
    50000,
    100000,
    200000,
    300000,
    400000,
    500000,
    1000000
  ];

  constructor() {
    this.questions.sort((a, b) => 0.5 - Math.random());
  }

  nextQuestion(): Question {
    const randomIndex: number = Math.floor( Math.random() * this.questions.length );
    this.questionCount++;
    return this.questions.splice(randomIndex, 1)[0];
  }


  getPrizeInfo(): PrizeInfo {
    const curQuesionPrize = this.questionPrizes[ this.questionCount - 1 ];
    const accumulated = this.questionPrizes[ this.questionCount - 2 ];

    return {
      correctAnswer: curQuesionPrize,
      wrongAnswer: this.questionCount === 1 || this.questionCount === 16 ? 0 : accumulated/2,
      quit: this.questionCount === 1 ? 0 : accumulated,
    };
  }
}
