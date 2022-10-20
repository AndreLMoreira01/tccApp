import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JFrutasPageRoutingModule } from './j-frutas-routing.module';

import { JFrutasPage } from './j-frutas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JFrutasPageRoutingModule
  ],
  declarations: [JFrutasPage]
})
export class JFrutasPageModule {}
