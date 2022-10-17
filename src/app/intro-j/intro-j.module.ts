import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroJPageRoutingModule } from './intro-j-routing.module';

import { IntroJPage } from './intro-j.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroJPageRoutingModule
  ],
  declarations: [IntroJPage]
})
export class IntroJPageModule {}
