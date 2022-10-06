import { Component, Input, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ending',
  templateUrl: './ending.page.html',
  styleUrls: ['./ending.page.scss'],
})
export class EndingPage implements OnInit {
  @Input()
  title: string;

  @Input()
  message: string;

  @Input()
  endingType: string; // quit, wrongAnser, win (ainda vai ser tratado)

  constructor(private questionService: QuestionService,
    private modalCtrl: ModalController)
   { }

  get prizeWon() {
    const prizeInfo = this.questionService.getPrizeInfo();
    return prizeInfo[this.endingType];
  }

  confirm() {
    return this.modalCtrl.dismiss('confirm');
  }

  ngOnInit(): void {
    console.log(this.questionService.getPrizeInfo());
  }
}
