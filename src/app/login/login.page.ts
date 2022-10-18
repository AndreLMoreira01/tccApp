import { AlertEarthComponent } from './../alert-earth/alert-earth.component';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

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
      component: AlertEarthComponent,
      componentProps: { message: msg },
      cssClass: 'alert-earth'
    });

    await modal.present();
  }

}
