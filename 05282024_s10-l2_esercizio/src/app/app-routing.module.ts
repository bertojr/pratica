import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ActivePostsComponent } from './pages/active-posts/active-posts.component';
import { InactivePostsComponent } from './pages/inactive-posts/inactive-posts.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { FilteredPostsComponent } from './pages/filtered-posts/filtered-posts.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'active-posts',
    component: ActivePostsComponent,
  },
  {
    path: 'inactive-posts',
    component: InactivePostsComponent,
  },
  {
    path: 'post-detail/:id',
    component: PostDetailComponent,
  },
  {
    path: 'filtered-posts',
    component: FilteredPostsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
