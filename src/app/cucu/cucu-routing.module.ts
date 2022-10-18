import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CucuPage } from './cucu.page';

const routes: Routes = [
  {
    path: '',
    component: CucuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CucuPageRoutingModule {}
