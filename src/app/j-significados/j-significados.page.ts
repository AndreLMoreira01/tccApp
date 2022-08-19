import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-j-significados',
  templateUrl: './j-significados.page.html',
  styleUrls: ['./j-significados.page.scss'],
})
export class JSignificadosPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
    this.mostraAlert()
  }

  async mostraAlert() {
    const alert = await this.alertController.create({
      header: 'Você ganhou uma conquista!',
      subHeader: 'Júpiter',
      message: 'Jogue o Jogo dos Significados',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
