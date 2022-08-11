import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JSignificadosPageRoutingModule } from './j-significados-routing.module';

import { JSignificadosPage } from './j-significados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JSignificadosPageRoutingModule
  ],
  declarations: [JSignificadosPage]
})
export class JSignificadosPageModule {}
