/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-j-velha',
  templateUrl: './j-velha.page.html',
  styleUrls: ['./j-velha.page.scss'],
})
export class JVelhaPage {
  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }


}
