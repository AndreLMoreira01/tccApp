import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { AlertEarthComponent } from '../alerts/alert-earth/alert-earth.component';

@Component({
  selector: 'app-interacoes',
  templateUrl: './interacoes.component.html',
  styleUrls: ['./interacoes.component.scss'],
})
export class InteracoesComponent implements OnInit {

  constructor(private modalController: ModalController, private router: Router) { }

  ngOnInit() {}

  confirm() {
    return this.modalController.dismiss('confirm');
  }

  closeModal(){
    this.modalController.dismiss();
  }

  backHome(){
    this.modalController.dismiss();
    this.router.navigate(['/home']);
    this.showModal('O planeta foi desbloqueado');
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
