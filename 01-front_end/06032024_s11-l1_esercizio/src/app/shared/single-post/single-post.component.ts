import { Component, Input } from '@angular/core';
import { iPost } from '../../models/post';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss',
})
export class SinglePostComponent {
  @Input()
  post!: iPost;
  formVisible: boolean = false;

  toggleForm() {
    this.formVisible = !this.formVisible;
  }
}
