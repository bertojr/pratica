import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilteredPostsRoutingModule } from './filtered-posts-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { FilteredPostsComponent } from './filtered-posts.component';

@NgModule({
  declarations: [FilteredPostsComponent],
  imports: [CommonModule, FilteredPostsRoutingModule, SharedModule],
})
export class FilteredPostsModule {}
