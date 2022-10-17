import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PorkPage } from './pork.page';

const routes: Routes = [
  {
    path: '',
    component: PorkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PorkPageRoutingModule {}
