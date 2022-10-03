/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
//alert quando abre o app
export class HomePage {
  constructor(private alertController: AlertController) { }

  ngOnInit() {
    this.mostraAlert();
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
