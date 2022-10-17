import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroJPage } from './intro-j.page';

const routes: Routes = [
  {
    path: '',
    component: IntroJPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroJPageRoutingModule {}
