import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivePostsComponent } from './pages/active-posts/active-posts.component';
import { InactivePostsComponent } from './pages/inactive-posts/inactive-posts.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'active-post',
    component: ActivePostsComponent,
  },
  {
    path: 'inactive-post',
    component: InactivePostsComponent,
  },
  {
    path: 'post-detail',
    component: PostDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
