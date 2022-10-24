import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DumboPageRoutingModule } from './dumbo-routing.module';

import { DumboPage } from './dumbo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DumboPageRoutingModule
  ],
  declarations: [DumboPage]
})
export class DumboPageModule {}
