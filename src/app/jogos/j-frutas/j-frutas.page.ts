/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { PrizeInfo } from '../../models/prize-info';
import { Question, QuestionAnswer } from '../../models/question';
import { QuestionService } from '../../services/question.service';
import { EndingBComponent } from '../../jogos/ending-b/ending-b.component';

@Component({
  selector: 'app-j-frutas',
  templateUrl: './j-frutas.page.html',
  styleUrls: ['./j-frutas.page.scss'],
})
export class JFrutasPage implements OnInit {

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
}

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
      this.finish('Fim de jogo', 'Seu tempo acabou!', 'wrongAnswer');
      return;
    }
  }, 1000);
}


  giveUp() {
    this.finish('Fim de jogo', 'Você parou!', 'quit');
    clearInterval(this.intervalId);
  }

  doAnswer(answer: QuestionAnswer) {
    if(answer.isRight) {
      this.loadQuestion();
    } else {
      this.finish('Fim de jogo', 'Oops! Você errou!', 'wrongAnswer');
      clearInterval(this.intervalId);
    }
  }



}
