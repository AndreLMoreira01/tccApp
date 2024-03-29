import { EndingBComponent } from '../../jogos/ending-b/ending-b.component';
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Question, QuestionAnswer } from '../../models/question';
import { PrizeInfo } from '../../models/prize-info';
import { QuestionService } from '../../services/question.service';


@Component({
  selector: 'app-j-significados',
  templateUrl: './j-significados.page.html',
  styleUrls: ['./j-significados.page.scss'],
})


export class JSignificadosPage implements OnInit {

  curQuesion: Question;
  prizeInfo: PrizeInfo;
  timeLeft: number;
  private intervalId: any;

  constructor(
    private questionService: QuestionService,
    private modalCtrl: ModalController
    ) { }

private loadQuestion() {
this.curQuesion = this.questionService.nextQuestion();
this.prizeInfo = this.questionService.getPrizeInfo();

}

//
//private given() {
//  this.curQuesion = this.questionService.getPrizeInfo();
//}

async finish(title: string, message: string, endingType: string) {
  const modal = await this.modalCtrl.create({
    component: EndingBComponent,
    componentProps: { title, message, endingType },
    backdropDismiss: false,
    swipeToClose: true,
    keyboardClose: true
  });

  modal.present();
}


ngOnInit(): void {
  this.loadQuestion();
  this.intervalId = setInterval(() => {
    if(--this.timeLeft === 0) {
      clearInterval(this.intervalId);
      this.finish('Fim de jogo', 'Sa!', 'wrongAnswer');
      return;
    }
  }, 1000);
}


  giveUp() {
    this.finish('Você fez', 'Você parou!', 'quit');
    clearInterval(this.intervalId);
  }

  givenUp(answer: QuestionAnswer) {
  this.finish('Fim de jogo', 'Seu tempo acabou!', 'correctAnswer');
  }

  aoba(answer: QuestionAnswer) {

  }


  doAnswer(answer: QuestionAnswer) {
    if(answer.isRight) {
      this.loadQuestion();
    }
    else {
      this.finish('Fim de jogo', 'Oops! Você errou!', 'wrongAnswer');
      clearInterval(this.intervalId);
    }

  }

// if(questionCount == 1500){
// this.finish('Fim de jogo', 'Seu tempo acabou!', 'correctAnswer')
// }
}
