/* eslint-disable max-len */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  historias = [
    { id: 1, nome: 'Coraline', autor: 'autor', descricao: 'duduxo', tipo: 'eu nao sei', conquista: 'tipo', img:'src="../../assets/img/historias/alice.png"'},
    { id: 2, nome: 'Coraline', autor: 'autor', descricao: 'duduxo', tipo: 'eu nao sei', conquista: 'tipo'}
  ];

  buscarHistoria(index: number, itemObject: any) {
    return itemObject.id;
  }

  constructor(private alertController: AlertController) {

   }


   //alert quando abre o app
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
