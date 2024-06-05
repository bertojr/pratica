import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailRoutingModule } from './post-detail-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { PostDetailComponent } from './post-detail.component';

@NgModule({
  declarations: [PostDetailComponent],
  imports: [CommonModule, PostDetailRoutingModule, SharedModule],
})
export class PostDetailModule {}
