import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-alert-jupiter',
  templateUrl: './alert-jupiter.component.html',
  styleUrls: ['./alert-jupiter.component.scss'],
})
export class AlertJupiterComponent implements OnInit {

  @Input() message;
  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  closeModal(){
    this.modalController.dismiss();
  }

}
