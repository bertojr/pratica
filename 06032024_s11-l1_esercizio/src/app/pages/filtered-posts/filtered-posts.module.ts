import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilteredPostsRoutingModule } from './filtered-posts-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { FilteredPostsComponent } from './filtered-posts.component';
import { ColorTagDirective } from '../../color-tag.directive';

@NgModule({
  declarations: [FilteredPostsComponent, ColorTagDirective],
  imports: [CommonModule, FilteredPostsRoutingModule, SharedModule],
})
export class FilteredPostsModule {}
