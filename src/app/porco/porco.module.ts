import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PorcoPageRoutingModule } from './porco-routing.module';

import { PorcoPage } from './porco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PorcoPageRoutingModule
  ],
  declarations: [PorcoPage]
})
export class PorcoPageModule {}
