import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DumboPage } from './dumbo.page';

const routes: Routes = [
  {
    path: '',
    component: DumboPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DumboPageRoutingModule {}
