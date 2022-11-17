import { AlertEarthComponent } from '../alerts/alert-earth/alert-earth.component';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { InteracoesComponent } from '../interacoes/interacoes.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  unlockEarth(){
    this.showModal('O planeta foi desbloqueado');
  }

  async showModal( msg ){

    const modal = await this.modalController.create({
      component: InteracoesComponent,
      componentProps: { message: msg },
      cssClass: 'interacoes'
    });

    await modal.present();
  }

}
