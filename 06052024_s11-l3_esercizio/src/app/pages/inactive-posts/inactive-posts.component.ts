import { Component } from '@angular/core';
import { iPost } from '../../models/post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrl: './inactive-posts.component.scss',
})
export class InactivePostsComponent {
  postInactiveArr: iPost[] = [];
  constructor(private postsSvc: PostsService) {}

  ngOnInit() {
    this.postInactiveArr = this.postsSvc.getPostInactive();
  }
}
