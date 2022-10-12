import { Injectable } from '@angular/core';
import { Question } from '../models/question';


@Injectable({
    providedIn: 'root'
  })
  export class QuestionService {
  
    private questionCount = 0;
    private questions: Question[] = [
      {
        title: 'Qual o significado da palavra abaixo? P U R P L E',
        answers: [
          {description: 'Roxo', isRight: true},
          {description: 'Azul', isRight: false},
          {description: 'Branco', isRight: false},
          {description: 'Verde', isRight: false},
        ],
        level: 1
      },
  
      {
        title: 'Qual o significado da palavra abaixo? P U R P L E',
        answers: [
          {description: 'Roxo', isRight: true},
          {description: 'Azul', isRight: false},
          {description: 'Branco', isRight: false},
          {description: 'Verde', isRight: false},
        ],
        level: 1
      },
  
      {
        title: 'Qual o significado da palavra abaixo? P U R P L E',
        answers: [
          {description: 'Roxo', isRight: true},
          {description: 'Azul', isRight: false},
          {description: 'Branco', isRight: false},
          {description: 'Verde', isRight: false},
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

    constructor() {
        this.questions.sort((a, b) => 0.5 - Math.random());
      }
    
      nextQuestion(): Question {
        const randomIndex: number = Math.floor( Math.random() * this.questions.length );
        this.questionCount++;
        return this.questions.splice(randomIndex, 1)[0];
      }

    }
    