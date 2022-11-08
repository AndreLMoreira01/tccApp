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
      title: 'PURPLE',
      answers: [
        {description: 'Roxo', isRight: true},
        {description: 'Azul', isRight: false},
        {description: 'Branco', isRight: false},
        {description: 'Verde', isRight: false},
      ],
      level: 1
    },

    {
      title: 'YELLOW',
      answers: [
        {description: 'Cinza', isRight: false},
        {description: 'Azul', isRight: false},
        {description: 'Vermelho', isRight: false},
        {description: 'Amarelo', isRight: true},
      ],
      level: 1
    },

    {
      title: 'GREEN',
      answers: [
        {description: 'Preto', isRight: false},
        {description: 'Verde', isRight: true},
        {description: 'Laranja', isRight: false},
        {description: 'Branco', isRight: false},
      ],
      level: 1
    },

    {
      title: 'BROWN',
      answers: [
        {description: 'Roxo', isRight: false},
        {description: 'Amarelo', isRight: false},
        {description: 'Marrom', isRight: true},
        {description: 'Vermelho', isRight: false},
      ],
      level: 1
    },

    {
      title: 'BLUE',
      answers: [
        {description: 'Azul', isRight: true},
        {description: 'Verde', isRight: false},
        {description: 'Vermelho', isRight: false},
        {description: 'Amarelo', isRight: false},
      ],
      level: 1
    },

    {
      title: 'GREY',
      answers: [
        {description: 'Preto', isRight: false},
        {description: 'Branco', isRight: false},
        {description: 'Laranja', isRight: false},
        {description: 'Cinza', isRight: true},
      ],
      level: 1
    },

    {
      title: 'NAVY BLUE',
      answers: [
        {description: 'Verde água', isRight: false},
        {description: 'Azul marinho', isRight: true},
        {description: 'Azul escuro', isRight: false},
        {description: 'Azul ciano', isRight: false},
      ],
      level: 1
    },

    {
      title: 'COLORFUL',
      answers: [
        {description: 'Cinza', isRight: false},
        {description: 'Branco', isRight: false},
        {description: 'Colorido', isRight: true},
        {description: 'Transparente', isRight: false},
      ],
      level: 1
    },


    {
      title: 'SILVER',
      answers: [
        {description: 'Verde', isRight: false},
        {description: 'Preto', isRight: false},
        {description: 'Branco', isRight: false},
        {description: 'Prata', isRight: true},
      ],
      level: 1
    },
    {
      title: 'PINK',
      answers: [
        {description: 'Roxo', isRight: false},
        {description: 'Rosa', isRight: true},
        {description: 'Vermelho', isRight: false},
        {description: 'Laranja', isRight: false},
      ],
      level: 1
    }


  ];

  private questionPrizes = [
    20, //1
    40,
    80,
    120,
    160, //5
    200, //10
    400,
    800,
    1000,
    1500
  ];

  constructor() {
    this.questions.sort((a, b) => 0.5 - Math.random());
  }

  nextQuestion(): Question {
    const randomIndex: number = Math.floor( Math.random() * this.questions.length );
    this.questionCount++;
    return this.questions.splice(randomIndex, 1)[0];

   // if(): Question{
     // this.questionCount--;
    //}
  }


  getPrizeInfo(): PrizeInfo {
    const curQuesionPrize = this.questionPrizes[ this.questionCount - 1 ];
    const accumulated = this.questionPrizes[ this.questionCount - 2 ];

    return {
      correctAnswer: curQuesionPrize,
      wrongAnswer: this.questionCount === 1 || this.questionCount === 10 ? 0 : accumulated/2,
      quit: this.questionCount === 1500 ? 0 : accumulated,
    };
  }
}
