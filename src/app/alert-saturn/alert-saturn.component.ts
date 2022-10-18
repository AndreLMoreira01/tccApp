import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-alert-saturn',
  templateUrl: './alert-saturn.component.html',
  styleUrls: ['./alert-saturn.component.scss'],
})
export class AlertSaturnComponent implements OnInit {

  @Input() message;
  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  closeModal(){
    this.modalController.dismiss();
  }

}
