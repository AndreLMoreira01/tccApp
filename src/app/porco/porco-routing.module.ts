import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PorcoPage } from './porco.page';

const routes: Routes = [
  {
    path: '',
    component: PorcoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PorcoPageRoutingModule {}
