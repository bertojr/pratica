import { Component } from '@angular/core';

import { iPost } from '../../models/post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrl: './active-posts.component.scss',
})
export class ActivePostsComponent {
  postActiveArr: iPost[] = [];
  constructor(private postsSvc: PostsService) {}

  ngOnInit() {
    this.postActiveArr = this.postsSvc.getPostActive();
  }
}
