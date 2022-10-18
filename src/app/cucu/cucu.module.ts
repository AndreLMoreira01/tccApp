import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CucuPageRoutingModule } from './cucu-routing.module';

import { CucuPage } from './cucu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CucuPageRoutingModule
  ],
  declarations: [CucuPage]
})
export class CucuPageModule {}
