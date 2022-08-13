import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-teste',
  templateUrl: './teste.page.html',
  styleUrls: ['./teste.page.scss'],
})
export class TestePage implements OnInit {
//importanto o alert

  constructor(private alertController: AlertController) { }

  ngOnInit() {
    this.mostraAlert()
  }
  async mostraAlert() {
    const alert = await this.alertController.create({
      header: 'Você ganhou uma conquista!',
      subHeader: 'Terra',
      message: 'Entre no app pela primeira vez',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
