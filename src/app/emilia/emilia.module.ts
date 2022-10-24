import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmiliaPageRoutingModule } from './emilia-routing.module';

import { EmiliaPage } from './emilia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmiliaPageRoutingModule
  ],
  declarations: [EmiliaPage]
})
export class EmiliaPageModule {}
