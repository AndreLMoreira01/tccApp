import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlladinPageRoutingModule } from './alladin-routing.module';

import { AlladinPage } from './alladin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlladinPageRoutingModule
  ],
  declarations: [AlladinPage]
})
export class AlladinPageModule {}
