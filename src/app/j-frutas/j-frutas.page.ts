import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-j-frutas',
  templateUrl: './j-frutas.page.html',
  styleUrls: ['./j-frutas.page.scss'],
})
export class JFrutasPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
    this.mostraAlert()
  }

  async mostraAlert() {
    const alert = await this.alertController.create({
      header: 'Você ganhou uma conquista!',
      subHeader: 'Netuno',
      message: 'Jogue o Jogo das Frutas',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
