import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-earth',
  templateUrl: './alert-earth.component.html',
  styleUrls: ['./alert-earth.component.scss'],
})
export class AlertEarthComponent implements OnInit {

  @Input() message;
  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  closeModal(){
    this.modalController.dismiss();
  }

}
