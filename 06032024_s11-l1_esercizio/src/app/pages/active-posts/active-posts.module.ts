import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivePostsRoutingModule } from './active-posts-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ActivePostsComponent } from './active-posts.component';

@NgModule({
  declarations: [ActivePostsComponent],
  imports: [CommonModule, ActivePostsRoutingModule, SharedModule],
})
export class ActivePostsModule {}
