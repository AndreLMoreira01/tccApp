import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-earth',
  templateUrl: './alert-earth.component.html',
  styleUrls: ['./alert-earth.component.scss'],
})
export class AlertEarthComponent implements OnInit {

  @Input() message;
  constructor(private modalController: ModalController, private router: Router) { }

  ngOnInit() {}

  closeModal(){
    this.modalController.dismiss();
  }

  backHome(){
    this.modalController.dismiss();
    this.router.navigate(['/home']);
  }

}
