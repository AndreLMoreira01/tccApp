import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-j-velha',
  templateUrl: './j-velha.page.html',
  styleUrls: ['./j-velha.page.scss'],
})
export class JVelhaPage {
  constructor(private alertController: AlertController) { }

  ngOnInit() {
    this.mostraAlert();
  }

  async mostraAlert() {
    const alert = await this.alertController.create({
      header: 'Você ganhou uma conquista!',
      subHeader: 'Lua',
      message: 'Jogue o Jogo da Velha',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
