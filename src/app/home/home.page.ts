/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

//alert quando abre o app
export class HomePage {
  historias = [
    { id: 1, nome: 'Coraline', autor: 'autor', descricao: 'duduxo', tipo: 'eu nao sei', conquista: 'tipo'}
  ];

  buscarHistoria(index: number, itemObject: any) {
    return itemObject.id;
  }

  constructor(private alertController: AlertController) {

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


 ngOnInit() {
  this.mostraAlert();
  }
}
