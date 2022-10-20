import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JFrutasPage } from './j-frutas.page';

const routes: Routes = [
  {
    path: '',
    component: JFrutasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JFrutasPageRoutingModule {}
