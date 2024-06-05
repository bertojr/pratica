import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
    pathMatch: 'full',
  },
  {
    path: 'active-posts',
    loadChildren: () =>
      import('./pages/active-posts/active-posts.module').then(
        (m) => m.ActivePostsModule
      ),
  },
  {
    path: 'inactive-posts',
    loadChildren: () =>
      import('./pages/inactive-posts/inactive-posts.module').then(
        (m) => m.InactivePostsModule
      ),
  },
  {
    path: 'post-detail/:id',
    loadChildren: () =>
      import('./pages/post-detail/post-detail.module').then(
        (m) => m.PostDetailModule
      ),
  },
  {
    path: 'filtered-posts',
    loadChildren: () =>
      import('./pages/filtered-posts/filtered-posts.module').then(
        (m) => m.FilteredPostsModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then((m) => m.ProfileModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
