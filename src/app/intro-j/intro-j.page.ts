import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EndingPage } from '../ending/ending.page';



@Component({
  selector: 'app-intro-j',
  templateUrl: './intro-j.page.html',
  styleUrls: ['./intro-j.page.scss'],
})
export class IntroJPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  async finish(title: string, message: string, endingType: string) {
    const modal = await this.modalCtrl.create({
      component: EndingPage,
      componentProps: { title, message, endingType },
      backdropDismiss: false,
      swipeToClose: true,
      keyboardClose: true
    });

    modal.present();
  }



  ngOnInit(): void {
        this.finish('Fim de jogo', 'Seu tempo acabou!', 'wrongAnswer');
        return;
      }

}
