import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-alert-sun',
  templateUrl: './alert-sun.component.html',
  styleUrls: ['./alert-sun.component.scss'],
})
export class AlertSunComponent implements OnInit {

  @Input() message;
  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  closeModal(){
    this.modalController.dismiss();
  }

}
