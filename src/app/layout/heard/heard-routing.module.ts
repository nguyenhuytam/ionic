import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeardPage } from './heard.page';

const routes: Routes = [
  {
    path: '',
    component: HeardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeardPageRoutingModule {}
