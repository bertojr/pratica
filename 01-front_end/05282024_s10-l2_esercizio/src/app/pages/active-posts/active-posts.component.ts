import { Component } from '@angular/core';
import { PostsService } from '../../posts.service';
import { iPost } from '../../models/post';

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
