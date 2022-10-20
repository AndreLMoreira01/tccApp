import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JVelhaPageRoutingModule } from './j-velha-routing.module';

import { JVelhaPage } from './j-velha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JVelhaPageRoutingModule
  ],
  declarations: [JVelhaPage]
})
export class JVelhaPageModule {}
