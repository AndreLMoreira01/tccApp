import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-alert-moon',
  templateUrl: './alert-moon.component.html',
  styleUrls: ['./alert-moon.component.scss'],
})
export class AlertMoonComponent implements OnInit {

  @Input() message;
  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  closeModal(){
    this.modalController.dismiss();
  }
}
