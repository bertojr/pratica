import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglePostComponent } from './single-post/single-post.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SinglePostComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [SinglePostComponent],
})
export class SharedModule {}
