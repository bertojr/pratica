import { NgModule } from '@angular/core';
import { InactivePostsComponent } from './inactive-posts.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: InactivePostsComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InactivePostsRoutingModule {}
