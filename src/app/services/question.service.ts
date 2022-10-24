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
      title: 'Qual o significado da palavra PURPLE? ',
      answers: [
        {description: 'Roxo', isRight: true},
        {description: 'Azul', isRight: false},
        {description: 'Branco', isRight: false},
        {description: 'Verde', isRight: false},
      ],
      level: 1
    },

    {
      title: 'Qual é a cor do sol?',
      answers: [
        {description: 'Green', isRight: false},
        {description: 'Blue', isRight: false},
        {description: 'Red', isRight: false},
        {description: 'Yellow', isRight: true},
      ],
      level: 1
    },

    {
      title: 'Qual é a cor do sorvete napolitano?',
      answers: [
        {description: 'Black and White', isRight: false},
        {description: 'Brown, White and Pink', isRight: true},
        {description: 'Purple', isRight: false},
        {description: 'Black', isRight: false},
      ],
      level: 1
    },

    {
      title: 'Do you have an apple?',
      answers: [
        {description: 'Você tem uma maça?', isRight: true},
        {description: 'Você tem um macaco?', isRight: false},
        {description: 'Você tem um dragão?', isRight: false},
        {description: 'We do not know', isRight: false},
      ],
      level: 1
    },

    {
      title: 'What is a car?',
      answers: [
        {description: 'É um esporte', isRight: false},
        {description: 'De oito em oitro anos', isRight: false},
        {description: 'É um meio de tranposte', isRight: true},
        {description: 'De quatro em quatro anos', isRight: false},
      ],
      level: 1
    },

    {
      title: 'Bianca comprou melancia',
      answers: [
        {description: 'Bianca Bought a Watermelon', isRight: false},
        {description: 'Bianca Bought a car', isRight: false},
        {description: 'Bianca Bought an apple', isRight: false},
        {description: 'Bianca Bought a window', isRight: true},
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
