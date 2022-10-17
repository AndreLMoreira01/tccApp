import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PorkPageRoutingModule } from './pork-routing.module';

import { PorkPage } from './pork.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PorkPageRoutingModule
  ],
  declarations: [PorkPage]
})
export class PorkPageModule {}
