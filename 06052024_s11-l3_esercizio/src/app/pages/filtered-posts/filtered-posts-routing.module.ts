import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FilteredPostsComponent } from './filtered-posts.component';

const routes: Routes = [
  {
    path: '',
    component: FilteredPostsComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilteredPostsRoutingModule {}
