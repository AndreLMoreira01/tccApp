import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-alert-mars',
  templateUrl: './alert-mars.component.html',
  styleUrls: ['./alert-mars.component.scss'],
})
export class AlertMarsComponent implements OnInit {

  @Input() message;
  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  closeModal(){
    this.modalController.dismiss();
  }
}
