import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailfilmPage } from './detailfilm.page';

const routes: Routes = [
  {
    path: '',
    component: DetailfilmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailfilmPageRoutingModule {}
