import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuideComponent } from './guide/guide.component';

const routes: Routes = [
  {
    path: '',
    component: GuideComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StyleGuideRoutingModule { }
