import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JVelhaPage } from './j-velha.page';

const routes: Routes = [
  {
    path: '',
    component: JVelhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JVelhaPageRoutingModule {}
