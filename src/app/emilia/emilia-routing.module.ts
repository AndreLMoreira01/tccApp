import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmiliaPage } from './emilia.page';

const routes: Routes = [
  {
    path: '',
    component: EmiliaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmiliaPageRoutingModule {}
