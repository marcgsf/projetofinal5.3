import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Er404Page } from './er404.page';

const routes: Routes = [
  {
    path: '',
    component: Er404Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Er404PageRoutingModule {}
